# <%= name %>
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

Simple nodejs server that acts as a set of CDS services

## Usage
This card service can be deployed with docker. By default, the Dockerfile exposes port 9000. Creating the docker container can be done by:

```bash
$ docker build -t <your-name>/<%= name %> .
Successfully built <container-id>

$ docker run -p 9000:9000 -d --rm <your-name>/<%= name %>
```

[npm-image]: https://badge.fury.io/js/<%= name %>.svg
[npm-url]: https://npmjs.org/package/<%= name %>
[travis-image]: https://travis-ci.org/cds-hooks/<%= name %>.svg?branch=master
[travis-url]: https://travis-ci.org/cds-hooks/<%= name %>
[daviddm-image]: https://david-dm.org/cds-hooks/<%= name %>.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/cds-hooks/<%= name %>
[coveralls-image]: https://coveralls.io/repos/cds-hooks/<%= name %>/badge.svg
[coveralls-url]: https://coveralls.io/r/cds-hooks/<%= name %>
