const contractAddress = "0xCe501dBb8D26FfB47ff2758AA5d77040473F8118";
// Move it to environment variables or maintain a seperate DB for user and it's role
const adminAddress = "0x552EE15605362ade69b3a74296BB20d3f62A81D8";
const jwtSecret = "sssshhhh";

// Move to database
const userList = [
  "0x3a4d26d4fAE1ed2E3554baccD139c506F8B66638",
  "0xb6B0e6e90598F31e4E5eDf3D1274191CCf41fa64",
  "0x8099d5675afa53de45073B12abb4955e0D039543",
  "0x7EC45D9B06bD53Cc4627F03b202967b32c6C5617",
];

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "alreadyVoted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "bankName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "regNumber",
        type: "bytes32",
      },
    ],
    name: "addBank",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "customerDataHash",
        type: "bytes32",
      },
    ],
    name: "addCustomer",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "customerDataHash",
        type: "bytes32",
      },
    ],
    name: "addKycRequest",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bankList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "banks",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "bank",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rating",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "kycCount",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "regNumber",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "customerKycReq",
    outputs: [
      {
        internalType: "bytes32",
        name: "userName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "bank",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "customerReqList",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "customerVerificationList",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "customers",
    outputs: [
      {
        internalType: "bytes32",
        name: "userName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "rating",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "upVotes",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "bank",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "finalCustomers",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllBanks",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
    ],
    name: "getBankDetails",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
    ],
    name: "getBankRating",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
    ],
    name: "getBankRequests",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
    ],
    name: "getCustomerRating",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
    ],
    name: "getPendingCustomers",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
    ],
    name: "getRequestedCustomers",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVerifiedCustomers",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "kycRequests",
    outputs: [
      {
        internalType: "bytes32",
        name: "userName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "bank",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
    ],
    name: "lastUpdatedBy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "password",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "modifyCustomerData",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
    ],
    name: "removeBank",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
    ],
    name: "removeCustomer",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "customerDataHash",
        type: "bytes32",
      },
    ],
    name: "removeKycRequest",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "password",
        type: "bytes32",
      },
    ],
    name: "setPassword",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bankAddress",
        type: "address",
      },
    ],
    name: "upVoteBank",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
    ],
    name: "upVoteCustomer",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "password",
        type: "bytes32",
      },
    ],
    name: "viewCustomer",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
    ],
    name: "viewCustomerDetails",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "customerName",
        type: "bytes32",
      },
    ],
    name: "viewPedingCustomerDetails",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
module.exports = { contractAddress, abi, adminAddress, jwtSecret, userList };
