module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: 'www/*.html',
      options: {
        livereload: true
      }
    },

    connect: {
      server: {
        options: {
          port: 10080,
          base: 'www'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['watch', 'connect']);
};
