module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				options: {
					transform: [
						['babelify', {presets: ['es2015']}],
						['stringify']
					]
				},
				src: ['./js/index.js'],
				dest: './build/app.js'
			}
		},
		uglify: {
			main : {
				files: {
					'./build/app.min.js': './build/app.js'
				}
			}
		},
		sass: {
			dist: {
				files: {
					'./css/main.css' : './sass/main.scss',
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-sass");
	grunt.registerTask("default", ["build"]);
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask("build", ["browserify", 'uglify', 'sass']);
};