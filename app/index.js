'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
	method1: function(){
		console.log("Hello World!");
	}
});