'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint : {
			options : {
				jshintrc : '.jshintrc'
			},
			gruntfile : {
				src : 'Gruntfile.js'
			},
			lib : {
				src : [ 'lib/**/*.js' ]
			},
			domain : {
				src : [ 'domain/**/*.js' ]
			},
			test : {
				src : [ 'test/**/*.js' ]
			},
		},
		watch : {
			gruntfile : {
				files : '<%= jshint.gruntfile.src %>',
				tasks : [ 'jshint:gruntfile' ]
			},
			lib : {
				files : '<%= jshint.lib.src %>',
				tasks : [ 'jshint:lib', 'mochaTest' ]
			},
			domain : {
				files : '<%= jshint.domain.src %>',
				tasks : [ 'jshint:lib', 'mochaTest' ]
			},
			test : {
				files : '<%= jshint.test.src %>',
				tasks : [ 'jshint:test', 'mochaTest' ]
			},
		},
		// Mocha
		mochaTest : {
			test : {
				options : {
					reporter : 'spec'
				},
				src : [ 'test/**/*.js' ]
			}
		}
	// options : {
	// run : true
	// }
	});

	// Load grunt mocha task
	grunt.loadNpmTasks('grunt-mocha-test');
	// These plugins provide necessary tasks.
	// grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', [ 'jshint', 'mochaTest' ]);

};
