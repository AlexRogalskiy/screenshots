# _Styled screenshots_

<div align="center">
<p>Create your styled screenshots dynamically</p>

![type definitions](https://img.shields.io/npm/types/typescript?style=flat-square)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/screenshots/master/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/screenshots)](https://img.shields.io/github/issues/alexrogalskiy/screenshots)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/screenshots)](https://img.shields.io/github/forks/alexrogalskiy/screenshots)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/screenshots)](https://img.shields.io/github/stars/alexrogalskiy/screenshots)
[![Maintainability](https://api.codeclimate.com/v1/badges/ed7702f8cf28917829fa/maintainability)](https://codeclimate.com/github/AlexRogalskiy/screenshots/maintainability)

</div>

## _Table of contents_

<!--ts-->
<!--te-->

## _Description_

Screenshots is a serverless dynamically function that generates styled graph images based on SVG (Scalable Vector Graphics).
For the tech stack, _**Styled Screenshots**_ using Typescript and serverless function from Vercel as this project had been deployed on Vercel stack.

## _How to use_

It's simple, you can copy paste this markdown content, like this one:

```
![Styled Screenshots](https://styled-screenshots.alexrogalskiy.vercel.app/api?category=[category])
```

There are several options you can use from the list:

|  Options  | Description               |   Type                           | Example                | Query Params              | 
| --------- | ------------------------- | -------------------------------- | ---------------------- | ------------------------- |
| Url       | Json data source url      | String url in json data format   | https://host/data.json | ```?url=[value]```        |
| Width     | Chart graph image width   | Numeric image width              | 400                    | ```&width=[value]```      |
| Height    | Chart graph image height  | Numeric image height             | 400                    | ```&height=[value]```     |
| FullPage  | Full page viewport        | Boolean/numeric                  | true|false || 1|0      | ```&fullPage=[value]```   |
| Type      | Image content type        | String                           | jpeg | png             | ```&type=[value]```       |
| Encoding  | Image encoding            | String                           | base64 | binary        | ```&encoding=[value]```   |

## _Example_

This is example of using _**Styled Screenshots**_:

```
![Styled Screenshots](https://styled-screenshots.vercel.app/api?url=https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json&width=400&height=400)
```

Result:

![Styled Screenshots](https://styled-screenshots.vercel.app/api?url=https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json&width=400&height=400)

## _Contribution_

Want to make this project better? You can contribute this project, I am very open if there are contributions to this project.

---

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)

Powered by Typescript and Vercel. Code licensed under GPL-3.0 license.
