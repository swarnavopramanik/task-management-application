# task-management-application


![image](https://user-images.githubusercontent.com/105142693/185401075-bc1fb0b3-6d26-4f36-82ec-63128e355923.png)


GitHub Readme Stats
Get dynamically generated GitHub stats on your READMEs!

Tests Passing  Issues GitHub pull requests

 

View Demo · Report Bug · Request Feature · Ask Question

Français · 简体中文 · Español · Deutsch · 日本語 · Português Brasileiro · Italiano · 한국어 . Nederlands . नेपाली . Türkçe

Love the project? Please consider donating to help it improve!

Give india logo

Are you considering supporting the project by donating? Please DON'T!!

Instead, Help India fight the 2nd deadly wave of COVID-19.
Thousands of people are dying in India because of a lack of Oxygen & also COVID-related infrastructure.

Visit https://indiafightscorona.giveindia.org and make a small donation to help us fight COVID and overcome this crisis.
A small donation goes a long way. ❤️

Features
GitHub Stats Card
GitHub Extra Pins
Top Languages Card
Wakatime Week Stats
Themes
Customization
Common Options
Stats Card Exclusive Options
Repo Card Exclusive Options
Language Card Exclusive Options
Wakatime Card Exclusive Option
Deploy Yourself
GitHub Stats Card
Copy-paste this into your markdown content, and that's it. Simple!

Change the ?username= value to your GitHub username.

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra)](https://github.com/anuraghazra/github-readme-stats)
Note: Available ranks are S+ (top 1%), S (top 25%), A++ (top 45%), A+ (top 60%), and B+ (everyone). The values are calculated by using the cumulative distribution function using commits, contributions, issues, stars, pull requests, followers, and owned repositories. The implementation can be investigated at src/calculateRank.js.

Hiding individual stats
To hide any specific stats, you can pass a query parameter &hide= with comma-separated values.

Options: &hide=stars,commits,prs,issues,contribs

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&hide=contribs,prs)
Adding private contributions count to total commits count
You can add the count of all your private contributions to the total commits count by using the query parameter &count_private=true.

Note: If you are deploying this project yourself, the private contributions will be counted by default. Otherwise, you need to choose to share your private contribution counts.

Options: &count_private=true

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&count_private=true)
Showing icons
To enable icons, you can pass show_icons=true in the query param, like so:

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true)
Themes
With inbuilt themes, you can customize the look of the card without doing any manual customization.

Use &theme=THEME_NAME parameter like so :-

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=radical)
All inbuilt themes:-
dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula

GitHub Readme Stats Themes

You can look at a preview for all available themes or checkout the theme config file & you can also contribute new themes if you like :D

Customization
You can customize the appearance of your Stats Card or Repo Card however you wish with URL params.

Common Options:
title_color - Card's title color (hex color)
text_color - Body text color (hex color)
icon_color - Icons color if available (hex color)
border_color - Card's border color (hex color). (Does not apply when hide_border is enabled)
bg_color - Card's background color (hex color) or a gradient in the form of angle,start,end
hide_border - Hides the card's border (boolean)
theme - name of the theme, choose from all available themes
cache_seconds - set the cache header manually (min: 7200, max: 86400)
locale - set the language in the card (e.g. cn, de, es, etc.)
border_radius - Corner rounding on the card_
Note: The minimum of cache_seconds is currently 4 hours as a temporary fix for PATs exhaustion.

Gradient in bg_color
You can provide multiple comma-separated values in the bg_color option to render a gradient, with the following format:

&bg_color=DEG,COLOR1,COLOR2,COLOR3...COLOR10
Note on cache: Repo cards have a default cache of 4 hours (14400 seconds) if the fork count & star count is less than 1k, otherwise, it's 2 hours (7200 seconds). Also, note that the cache is clamped to a minimum of 2 hours and a maximum of 24 hours.

Stats Card Exclusive Options:
hide - Hides the specified items from stats (Comma-separated values)
hide_title - (boolean)
hide_rank - (boolean) hides the rank and automatically resizes the card width
show_icons - (boolean)
include_all_commits - Count total commits instead of just the current year commits (boolean)
count_private - Count private commits (boolean)
line_height - Sets the line-height between text (number)
custom_title - Sets a custom title for the card
disable_animations - Disables all animations in the card (boolean)
Repo Card Exclusive Options:
show_owner - Show the repo's owner name (boolean)
Language Card Exclusive Options:
hide - Hide the languages specified from the card (Comma-separated values)
hide_title - (boolean)
layout - Switch between two available layouts default & compact
card_width - Set the card's width manually (number)
langs_count - Show more languages on the card, between 1-10, defaults to 5 (number)
exclude_repo - Exclude specified repositories (Comma-separated values)
custom_title - Sets a custom title for the card
⚠️ Important: Language names should be uri-escaped, as specified in Percent Encoding (i.e: c++ should become c%2B%2B, jupyter notebook should become jupyter%20notebook, etc.) You can use urlencoder.org to help you do this automatically.

