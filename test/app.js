'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-cds-hooks-node-express:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({skipInstall: true})
      .withPrompts({name: 'test-hook',
        description: 'A test CDS hook',
        homepage: 'http://cds-hooks.org'
      })
      .toPromise();
  });

  it('created and CD into a folder named like the service', function () {
    assert.equal(path.basename(process.cwd()), 'test-hook');
  });

  it('creates files', function () {
    var files = ['.editorconfig', '.gitattributes', '.gitignore', 'app.js', 'bin/www', 'Dockerfile'];
    assert.file(files);
  });

  it('generates a lib/routes.js file', function () {
    assert.file('lib/routes.js');

    assert.fileContent('lib/routes.js', 'router.post(\'/cds-services/test-hook/analytics/:uuid\'');
    assert.fileContent('lib/routes.js', 'router.post(\'/cds-services/test-hook\'');
    assert.fileContent('lib/routes.js', '    id: \'test-hook\',');
  });

  it('generates a package.json file', function () {
    assert.file('package.json');

    assert.jsonFileContent('package.json', {
      name: 'test-hook',
      description: 'A test CDS hook',
      homepage: 'http://cds-hooks.org',
      scripts: {
        start: 'node ./bin/www'
      },
      dependencies: {
        'body-parser': '^1.15.1',
        'cors': '^2.7.1',
        'express': '^4.13.4'
      },
      keywords: ['hl7', 'fhir', 'cds-hooks']
    });
  });

  it('generates a README.md file');
});
