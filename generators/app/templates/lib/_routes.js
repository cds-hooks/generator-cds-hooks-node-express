/* eslint-disable no-warning-comments */
'use strict';

var express = require('express');
var router = express.Router(); // eslint-disable-line new-cap

router.post('/cds-services/<%= name %>/analytics/:uuid', function (req, res) {
  // TODO implement analytics service - see http://cds-hooks.org/#analytics
  res.status(204);
});

router.post('/cds-services/<%= name %>', function (req, res) {
  // TODO implement service - see http://cds-hooks.org/#calling-a-cds-service
  var card = {
    summary: 'Hello ' + req.body.prefetch.patientToGreet.resource.name[0].given[0],
    source: {
      label: 'Patient greeting service'
    },
    indicator: 'success'
  };

  res.json({cards: [card]});
});

router.get('/cds-services', function (req, res) {
  // TODO implement service discovery - see http://cds-hooks.org/#discovery
  var service = {
    id: '<%= name %>',
    name: 'Patient hello world',
    description: 'Greet patient by name',
    hook: 'patient-view',
    prefetch: {
      patientToGreet: 'Patient/{{Patient.id}}'
    }
  };

  res.json({services: [service]});
});

module.exports = router;
