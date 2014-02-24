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
          port: 1129,
          base: 'www',
          livereload: true
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['watch', 'connect']);
};
