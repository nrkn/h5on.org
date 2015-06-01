module.exports = function( grunt ){
  grunt.initConfig({
    curl: {
      'js/h5on.jquery.min.js': 'https://raw.githubusercontent.com/nrkn/h5on/master/h5on.jquery.min.js',
      'js/pretty.js': 'https://raw.githubusercontent.com/nrkn/h5on/master/demo/pretty.js',
      'css/h5on.css': 'https://raw.githubusercontent.com/nrkn/h5on/master/css/h5on.css',
      'css/h5on-solarized-light.css': 'https://raw.githubusercontent.com/nrkn/h5on/master/css/h5on-solarized-light.css',
      'img/h5on.svg': 'https://raw.githubusercontent.com/nrkn/h5on/master/img/h5on.svg',
      'img/h5on.png': 'https://raw.githubusercontent.com/nrkn/h5on/master/img/h5on.png',
      'data/sample-data.json': 'https://raw.githubusercontent.com/nrkn/h5on/master/data/sample-data.json'
    }
  });
  grunt.loadNpmTasks( 'grunt-curl' );
  grunt.registerTask( 'default', [ 'curl' ] );
}