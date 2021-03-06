require( 'babel-polyfill' );
require( 'chrome-env' );

// require all `./tests/src/**/*spec.js`
const testsContext = require.context( './src/' , true , /spec\.js$/ );
testsContext.keys().forEach( testsContext );

// require all `./src/**/index.js`
const componentsContext = require.context( '../src/' , true , /index\.js$/ );
componentsContext.keys().forEach( componentsContext );
