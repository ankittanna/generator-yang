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

var MyBase = generators.Base.extend({
	anotherHelper: function(){
		console.log("Inside Another Helper");
	}
});

// Works by Order
module.exports = MyBase.extend({
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
	}
});


// Tasks of the generators
// Initializing
// Prompting
// Configuring
// default
// Writing
// Conflicts
// Install
// End

