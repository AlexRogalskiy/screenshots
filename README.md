# _Styled screenshots_

> Generate jpeg/png [styled screenshots](https://en.wikipedia.org/wiki/Screenshot)

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/screenshots)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/screenshots)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/screenshots?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/screenshots)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/screenshots)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/screenshots)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/screenshots)
![GitHub](https://img.shields.io/github/license/AlexRogalskiy/screenshots)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/screenshots)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/screenshots/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/screenshots)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/screenshots)
[![Tokei](https://tokei.rs/b1/github/AlexRogalskiy/screenshots?category=lines)](https://github.com/XAMPPRocky/tokei)
![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/AlexRogalskiy/screenshots)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![DOI](https://zenodo.org/badge/338610006.svg)](https://zenodo.org/badge/latestdoi/338610006)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/screenshots/master/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/screenshots)](https://img.shields.io/github/issues/alexrogalskiy/screenshots)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/screenshots)](https://img.shields.io/github/forks/alexrogalskiy/screenshots)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/screenshots)](https://img.shields.io/github/stars/alexrogalskiy/screenshots)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![Maintainability](https://api.codeclimate.com/v1/badges/ed7702f8cf28917829fa/maintainability)](https://codeclimate.com/github/AlexRogalskiy/screenshots/maintainability)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/AlexRogalskiy/screenshots.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/screenshots/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/AlexRogalskiy/screenshots.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/screenshots/context:javascript)

[![Renovatebot](https://badgen.net/badge/renovate/enabled/green?cache=300)](https://renovatebot.com/)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/screenshots)
[![Hits-of-Code](https://hitsofcode.com/github/AlexRogalskiy/screenshots)](https://hitsofcode.com/github/AlexRogalskiy/screenshots/view)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][tags]
[![GitHub Super-Linter](https://github.com/AlexRogalskiy/screenshots/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

## _Table of contents_

<!--ts-->
   * [<em>Styled screenshots</em>](#styled-screenshots)
      * [<em>Table of contents</em>](#table-of-contents)
      * [<em>Description</em>](#description)
      * [<em>How to use</em>](#how-to-use)
      * [<em>Example</em>](#example)
      * [<em>Visitor stats</em>](#visitor-stats)
      * [<em>Licensing</em>](#licensing)
      * [<em>Authors</em>](#authors)
      * [<em>Versioning</em>](#versioning)
      * [<em>Contribution</em>](#contribution)
      * [<em>Acknowledgement</em>](#acknowledgement)
      * [<em>Forks</em>](#forks)
      * [<em>Development Support</em>](#development-support)
<!--te-->

## _Description_

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/screenshots" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/screenshots" alt="Project updated status" />
    </a>
</p>

_**Styled Screenshots**_ is a serverless function that generates dynamically styled graph images based on SVG (Scalable Vector Graphics).
For the tech stack, _**Styled Screenshots**_ using Typescript and serverless function from Vercel stack.

## _How to use_

It's simple, you can copy paste this markdown content, like this one:

```
![Styled Screenshots](https://styled-screenshots.alexrogalskiy.vercel.app/api?url=[url]&width=[width]&height=[height]&fullPage=[fullPage]&type=[type]&encoding=[encoding])
```

There are several options you can use from the list:

|  **Options**    | **Description**           |   **Type**                         | **Example**            | **Query Params**          | 
| --------------- | ------------------------- | ---------------------------------- | ---------------------- | ------------------------- |
| **[Url]**       | Json data source url      | <code>String</code>                | https://host/data.json | ```?url=[value]```        |
| **[Width]**     | Chart graph image width   | <code>Numeric</code>               | 400                    | ```&width=[value]```      |
| **[Height]**    | Chart graph image height  | <code>Numeric</code>               | 400                    | ```&height=[value]```     |
| **[FullPage]**  | Full page viewport        | <code>Boolean/numeric</code>       | true|false || 1|0      | ```&fullPage=[value]```   |
| **[Type]**      | Image content type        | <code>String</code>                | jpeg | png             | ```&type=[value]```       |
| **[Encoding]**  | Image encoding            | <code>String</code>                | base64 | binary        | ```&encoding=[value]```   |

## _Example_

This is example of using _**Styled Screenshots**_:

```
![Styled Screenshots](https://styled-screenshots.alexrogalskiy.vercel.app/api?url=https://www.google.com/&width=450&height=250)
```

Result:

<div align="center" style="align-content: center">
    <img width="100%" height="100%" src="https://styled-screenshots.alexrogalskiy.vercel.app/api?url=https://www.google.com/&width=450&height=250" alt="Screenshots" />
</div>

## _Visitor stats_

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fscreenshots&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/screenshots?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/screenshots?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/screenshots?style=social)

## _Licensing_

_**Styled Screenshots**_ is distributed under LGPL version 3 or later, [[License](https://github.com/AlexRogalskiy/screenshots/blob/master/LICENSE)].
LGPLv3 is additional permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## _Authors_

_**Styled Screenshots**_ is maintained by the following GitHub team-members:

* [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## _Versioning_

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository][tags].

## _Contribution_

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/screenshots?size=50&padding=5&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/screenshots/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us ([emoji key](https://allcontributors.org/docs/en/emoji-key)).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/screenshots)

See also the list of [contributors][contributors] who participated in this project.

## _Acknowledgement_

[![Stargazers repo roster for @AlexRogalskiy/screenshots](https://reporoster.com/stars/AlexRogalskiy/screenshots)][stars]

## _Forks_

[![Forkers repo roster for @AlexRogalskiy/screenshots](https://reporoster.com/forks/AlexRogalskiy/screenshots)][forkers]

## _Development Support_

Like _**Styled Screenshots**_ ? Consider buying me a coffee :\)

[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/alexrogalskiy)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=buy%20me%20a%20coffee)](https://www.buymeacoffee.com/AlexRogalskiy)
[![KoFi](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/alexrogalskiy)

---

[![forthebadge](https://img.shields.io/badge/made%20with-%20typescript-C1282D.svg?logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/)
[![forthebadge](https://img.shields.io/badge/powered%20by-%20vercel-7116FB.svg?logo=vercel&style=for-the-badge)](https://vercel.com/)
[![forthebadge](https://img.shields.io/badge/build%20with-%20%E2%9D%A4-B6FF9B.svg?logo=heart&style=for-the-badge)](https://forthebadge.com/)


  [repo]:           https://github.com/AlexRogalskiy/screenshots
  [tags]:           https://github.com/AlexRogalskiy/screenshots/tags
  [issues]:         https://github.com/AlexRogalskiy/screenshots/issues
  [pulls]:          https://github.com/AlexRogalskiy/screenshots/pulls
  [wiki]:           https://github.com/AlexRogalskiy/screenshots/wiki
  [stars]:          https://github.com/AlexRogalskiy/screenshots/stargazers
  [forkers]:        https://github.com/AlexRogalskiy/screenshots/network/members
  [contributors]:   https://github.com/AlexRogalskiy/screenshots/graphs/contributors
