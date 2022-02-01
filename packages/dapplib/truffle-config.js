require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture story return noble history hover flower army gauge'; 
let testAccounts = [
"0x8def3603c582e2c614a2619ad78577e2c152e852329ccc5e2485c78743afd08e",
"0xbf6f4e4986c44335154b3f3d3ce21fdc8e79a02445ea44db3b9ea76f01bb8a68",
"0x3989aaeb98c3226a368d11cecc5940fc95b402ceb8d3c1e569946ebf7a00bb7e",
"0xe6f191c1fe47d2d85b8e12c128f44dba66676a20eef48f8d3fd3f2fc9f08404a",
"0x0d552a40bcbf76c51bcbb2b20d3fb4c515d71816f29ac8b1dca54b48866d4139",
"0x747ec0fede1e5d1fc8501eb44d7e07464a20f5ecca64a14804fe58c4092c1d99",
"0x929dd0ae24decb41f500c66e98d516d71ab3aca546e39cf08dd26f2fc37c7c61",
"0x1c0adde7bebb37764c1310e5a8a7777bd5b9c225f4b3e2254e16aa30c965a3ee",
"0x15951fd03ee2a0403134006891f8d31a09961c7e369d9a5b7d74c4eb229caadb",
"0xfe5757671331c91c997c1e9aa5d701ad4866512349e7598cae3906910bbee5ba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


