import { ContractFactory, utils, Contract } from 'ethers';

/* Autogenerated file. Do not edit manually. */
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "listBusinessAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "listBusinessPostAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "listBusinessApplyAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "listBusinessAppointmenAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "hashTag",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "job",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "content",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "imageSource",
                type: "string",
            },
            {
                indexed: false,
                internalType: "enum BusinessPostStatus",
                name: "status",
                type: "uint8",
            },
        ],
        name: "eventAddPost",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "employeeId",
                type: "uint256",
            },
        ],
        name: "_checkApplyIdBelongsToEmployeeId",
        outputs: [
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
                internalType: "uint256",
                name: "employeeId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "postId",
                type: "uint256",
            },
        ],
        name: "_checkExistApply",
        outputs: [
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
        inputs: [],
        name: "_checkExistBusinessAccount",
        outputs: [
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "postId",
                type: "uint256",
            },
        ],
        name: "_checkIdBelongsToPostId",
        outputs: [
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "businessId",
                type: "uint256",
            },
        ],
        name: "_checkPostIdBelongstoBusinessId",
        outputs: [
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
                internalType: "uint256",
                name: "businessPostId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "employeeId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "businessId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "businessApplyId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "addAppointment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "category",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "phone",
                type: "string",
            },
            {
                internalType: "string",
                name: "professional",
                type: "string",
            },
            {
                internalType: "string",
                name: "email",
                type: "string",
            },
            {
                internalType: "string",
                name: "github",
                type: "string",
            },
            {
                internalType: "string",
                name: "linkedin",
                type: "string",
            },
            {
                internalType: "string",
                name: "sourceImage",
                type: "string",
            },
        ],
        name: "addBusiness",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "businessId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "hashTag",
                type: "string",
            },
            {
                internalType: "string",
                name: "job",
                type: "string",
            },
            {
                internalType: "string",
                name: "content",
                type: "string",
            },
            {
                internalType: "string",
                name: "imageSource",
                type: "string",
            },
            {
                internalType: "enum BusinessPostStatus",
                name: "status",
                type: "uint8",
            },
        ],
        name: "addPost",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "destroy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllApplies",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "employeeId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "businessId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "postId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "time",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "status",
                        type: "uint256",
                    },
                ],
                internalType: "struct BusinessApply[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllAppointments",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "businessApplyId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "employeeId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "businessId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "time",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "status",
                        type: "uint256",
                    },
                ],
                internalType: "struct BusinessAppointment[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllPosts",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "businessId",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "hashTag",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "time",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "content",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "imageSource",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "job",
                        type: "string",
                    },
                    {
                        internalType: "enum BusinessPostStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                internalType: "struct BusinessPost[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllProfile",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "category",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "user",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "phone",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "professional",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "email",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "github",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "linkedin",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "sourceImage",
                        type: "string",
                    },
                ],
                internalType: "struct Profile[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
                internalType: "uint256",
                name: "postId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "businessId",
                type: "uint256",
            },
            {
                internalType: "enum BusinessPostStatus",
                name: "status",
                type: "uint8",
            },
        ],
        name: "setStatusPost",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001edd38038062001edd8339810160408190526200003491620000af565b60008054336001600160a01b0319918216179091556001805482166001600160a01b0396871617905560028054821694861694909417909355600380548416928516929092179091556004805490921692169190911790556200010c565b80516001600160a01b0381168114620000aa57600080fd5b919050565b60008060008060808587031215620000c657600080fd5b620000d18562000092565b9350620000e16020860162000092565b9250620000f16040860162000092565b9150620001016060860162000092565b905092959194509250565b611dc1806200011c6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80637933570c11610097578063d610b45a11610066578063d610b45a14610209578063dfe47cdb14610211578063f2fde38b14610224578063f54e09dc1461023757600080fd5b80637933570c146101be57806383197ef0146101d35780638da5cb5b146101db578063bad50029146101f657600080fd5b80634363b6c6116100d35780634363b6c61461016257806349e488a0146101855780635f7e3e191461019857806364f3fe9d146101ab57600080fd5b80632623334514610105578063305611001461011a5780633901d42d146101385780633dba35231461014d575b600080fd5b610118610113366004610f35565b61024a565b005b6101226104ab565b60405161012f9190611097565b60405180910390f35b610140610529565b60405161012f91906111e7565b6101556105a2565b60405161012f9190611276565b6101756101703660046112c4565b61061b565b604051901515815260200161012f565b6101756101933660046112c4565b6106b4565b6101186101a6366004611303565b6107a3565b6101756101b93660046112c4565b6108cc565b6101c6610955565b60405161012f919061133c565b610118610969565b6000546040516001600160a01b03909116815260200161012f565b6101756102043660046112c4565b610974565b6101756109fd565b61011861021f36600461148d565b610a89565b610118610232366004611567565b610b9c565b610118610245366004611584565b610c15565b826102536109fd565b6102785760405162461bcd60e51b815260040161026f906116a8565b60405180910390fd5b61028181610d3a565b61029d5760405162461bcd60e51b815260040161026f906116ed565b85846102a9828261061b565b61031b5760405162461bcd60e51b815260206004820152603d60248201527f4c69737420427573696e65737320506f737420437572736f723a20706f73742060448201527f6964206e6f742062656c6f6e677320746f20627573696e657373206964000000606482015260840161026f565b84886103278282610974565b6103995760405162461bcd60e51b815260206004820152603860248201527f4c697374427573696e6573734170706c79437572736f723a206170706c79206960448201527f64206e6f742062656c6f6e677320746f20706f73742069640000000000000000606482015260840161026f565b6040805160c08101825260008152602081018990528082018b9052606081018a905260808101889052600160a082015260048054925163a5b7e4bd60e01b815291926001600160a01b03169163a5b7e4bd916103f79185910161173c565b600060405180830381600087803b15801561041157600080fd5b505af1158015610425573d6000803e3d6000fd5b5050505061043b6003546001600160a01b031690565b6040516382e4081360e01b8152600481018a9052600160248201526001600160a01b0391909116906382e4081390604401600060405180830381600087803b15801561048657600080fd5b505af115801561049a573d6000803e3d6000fd5b505050505050505050505050505050565b60606104bf6002546001600160a01b031690565b6001600160a01b031663305611006040518163ffffffff1660e01b8152600401600060405180830381865afa1580156104fc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261052491908101906118ad565b905090565b606061053d6001546001600160a01b031690565b6001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa15801561057a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105249190810190611ab9565b60606105b66003546001600160a01b031690565b6001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa1580156105f3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105249190810190611c2f565b600254604051630e0886f960e41b81526004810184905260009182916001600160a01b039091169063e0886f9090602401600060405180830381865afa158015610669573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106919190810190611c77565b6020015190508281036106a85760019150506106ae565b60009150505b92915050565b600080600360009054906101000a90046001600160a01b03166001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa15801561070a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107329190810190611c2f565b905060005b815181101561079857600082828151811061075457610754611cab565b602002602001015190508581602001511480156107745750848160600151145b1561078557600193505050506106ae565b508061079081611cc1565b915050610737565b506000949350505050565b82826107af8282610dc7565b6108165760405162461bcd60e51b815260206004820152603260248201527f4c69737441706f696e746d656e74437572736f723a206f6e6c792072657175656044820152711cdd081a590818995b1bdb99dcdd1bc81a5960721b606482015260840161026f565b8361081f6109fd565b61083b5760405162461bcd60e51b815260040161026f906116a8565b61084481610d3a565b6108605760405162461bcd60e51b815260040161026f906116ed565b6002546040516352ab203760e01b81526001600160a01b03909116906352ab2037906108929089908890600401611ce8565b600060405180830381600087803b1580156108ac57600080fd5b505af11580156108c0573d6000803e3d6000fd5b50505050505050505050565b600354604051630e0886f960e41b81526004810184905260009182916001600160a01b039091169063e0886f909060240160c060405180830381865afa15801561091a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093e9190611cfc565b6020015190508083036106a85760019150506106ae565b60606105b66004546001600160a01b031690565b610971610e4e565b30ff5b600354604051630e0886f960e41b81526004810184905260009182916001600160a01b039091169063e0886f909060240160c060405180830381865afa1580156109c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e69190611cfc565b6060015190508083036106a85760019150506106ae565b600154604051630689388760e41b815233600482015260009182916001600160a01b0390911690636893887090602401602060405180830381865afa158015610a4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6e9190611d18565b90506000198103610a8157600091505090565b600191505090565b85610a926109fd565b610aae5760405162461bcd60e51b815260040161026f906116a8565b610ab781610d3a565b610ad35760405162461bcd60e51b815260040161026f906116ed565b60006040518061010001604052806000198152602001898152602001888152602001428152602001868152602001858152602001878152602001846003811115610b1f57610b1f610fc0565b90529050610b356002546001600160a01b031690565b6001600160a01b0316631affe4f7826040518263ffffffff1660e01b8152600401610b609190611d31565b600060405180830381600087803b158015610b7a57600080fd5b505af1158015610b8e573d6000803e3d6000fd5b505050505050505050505050565b610ba4610e4e565b6001600160a01b038116610c095760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161026f565b610c1281610eb9565b50565b610c1d6109fd565b15610c7e5760405162461bcd60e51b815260206004820152602b60248201527f4c697374427573696e657373437572736f723a20616c7265616479206578697360448201526a1d1959081858d8dbdd5b9d60aa1b606482015260840161026f565b60408051610140810182528981526000602082015233818301819052606082018a90526080820189905260a0820188905260c0820187905260e0820186905261010082018590526101208201849052600154925163057f4d7960e01b815290926001600160a01b03169063057f4d7990610cfc908490600401611d44565b600060405180830381600087803b158015610d1657600080fd5b505af1158015610d2a573d6000803e3d6000fd5b5050505050505050505050505050565b600154604051630e0886f960e41b81526004810183905260009182916001600160a01b039091169063e0886f9090602401600060405180830381865afa158015610d88573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610db09190810190611d57565b9050610dc0816040015133610f09565b9392505050565b60048054604051630e0886f960e41b815291820184905260009182916001600160a01b03169063e0886f909060240160c060405180830381865afa158015610e13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e379190611cfc565b6060015190508281036106a85760019150506106ae565b33610e616000546001600160a01b031690565b6001600160a01b031614610eb75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161026f565b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000816001600160a01b0316836001600160a01b031603610f2c575060016106ae565b50600092915050565b600080600080600060a08688031215610f4d57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60005b83811015610f8b578181015183820152602001610f73565b50506000910152565b60008151808452610fac816020860160208601610f70565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b60048110610ff457634e487b7160e01b600052602160045260246000fd5b9052565b60006101008251845260208301516020850152604083015181604086015261102282860182610f94565b91505060608301516060850152608083015184820360808601526110468282610f94565b91505060a083015184820360a08601526110608282610f94565b91505060c083015184820360c086015261107a8282610f94565b91505060e083015161108f60e0860182610fd6565b509392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156110ec57603f198886030184526110da858351610ff8565b945092850192908501906001016110be565b5092979650505050505050565b60006101408251845260208301516020850152604083015161112660408601826001600160a01b03169052565b50606083015181606086015261113e82860182610f94565b915050608083015184820360808601526111588282610f94565b91505060a083015184820360a08601526111728282610f94565b91505060c083015184820360c086015261118c8282610f94565b91505060e083015184820360e08601526111a68282610f94565b91505061010080840151858303828701526111c18382610f94565b9250505061012080840151858303828701526111dd8382610f94565b9695505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156110ec57603f1988860301845261122a8583516110f9565b9450928501929085019060010161120e565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b6020808252825182820181905260009190848201906040850190845b818110156112b8576112a583855161123c565b9284019260c09290920191600101611292565b50909695505050505050565b600080604083850312156112d757600080fd5b50508035926020909101359150565b60048110610c1257600080fd5b80356112fe816112e6565b919050565b60008060006060848603121561131857600080fd5b83359250602084013591506040840135611331816112e6565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b818110156112b85761136b83855161123c565b9284019260c09290920191600101611358565b634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b03811182821017156113b7576113b761137e565b60405290565b60405161014081016001600160401b03811182821017156113b7576113b761137e565b604051601f8201601f191681016001600160401b03811182821017156114085761140861137e565b604052919050565b60006001600160401b038211156114295761142961137e565b50601f01601f191660200190565b600082601f83011261144857600080fd5b813561145b61145682611410565b6113e0565b81815284602083860101111561147057600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008060c087890312156114a657600080fd5b8635955060208701356001600160401b03808211156114c457600080fd5b6114d08a838b01611437565b965060408901359150808211156114e657600080fd5b6114f28a838b01611437565b9550606089013591508082111561150857600080fd5b6115148a838b01611437565b9450608089013591508082111561152a57600080fd5b5061153789828a01611437565b92505061154660a088016112f3565b90509295509295509295565b6001600160a01b0381168114610c1257600080fd5b60006020828403121561157957600080fd5b8135610dc081611552565b600080600080600080600080610100898b0312156115a157600080fd5b8835975060208901356001600160401b03808211156115bf57600080fd5b6115cb8c838d01611437565b985060408b01359150808211156115e157600080fd5b6115ed8c838d01611437565b975060608b013591508082111561160357600080fd5b61160f8c838d01611437565b965060808b013591508082111561162557600080fd5b6116318c838d01611437565b955060a08b013591508082111561164757600080fd5b6116538c838d01611437565b945060c08b013591508082111561166957600080fd5b6116758c838d01611437565b935060e08b013591508082111561168b57600080fd5b506116988b828c01611437565b9150509295985092959890939650565b60208082526025908201527f4c697374427573696e657373437572736f723a206e6f7420657869737420616360408201526418dbdd5b9d60da1b606082015260800190565b6020808252602f908201527f4c697374427573696e657373437572736f723a206964206973206e6f7420626560408201526e6c6f6e6720746f206164647265737360881b606082015260800190565b60c081016106ae828461123c565b60006001600160401b038211156117635761176361137e565b5060051b60200190565b600082601f83011261177e57600080fd5b815161178c61145682611410565b8181528460208386010111156117a157600080fd5b6117b2826020830160208701610f70565b949350505050565b80516112fe816112e6565b600061010082840312156117d857600080fd5b6117e0611394565b9050815181526020820151602082015260408201516001600160401b038082111561180a57600080fd5b6118168583860161176d565b604084015260608401516060840152608084015191508082111561183957600080fd5b6118458583860161176d565b608084015260a084015191508082111561185e57600080fd5b61186a8583860161176d565b60a084015260c084015191508082111561188357600080fd5b506118908482850161176d565b60c0830152506118a260e083016117ba565b60e082015292915050565b600060208083850312156118c057600080fd5b82516001600160401b03808211156118d757600080fd5b818501915085601f8301126118eb57600080fd5b81516118f96114568261174a565b81815260059190911b8301840190848101908883111561191857600080fd5b8585015b83811015611950578051858111156119345760008081fd5b6119428b89838a01016117c5565b84525091860191860161191c565b5098975050505050505050565b80516112fe81611552565b6000610140828403121561197b57600080fd5b6119836113bd565b9050815181526020820151602082015261199f6040830161195d565b604082015260608201516001600160401b03808211156119be57600080fd5b6119ca8583860161176d565b606084015260808401519150808211156119e357600080fd5b6119ef8583860161176d565b608084015260a0840151915080821115611a0857600080fd5b611a148583860161176d565b60a084015260c0840151915080821115611a2d57600080fd5b611a398583860161176d565b60c084015260e0840151915080821115611a5257600080fd5b611a5e8583860161176d565b60e084015261010091508184015181811115611a7957600080fd5b611a858682870161176d565b838501525061012091508184015181811115611aa057600080fd5b611aac8682870161176d565b8385015250505092915050565b60006020808385031215611acc57600080fd5b82516001600160401b0380821115611ae357600080fd5b818501915085601f830112611af757600080fd5b8151611b056114568261174a565b81815260059190911b83018401908481019088831115611b2457600080fd5b8585015b8381101561195057805185811115611b405760008081fd5b611b4e8b89838a0101611968565b845250918601918601611b28565b600060c08284031215611b6e57600080fd5b60405160c081018181106001600160401b0382111715611b9057611b9061137e565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201525092915050565b6000611be36114568461174a565b838152905060208082019060c0808602850187811115611c0257600080fd5b855b81811015611c2357611c168982611b5c565b8552938301938201611c04565b50505050509392505050565b600060208284031215611c4157600080fd5b81516001600160401b03811115611c5757600080fd5b8201601f81018413611c6857600080fd5b6117b284825160208401611bd5565b600060208284031215611c8957600080fd5b81516001600160401b03811115611c9f57600080fd5b6117b2848285016117c5565b634e487b7160e01b600052603260045260246000fd5b600060018201611ce157634e487b7160e01b600052601160045260246000fd5b5060010190565b82815260408101610dc06020830184610fd6565b600060c08284031215611d0e57600080fd5b610dc08383611b5c565b600060208284031215611d2a57600080fd5b5051919050565b602081526000610dc06020830184610ff8565b602081526000610dc060208301846110f9565b600060208284031215611d6957600080fd5b81516001600160401b03811115611d7f57600080fd5b6117b28482850161196856fea264697066735822122095d0eefbeb09c18a47e66726f5446c695b1547adcb8d52e42acf693f840c713b64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class BusinessController__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(listBusinessAddress, listBusinessPostAddress, listBusinessApplyAddress, listBusinessAppointmenAddress, overrides) {
        return super.deploy(listBusinessAddress, listBusinessPostAddress, listBusinessApplyAddress, listBusinessAppointmenAddress, overrides || {});
    }
    getDeployTransaction(listBusinessAddress, listBusinessPostAddress, listBusinessApplyAddress, listBusinessAppointmenAddress, overrides) {
        return super.getDeployTransaction(listBusinessAddress, listBusinessPostAddress, listBusinessApplyAddress, listBusinessAppointmenAddress, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}

export { BusinessController__factory };