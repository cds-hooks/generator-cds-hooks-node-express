'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var _ = require('lodash');
var mkdirp = require('mkdirp');

function makeServiceName(name) {
  return _.kebabCase(name);
}

module.exports = yeoman.Base.extend({
  prompting: function () {
    var prompts = [{
      name: 'name',
      message: 'Hook Name',
      default: makeServiceName(path.basename(process.cwd())),
      filter: makeServiceName,
      validate: function (str) {
        return str.length > 0;
      }
    }, {
      name: 'description',
      message: 'Description'
    }, {
      name: 'homepage',
      message: 'Hook homepage url'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },
  default: function () {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        'Your CDS Service must be inside a folder named ' + this.props.name + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }
  },
  writing: function () {
    var ctx = {
      name: this.props.name,
      description: this.props.description,
      homepage: this.props.homepage
    };

    var _self = this;

    ['.editorconfig', '.gitattributes', '.gitignore', 'app.js', 'bin/www', 'Dockerfile'].forEach(function (file) {
      _self.fs.copy(
        _self.templatePath(file),
        _self.destinationPath(file));
    });

    ['lib/_routes.js', '_package.json'].forEach(function (file) {
      _self.fs.copyTpl(
        _self.templatePath(file),
        _self.destinationPath(file.replace(/_/, '')), ctx);
    });
  },

  install: function () {
    this.npmInstall();
  }
});
