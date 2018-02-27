const test = require('tape');
test( 'My first test', function( assert ) {
    // test goes here
    assert.end() ;
} ) ;
test( 'My second test', function( assert ) {
    assert.plan(  ) ; 
    // Specifies that we will be executing exactly two tests
    // tests go here
    assert.end();
} ) ;