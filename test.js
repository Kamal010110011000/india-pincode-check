const PincodeFinder = require('./index');
const pincodeFinder = new PincodeFinder();
pincodeFinder.findPincode(248001).then(console.log);