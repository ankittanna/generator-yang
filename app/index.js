'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

/*module.exports = generators.Base.extend({
	method1: function(){
		console.log("Hello World!");
	}
}); */

/* module.exports = generators.NamedBase.extend({
	constructor: function(){
		generators.NamedBase.apply(this, arguments);
		this.log('name ', this.name);
	},
	method1: function(){
		console.log("Hello World!");
	}
}); */

// Works by Order
module.exports = generators.Base.extend({
	_foo: function(){
		console.log("Inside Foo");
	},
	bar: function(){
		console.log("Inside Bar");
	}
});