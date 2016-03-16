'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	method1: function(){
		console.log("Hello World!");
	}
});