'use strict';

var parts = ['Client', 'Tournaments', 'Participants', 'Matches'];

parts.forEach(function forEach(k) {
	exports[k] = require('./api/' + k.toLowerCase())[k];
});

/*
	### function createClient(options)
	#### @options {Object} options for the clients
	Generates a new API client.
*/
exports.createClient = function createClient(options) {
	var client = {};

	// require each lib in ./api and instantiate a new instance of each object, passing the options we were passed
	parts.forEach(function generate(k) {
		var endpoint = k.toLowerCase();
		client[endpoint] = new exports[k](options);
	});

	return client;
};