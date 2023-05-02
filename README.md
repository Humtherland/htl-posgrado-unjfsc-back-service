<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Backend services for posgrado unjfsc registration and requests management developed with [Nest](https://github.com/nestjs/nest) framework.

## Installation

1. Installation of dependencies
```bash
$ yarn install
```

2. Deployment of Postgres with Docker
```bash
$ docker run -d -e POSTGRES_PASSWORD=secretpassword -e POSTGRES_DB=TesloDB -e POSTGRES_HOST_AUTH_METHOD=trust -p 5432:5432 postgres
```

3. Clone the ```.env.template``` file and rename it to ```.env```.

4. Change the environment variables in the ```.env``` file as required.

| ENVIRONMENT VARIABLES | DESCRIPTION |
| ------ | -------- |
| ```DB_HOST``` | The IP address of the database host. |
| ```DB_PORT``` | The port the database is running on. |
| ```DB_NAME``` | The name of the database. |
| ```DB_USERNAME``` | The username used to connect to the database. |
| ```DB_PASSWORD``` | The password used to connect to the database. |
| ```DB_LOAD``` | A boolean flag indicating whether initial data should be loaded into the database. |
| ```DB_SYNC``` | A boolean flag indicating whether models should be synchronized with the database. |
| ```PORT``` | The port the application is running on. |
| ```HOST_API``` | The base URL for the API. |
| ```JWT_SECRET``` | Text string used to sign and verify JSON Web tokens (JWT). |
| ```JWT_DURATION``` | How long the JWT token is valid before it expires. {5m,2h,24h} |

## Running the app

```bash
# development
$ yarn run start

# development debug
$ yarn run start:debug

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Generar un modulo

```bash
# We enter the src directory of the project
$ cd src

# We open a terminal and write the following command
$ nest g res [nombre del modulo]

# select you option
$ REST API (Enter)

# select you option
$ Y (enter)

```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

This is an MIT-licensed project.

## Stay in touch

- Author - [Samuel Luis Mendoza](https://www.linkedin.com/in/samuel14luis/)

## License

[MIT licensed](LICENSE).
