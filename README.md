## Jira Git List Bookmarklet

This will help create a git-merge command to reset DevInt

## Usage

Add the following as a bookmark and click on it whenever viewing the integration dashboard.

    javascript:(function(){var d=document,s=d.createElement('script');s.src='https://raw.github.com/JasonSanford/jira-git-list-bookmarklet/master/bookmarklet.js';d.body.appendChild(s);}())

## Notes

This bookmarklet assumes jQuery is on the page and is available as `jQuery`. If hosted jira ever changes this it will break.