const concurrently = require('concurrently');
const upath = require('upath');

concurrently([
    { command: 'node scripts/sb-watch.js', name: 'SB_WATCH', prefixColor: 'bgBlue.bold' },
    { command: 'npx http-server dist -c-1', name: 'SB_WATCH_SERVER', prefixColor: 'bgGreen.bold' },
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
}).then(success, failure);

function success() {
    console.log('Success');
}

function failure() {
    console.log('Failure');
}
