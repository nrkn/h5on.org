var mustache = require( 'mustache' );
var fs = require( 'fs' );
var path = require( 'path' );

var pages = {
  index: {
    title: 'Index',
    navIndex: 0
  },
  demos: {
    title: 'Demos',
    navIndex: 2
  },
  demo: {
    title: 'Demo',
    navIndex: 2
  },
  editor: {
    title: 'Editor',
    navIndex: 2
  }
};

var nav = [
  {
    href: '/',
    html: '<i class="fa fa-home" title="Home"></i>'
  },
  {
    href: 'https://github.com/nrkn/h5on/blob/master/readme.md',
    html: 'Docs'
  },
  {
    href: 'demos.html',
    html: 'Demos'
  },
  {
    href: 'https://github.com/nrkn/h5on',
    html: 'GitHub'
  }
];

var pageKeys = Object.keys( pages );

fs.readFile( '../views/master.mustache.html', 'utf-8', function( err, masterTemplate ){
  if( err ) throw err;
  
  pageKeys.forEach( function( key ){
    var page = pages[ key ];
    
    page.nav = JSON.parse( JSON.stringify( nav ) );    
    page.nav[ page.navIndex ].isCurrent = true;
    
    var headPath = path.join( '../views/', key + '.head.mustache.html' );
    var mainPath = path.join( '../views/', key + '.mustache.html' );
    var scriptsPath = path.join( '../views/', key + '.scripts.mustache.html' );
    
    if( fs.existsSync( headPath ) ){
      page.head = fs.readFileSync( headPath, 'utf-8' );
    }
    if( fs.existsSync( mainPath ) ){
      page.main = fs.readFileSync( mainPath, 'utf-8' );
    }
    if( fs.existsSync( scriptsPath ) ){
      page.scripts = fs.readFileSync( scriptsPath, 'utf-8' );
    }
    
    var html = mustache.render( masterTemplate, page );
    fs.writeFileSync( '../' + key + '.html', html, 'utf-8' );
  });  
});

fs.readFile( '../data/sample-data.json', 'utf-8', function( err, sampleDataJson ){
  if( err ) throw err;
  fs.writeFileSync( '../js/sample-data.js', 'var sampleData = ' + sampleDataJson + ';', 'utf-8' );
});

