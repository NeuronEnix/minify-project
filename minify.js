const fs = require('fs');
const path = require('path');

const isMinifyProjectDirectory = ( curPath="" ) => curPath === __dirname;
const isNodeProjectDirectory = ( fileNameList=[], dirNameList=[] ) => fileNameList.includes( "package.json" ) && dirNameList.includes( "node_modules" );
const delDirectory = ( curPath, dirName ) => fs.rmSync( path.join( curPath, "node_modules" ), { recursive: true, force: true });
function delNodeModules( curPath ) {
  const fileNameList = [];
  const dirNameList = [];
  fs.readdirSync( curPath, { withFileTypes: true } )
    .forEach( item => {
      if ( item.isDirectory() ) dirNameList.push( item.name )
      else if ( item.isFile() ) fileNameList.push( item.name )
  })

  if ( isNodeProjectDirectory( fileNameList, dirNameList ) ) {
    if ( isMinifyProjectDirectory( curPath) ) console.log ( "Minify Project Directory!");
    else {
      console.log( "Node Project: Deleting node_modules ->", curPath );
      delDirectory( curPath, "node_modules" );
    }
    dirNameList.splice( dirNameList.indexOf( "node_modules" ), 1 );
  }
    
// console.log( dirNameList )
  for ( const eachDirName of dirNameList ){
    const nextPath = path.join( curPath, eachDirName );
    delNodeModules( nextPath );

  }
  
  
}

delNodeModules( __dirname );