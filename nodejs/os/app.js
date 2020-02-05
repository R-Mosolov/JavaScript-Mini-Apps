const os = require('os');

// The Information about My Computers's System
console.log('os.EOL: ' + os.EOL);
console.log('os.endianness: ' + os.endianness());
console.log('os.tmpdir: ' + os.tmpdir());
console.log('os.homedir: ' + os.homedir());
console.log('----------- - -----------');

console.log('os.loadavg: ' + os.loadavg());
console.log('os.freemem: ' + os.freemem() / 1000000000 + ' Gb');
console.log('os.totalmem: ' + os.totalmem() / 1000000000 + ' Gb');
console.log('----------- - -----------');

console.log('os.cpus: ' + os.cpus().forEach(object => console.log(object)));
console.log('os.arch: ' + os.arch);
console.log('os.platform: ' + os.platform);
console.log('os.release: ' + os.release);
