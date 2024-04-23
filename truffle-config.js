module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "2020",
    },
  },

  compilers: {
    solc: {
      version: "0.6.9",
      // docker: true,
      // settings: {
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
