'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'compressed',
          sourcemap: 'auto'
          // Uncomment the below line to include outside directories as well.
          // loadPath: ['location/of/other/sass']
        },
        files: [{
          // Files in the /sass/ directory will go to /static/css/ when processed.
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      }
    },

  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['static/javascript/site.js'],
      dest: 'static/javascript/dist/scripts.min.js',
    },
  },

    // WHEN FILES CHANGE, RUN THE ABOVE TASKS ALONG WITH BUILD
    watch: {
      sass : {
        files: ['sass/**/*.scss', 'javascript/**/*.js'],
        tasks: ['sass', 'concat', 'build'],
         nonull: true,
      }
    }

  });

  // THIS LOADS THE TASKS WE NEED ABOVE IN FROM OUR NPM
  // Note, that we need to have these installed through the package.json file as well
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};
