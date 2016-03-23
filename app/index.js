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
// this.copy, this.directory
// Conflict: Ynaxdh; Y is caps which is by default yes, n - no, a - yes for this and all, x - abort, d - show differences, h - help

// Leave the dot out of the convention for jshintrc, gitignore in templates and add it in the source file.

'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({
	init: function(){
			
	},
	_foo: function(){

	},
	bar: function(){
		
	},
	constructor: function(){
		generators.Base.apply(this, arguments);

		this.argument('appname', {type: String, required: true});
		this.appname = _.kebabCase(this.appname);
		this.log('AppName argument ', this.appname);

		this.option('includeutils', {
			desc: 'Optionally includes Angular Bootstrap Library.',
			type: Boolean,
			default: false
		});
	},
	initializing: function(){
		
	},
	prompting: function(){
		this.log(yosay('Welcome to ' + chalk.yellow('YANG (YET ANOTHER ANGULAR GENERATOR)')+' !'));

		var done = this.async();
		this.prompt([{
			type: 'input',
			name: 'ngappname',
			message: 'Angular App Name (ng-app)',
			default: 'app',
			store: true
		},
		{
			type: 'checkbox',
			name: 'jslibs',
			message: 'Which JS Libraries would you like to have?',
			choices: [
				{
					name :'lodash',
					value:'lodash',
					checked: true
				},
				{
					name :'angular-bootstrap',
					value:'angularBootstrap',
					checked: false
				},
				{
					name :'momentjs',
					value:'momentJS',
					checked: false
				}
			]
		}], function(answers){
			this.log(answers);
			this.ngappname = answers.ngappname;
			
			this.includesLodash = _.includes(answers.jslibs, "lodash");
			this.includesMoment = _.includes(answers.jslibs, "momentJS");
			this.includesAngularBootstrap = _.includes(answers.jslibs, "angularBootstrap");

			done();
		}.bind(this));
	},
	configuring: function(){
		
	},
	default: function(){
		
	},
	writing: {
		gulpflie: function(){
			this.copy('_gulpfile.js', 'gulpflie.js');
			this.copy('_gulp.config.js', 'gulp.config.js');
			this.copy('jshintrc', '.jshintrc');
		},
		packageJSON: function(){
			this.copy('_package.json', 'package.json');
		},
		git: function(){
			this.copy('gitignore', '.gitignore');
		},
		bower: function(){
			var bowerJSON = {
				name: this.appname, // TODO: Make it dynamic
				license: 'MIT',
				dependencies: {}
			};

			bowerJSON.dependencies['angular'] = '~1.4.6';
			if(this.options.includeutils)
			{
				bowerJSON.dependencies['angular-bootstrap'] = '~0.13.4';
			}
			
			if(this.includesLodash)
			{
				bowerJSON.dependencies['lodash'] = '~3.10.1';	
			}
			
			if(this.includesMoment)
			{
				bowerJSON.dependencies['moment'] = '~2.10.6';
			}

			this.fs.writeJSON('bower.json', bowerJSON)
			this.copy('bowerrc', '.bowerrc');
		},
		appStaticFiles: function(){
			// console.log('Template Path: ' + this.templatePath());
			// console.log('Destination Path: ' + this.destinationPath());

			// Now no longer need of adding _ to the files
			var source = this.templatePath('favicon.ico');
			var destination = this.destinationPath('src/favicon.ico');

			// console.log('Source: ' + source);
			// console.log('Destination: ' + destination);

			this.copy(source, destination);
			this.directory('styles', 'src/styles');

		},
		scripts: function(){
			this.fs.copyTpl(
				this.templatePath('app/scripts/_app.js'),
				this.destinationPath('src/app/scripts/app.js'),
				{
					appName: this.ngappname
				}
			);
		},
		html: function(){
			this.fs.copyTpl(
				this.templatePath('_index.html'),
				this.destinationPath('src/index.html'),
				{
					appTitle: _.startCase(this.appname),
					appName: this.ngappname
				}
			);
			this.directory('app/views', 'src/app/views');
		}
	},
	conflicts: function(){
		
	},
	install: function(){
		
	},
	end: function(){
		
	}
});
