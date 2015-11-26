module.exports  = function(grunt){
    grunt
        .initConfig({
            shell:{
                dist:{
                    command:[
                        'mkdir -p dist', 'mkdir -p dist/css', 'mkdir -p dist/js',
                        'cp src/css/* dist/css'
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
                        'bower_components/jquery/dist/jquery.js'
                    ],
                    dest: 'dist/js/sitio.js'
                }
            },
            uglify:{
                javascript: {
                    files: {
                        'dist/js/landing.min.js': 'dist/js/landing.js'
                    },
                    options: {
                        mangle: false
                    }
                }
            }
        });
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-shell');
        grunt.loadNpmTasks('grunt-contrib-concat');

        grunt.registerTask('prod', ['shell']);
        grunt.registerTask('default', ['shell']);
};