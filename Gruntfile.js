module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 50
          },
          {
            width: 800,
            suffix: '_large_1x',
            quality: 50
          },
         {
            width: 400,
            suffix: '_small_1x',
            quality: 50
         }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'images/'
        }]
      }
    },

      /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images/'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images/']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'img/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },    
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
