require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stool radar script color install canoe army general'; 
let testAccounts = [
"0xa404cbd5779b6dac35cf0a353a2de0498b634ea8d2919b2d53aa8de0f038691f",
"0xa8a4e84eb49a4ebc53d34cabd632ca405c033f8ea00bc8b3b2ca0e8931acef5e",
"0x0c45a3ec0c78c0a2b2fe7492ee64939219716f828adf0e186ee184e65ed739ab",
"0x398232631e3d61ddfd7615784eb4b6a7ca8fd7dd02c14b234d693b6522f1ca8c",
"0x7d80e99186f28dbdea5d2db7136818f59d0c4b35c06b1d9ee349e6d4968ec30f",
"0x076b9b7d489f2874abb3a9a1aefb5df163cec78f9605de69dae2d0ef55015d48",
"0xd9972609fcc6b0ae21e896ed8e49dc0a83783e27fc7d4c1fe6a9ff8d62f9bffc",
"0x0eab7b90741dd7e80aae046d88c3231d328a33c9a4ff0f1a6ab9cef56b4c52e8",
"0x814b87cbd8fddca2b75fe61a504654342192d204829e8dbaa5b3422cdaf2f136",
"0xf158970c999d46c7e254c12f031dc6daa5b900f6df7362584e7e4054d8f3acc9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

