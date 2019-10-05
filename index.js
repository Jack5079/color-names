const { readFileSync, existsSync, writeFileSync, mkdirSync } = require( 'fs' )
const names = readFileSync( './colornames.txt' ).toString( 'utf-8' )
const formatted = names
  .split( '\n' ) // Make it an list of lines
  .filter( str => !str.startsWith( '#' ) ) // Remove comments
  .map( str => str.split( ',' ) ) // Split lines using commas

const obj = new Object

formatted.forEach( str => {
  obj[ str[ 0 ] ] = str[ 1 ]
} )


if ( !existsSync( 'assets/' ) ) mkdirSync( 'assets' )

writeFileSync( 'assets/colornames.json', JSON.stringify( obj, null, 2 ) )
