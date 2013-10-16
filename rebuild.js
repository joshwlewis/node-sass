var spawn = require('child_process').spawn;

// Don't rebuild at all!
if ( 0 == 1 ) {
  spawn('node-gyp', ['rebuild'], {stdio: 'inherit'});
}
