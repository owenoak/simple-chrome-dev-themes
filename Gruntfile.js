module.exports = function(grunt) {

	/* Load Plugins */

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-bump');


	grunt.initConfig({
		pkg: '<json:package.json>',
		compress: {
			main: {
				options: {
					archive: 'theme-extension.zip',
					mode: 'zip'
				},
				files: [
					{
						cwd: 'theme-extension/',
						src: '**/*',
						expand: true
					}
				]
			}
		},
		less: {
			generate: {
				files: {
					'theme-extension/theme.css': 'less/config.less',
				}
			}
		},
		watch: {
			global: {
				files: ['less/*.less','themes/*.less'],
				tasks: ['less:generate']
			},

		}

	});

	grunt.registerTask('default', ['less']);
};
