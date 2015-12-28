module.exports  = function(grunt){
    grunt
        .initConfig({
            shell:{
                dist:{
                    command:[
                        'mkdir -p dist',
                        'mkdir -p dist/css',
                        'mkdir -p dist/js',
                        'mkdir -p dist/img'
                    ].join('&&')
                },
                font:{
                    command:[
                        'mkdir -p src/fonts',
                        'cp bower_components/font-awesome/fonts/* src/fonts/'
                    ].join('&&')
                }
            },
            concat:{
                options: {
                    separator: ';'
                },
                dist: {
                    src: [
                        'bower_components/angular/angular.js',
                        'bower_components/jquery/dist/jquery.js',
                        'src/js/app.js'
                    ],
                    dest: 'dist/js/sitio.js'
                }
            },
            uglify:{
                javascript: {
                    files: {
                        'dist/js/sitio.min.js': 'dist/js/sitio.js'
                    },
                    options: {
                        mangle: false
                    }
                }
            },
            sass:{
                options: {
                    style: 'compressed'
                },
                dist: {
                    files: {
                        'src/css/style.min.css': 'src/sass/style.scss'
                    }
                }
            },
            htmlmin:{
                compile:{
                    options: {
                        removeComments: true,
                        collapseWhitespace: true
                    },
                    files:{
                        'dist/index.html':'src/index.html'
                    }
                }
            }
        });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('prod', ['shell']);
    grunt.registerTask('dev', ['sass']);
    grunt.registerTask('dev_font', ['shell:font']);
    grunt.registerTask('default', ['shell:dist','htmlmin']);
};