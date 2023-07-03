var Wallet = require('ethereumjs-wallet');
var key = Buffer.from('cbba0e64f5391df5ee50ae58a2173d1e75c850f88eedce0f24fbff4d216bc795', 'hex');
var wallet = Wallet.default.fromPrivateKey(key);
wallet.toV3String('12345678').then((value) => {
    console.log(value);
});