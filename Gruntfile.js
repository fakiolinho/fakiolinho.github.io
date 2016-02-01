module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'app/assets/css/sass',
                    cssDir: 'app/assets/css',
                    outputStyle: 'expanded',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'app/assets/css/sass',
                    cssDir: 'app/assets/css',
                }
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/app.js": "src/app.js"
                }
            }
        },
        watch: {
            css: {
                files: ['app/assets/css/sass/*.sass'],
                tasks: ['compass']
            },
            js: {

            },
            options: {
                livereload: true,
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass', 'watch']);
};
