// Yeoman has to work with File Paths
// Copy files and directories
// Work with Template files
// Writing a dynamic file
// Common Artifcats

// Important Points
// Yeoman File Context: 
// Destination Context - This is where the application will be scaffolded .yo-rc.json - determines the root of the project
// Templates Context - This is where you read templated and generate sub generators

// Uses in memory file system. Prevents overwriting.

// File Paths and common Static Files
// bower.json, package.json, favicon.ico, gulpflie.js, .gitignore, 
// Use writing method. Inside the writing object use several functions orderly
// Create a templates folder and copy a static file inside it.
// use templatePath and destinationPath to determine the locations.
// use _ in front of file name when you are using in template path. 


'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
	init: function(){
			
	},
	_foo: function(){

	},
	bar: function(){
		
	},
	initializing: function(){
		
	},
	prompting: function(){
		
	},
	configuring: function(){
		
	},
	default: function(){
		
	},
	writing: {
		gulpflie: function(){},
		packageJSON: function(){},
		git: function(){},
		bower: function(){},
		appStaticFiles: function(){
			console.log('Template Path: ' + this.templatePath());
			console.log('Destination Path: ' + this.destinationPath());

			// Now no longer need of adding _ to the files
			var source = this.templatePath('favicon.ico');
			var destination = this.destinationPath('src/favicon.ico');

			console.log('Source: ' + source);
			console.log('Destination: ' + destination);

			this.copy(source, destination);
		},
		scripts: function(){},
		html: function(){}
	},
	conflicts: function(){
		
	},
	install: function(){
		
	},
	end: function(){
		
	}
});
