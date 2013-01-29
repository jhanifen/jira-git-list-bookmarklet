(function () {
    var i,
        len,
        string,
        dashboard_key,
        dashboard,
        branches = [],
        branches_count = 0,
        dashboards = [ // Put dashboards here in the order you want them merged
            'Filter Results: Ready for Production Deployment',
            'Filter Results: Ready for Devint QA'
        ],
        dashboard_groups = {};

    for (dashboard_key in dashboards) {
        dashboard = dashboards[dashboard_key];
        dashboard_groups[dashboard] = [];
    }
                        
    jQuery('h3.dashboard-item-title').each(function () {
        var dashboard_name = jQuery(this).text();
        if (jQuery.inArray(dashboard_name, dashboards) > -1) {
            jQuery(this).parents('.dashboard-item-header').next('.dashboard-item-content').find('iframe').contents().find('tr.issuerow').each(function(){
                var $row = jQuery(this),
                    subsystem = $row.find('.customfield_10080 .labels').text().trim();

                if (subsystem === "None" || subsystem.search('panama') > -1) {
                    dashboard_groups[dashboard_name].push($row.attr('data-issuekey'));
                }
            });
        }
    });

    for (dashboard_key in dashboards) {
        dashboard = dashboards[dashboard_key];
        branches = branches.concat(dashboard_groups[dashboard]);
    }

    if (branches.length) {
        string = 'git merge';
        for (i = 0, len = branches.length; i < len; i++) {
            string += ' origin/' + branches[i];
        }
        prompt('for the git', string);
    } else {
        // Has this ever happened in the history of MMF?
        alert('No Branches');
    }
}());