Wakatime Card Exclusive Options:
hide - Hide the languages specified from the card (Comma-separated values)
hide_title - (boolean)
line_height - Sets the line-height between text (number)
hide_progress - Hides the progress bar and percentage (boolean)
custom_title - Sets a custom title for the card
layout - Switch between two available layouts default & compact
langs_count - Limit the number of languages on the card, defaults to all reported languages
api_domain - Set a custom API domain for the card, e.g. to use services like Hakatime or Wakapi
range – Request a range different from your WakaTime default, e.g. last_7_days. See WakaTime API docs for a list of available options.
GitHub Extra Pins
GitHub extra pins allow you to pin more than 6 repositories in your profile using a GitHub readme profile.

Yay! You are no longer limited to 6 pinned repositories.

Usage
Copy-paste this code into your readme and change the links.

Endpoint: api/pin?username=anuraghazra&repo=github-readme-stats

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats)](https://github.com/anuraghazra/github-readme-stats)
Demo
Readme Card

Use show_owner variable to include the repo's owner username

Readme Card

Top Languages Card
The top languages card shows a GitHub user's most frequently used top language.

NOTE: Top Languages does not indicate my skill level or anything like that; it's a GitHub metric to determine which languages have the most code on GitHub. It's a new feature of github-readme-stats.

Usage
Copy-paste this code into your readme and change the links.

Endpoint: api/top-langs?username=anuraghazra

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra)](https://github.com/anuraghazra/github-readme-stats)
Exclude individual repositories
You can use &exclude_repo=repo1,repo2 parameter to exclude individual repositories.

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&exclude_repo=github-readme-stats,anuraghazra.github.io)](https://github.com/anuraghazra/github-readme-stats)
Hide individual languages
You can use &hide=language1,language2 parameter to hide individual languages.

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&hide=javascript,html)](https://github.com/anuraghazra/github-readme-stats)
Show more languages
You can use the &langs_count= option to increase or decrease the number of languages shown on the card. Valid values are integers between 1 and 10 (inclusive), and the default is 5.

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&langs_count=8)](https://github.com/anuraghazra/github-readme-stats)
Compact Language Card Layout
You can use the &layout=compact option to change the card design.

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact)](https://github.com/anuraghazra/github-readme-stats)
Demo
Top Langs

Compact layout
Top Langs

Wakatime Week Stats
Change the ?username= value to your Wakatime username.

[![willianrod's wakatime stats](https://github-readme-stats.vercel.app/api/wakatime?username=willianrod)](https://github.com/anuraghazra/github-readme-stats)
Note: Please be aware that we currently only show data from Wakatime profiles that are public.

Demo
willianrod's wakatime stats

willianrod's wakatime stats

Compact layout
willianrod's wakatime stats

All Demos
Default
Anurag's GitHub stats

Hiding specific stats
Anurag's GitHub stats

Showing icons
Anurag's GitHub stats

Customize Border Color
Anurag's GitHub stats

Include All Commits
Anurag's GitHub stats

Themes
Choose from any of the default themes

Anurag's GitHub stats

Gradient
Anurag's GitHub stats

Customizing stats card
Anurag's GitHub stats

Setting card locale
Anurag's GitHub stats

Customizing repo card
Customized Card

Top languages
Top Langs

Wakatime card
willianrod's wakatime stats

Quick Tip (Align The Repo Cards)
You usually won't be able to layout the images side by side. To do that you can use this approach:

<a href="https://github.com/anuraghazra/github-readme-stats">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats" />
</a>
<a href="https://github.com/anuraghazra/convoychat">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=convoychat" />
</a>
Deploy on your own Vercel instance
Check Out Step By Step Video Tutorial By @codeSTACKr
Since the GitHub API only allows 5k requests per hour, my https://github-readme-stats.vercel.app/api could possibly hit the rate limiter. If you host it on your own Vercel server, then you don't have to worry about anything. Click on the deploy button to get started!

NOTE: Since #58 we should be able to handle more than 5k requests and have no issues with downtime :D

Deploy to Vercel

Guide on setting up Vercel 🔨
💖 Support the project
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously, this takes time. You can use this service for free.

However, if you are using this project and are happy with it or just want to encourage me to continue creating stuff, there are a few ways you can do it:-

Giving proper credit when you use github-readme-stats on your readme, linking back to it :D
Starring and sharing the project 🚀
paypal.me/anuraghazra - You can make one-time donations via PayPal. I'll probably buy a coffee tea. 🍵
Thanks! ❤️

https://vercel.com?utm_source=github_readme_stats_team&utm_campaign=oss

Contributions are welcome! <3

Made with ❤️ and JavaScript.



