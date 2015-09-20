module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      libsdev: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/angular',
            src: [
              'angular.js'
            ],
            dest: 'build/lib/'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/js',
            src: [
              'bootstrap.js'
            ],
            dest: 'build/lib/'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/css',
            src: [
              'bootstrap.css'
            ],
            dest: 'build/lib/'
          },
          {
            expand: true,
            cwd: 'node_modules/jquery/dist',
            src: [
              'jquery.js'
            ],
            dest: 'build/lib/'
          }
        ]
	    },
      app: {
        files: [
          {
            expand: true,
            cwd: 'app/',
            src: [
              'app.js'
            ],
            dest: 'build/'
          }
        ]
      }
    },
    htmlbuild: {
      dev: {
        src: 'app/index.html',
        dest: 'build/',
        options: {
          beautify: true,
          scripts: {
            libs: [
              'build/lib/jquery.js',
              'build/lib/angular.js',
              'build/lib/bootstrap.js'
            ],
            app: [
              'build/app.js'
            ]
          },
          styles: {
            libs: [
              'build/lib/bootstrap.css'
            ]
          }
        }
      }
    },
    clean: [
      'build/*'
    ]
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', [
    'copy:libsdev',
    'copy:app',
    'htmlbuild:dev'
  ]);
};