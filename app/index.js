'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
	constructor: function(){
		generators.NamedBase.apply(this, arguments);
		this.log('name ', this.name);
	},
	init: function(){
		console.log("Inisde Init");

		this.baz = function(){
			console.log('Inside Baz');
		};	
	},
	_foo: function(){
		console.log("Inside Foo");
	},
	bar: function(){
		this.anotherHelper();
		this._foo();
		this.baz();
		console.log("Inside Bar");
	},
	initializing: function(){
		console.log("Step 1");
	},
	prompting: {
		method1: function(){
			console.log("Step 2.1");
		},
		method2: function(){
			console.log("Step 2.2");
		}
	},
	configuring: function(){
		console.log("Step 3");
	},
	default: function(){
		console.log("Step 4");
	},
	writing: function(){
		console.log("Step 5");
	},
	conflicts: function(){
		console.log("Step 6");
	},
	install: function(){
		console.log("Step 7");
	},
	end: function(){
		console.log("Step 8");
	},
	customMethod: function(){
		console.log("Its a custom method. Falls by default in default slot executing after default.");
	}
});
