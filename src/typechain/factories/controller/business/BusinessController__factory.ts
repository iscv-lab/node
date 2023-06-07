/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BusinessController,
  BusinessControllerInterface,
} from "../../../controller/business/BusinessController";

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
        name: "listBusinessApplyAddress",
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
        internalType: "string",
        name: "postId",
        type: "string",
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
        internalType: "string",
        name: "postId",
        type: "string",
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
            internalType: "string",
            name: "postId",
            type: "string",
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
    name: "getAllProfile",
    outputs: [
      {
        components: [
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
          {
            internalType: "enum EBusinessCategory",
            name: "category",
            type: "uint8",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getApply",
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
            internalType: "string",
            name: "postId",
            type: "string",
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
        internalType: "struct BusinessApply",
        name: "",
        type: "tuple",
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
    ],
    name: "getProfile",
    outputs: [
      {
        components: [
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
          {
            internalType: "enum EBusinessCategory",
            name: "category",
            type: "uint8",
          },
        ],
        internalType: "struct Profile",
        name: "",
        type: "tuple",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516114a93803806114a983398101604081905261002f91610087565b60008054336001600160a01b0319918216179091556001805482166001600160a01b0394851617905560028054909116919092161790556100ba565b80516001600160a01b038116811461008257600080fd5b919050565b6000806040838503121561009a57600080fd5b6100a38361006b565b91506100b16020840161006b565b90509250929050565b6113e0806100c96000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806383197ef01161007157806383197ef0146101575780638da5cb5b1461015f578063d610b45a1461017a578063f08f4f6414610182578063f2fde38b146101a2578063f3d27186146101b557600080fd5b8063073b8d8c146100b95780633901d42d146100e25780633dba3523146100f757806364f3fe9d1461010c578063724824921461012f5780637df65cc614610144575b600080fd5b6100cc6100c73660046109a0565b6101c8565b6040516100d99190610a5c565b60405180910390f35b6100ea610278565b6040516100d99190610ba7565b6100ff6102f6565b6040516100d99190610c09565b61011f61011a366004610c5e565b61036f565b60405190151581526020016100d9565b61014261013d366004610d6f565b610406565b005b61011f610152366004610e8a565b610558565b6101426105f3565b6000546040516001600160a01b0390911681526020016100d9565b61011f6105fe565b6101956101903660046109a0565b61068a565b6040516100d99190610ed1565b6101426101b0366004610ef9565b610703565b61011f6101c3366004610e8a565b61077c565b6102016040518060c001604052806000815260200160008152602001600081526020016060815260200160008152602001600081525090565b600254604051630e0886f960e41b8152600481018490526001600160a01b039091169063e0886f9090602401600060405180830381865afa15801561024a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102729190810190610ffa565b92915050565b606061028c6001546001600160a01b031690565b6001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa1580156102c9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102f191908101906111ca565b905090565b606061030a6002546001600160a01b031690565b6001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa158015610347573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102f1919081019061127b565b600254604051630e0886f960e41b81526004810184905260009182916001600160a01b039091169063e0886f9090602401600060405180830381865afa1580156103bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103e59190810190610ffa565b6020015190508083036103fc576001915050610272565b5060009392505050565b61040e6105fe565b156104745760405162461bcd60e51b815260206004820152602b60248201527f4c697374427573696e657373437572736f723a20616c7265616479206578697360448201526a1d1959081858d8dbdd5b9d60aa1b60648201526084015b60405180910390fd5b6000339050600060405180610140016040528060008152602001836001600160a01b031681526020018a8152602001898152602001888152602001878152602001868152602001858152602001848152602001600060018111156104da576104da610a76565b905290506104f06001546001600160a01b031690565b6001600160a01b031663c3200fdc826040518263ffffffff1660e01b815260040161051b9190610ed1565b600060405180830381600087803b15801561053557600080fd5b505af1158015610549573d6000803e3d6000fd5b50505050505050505050505050565b600254604051630e0886f960e41b81526004810184905260009182916001600160a01b039091169063e0886f9090602401600060405180830381865afa1580156105a6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105ce9190810190610ffa565b60600151905080805190602001208380519060200120036103fc576001915050610272565b6105fb610879565b30ff5b600154604051630689388760e41b815233600482015260009182916001600160a01b0390911690636893887090602401602060405180830381865afa15801561064b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066f919061131f565b9050600019810361068257600091505090565b600191505090565b610692610934565b600154604051630e0886f960e41b8152600481018490526001600160a01b039091169063e0886f9090602401600060405180830381865afa1580156106db573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102729190810190611338565b61070b610879565b6001600160a01b0381166107705760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161046b565b610779816108e4565b50565b600080600260009054906101000a90046001600160a01b03166001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa1580156107d2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107fa919081019061127b565b905060005b815181101561086e57600082828151811061081c5761081c61136d565b6020026020010151905085816020015114801561084a57508480519060200120816060015180519060200120145b1561085b5760019350505050610272565b508061086681611383565b9150506107ff565b506000949350505050565b3361088c6000546001600160a01b031690565b6001600160a01b0316146108e25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046b565b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518061014001604052806000815260200160006001600160a01b03168152602001606081526020016060815260200160608152602001606081526020016060815260200160608152602001606081526020016000600181111561099b5761099b610a76565b905290565b6000602082840312156109b257600080fd5b5035919050565b60005b838110156109d45781810151838201526020016109bc565b50506000910152565b600081518084526109f58160208601602086016109b9565b601f01601f19169290920160200192915050565b8051825260208101516020830152604081015160408301526000606082015160c06060850152610a3c60c08501826109dd565b90506080830151608085015260a083015160a08501528091505092915050565b602081526000610a6f6020830184610a09565b9392505050565b634e487b7160e01b600052602160045260246000fd5b60028110610aaa57634e487b7160e01b600052602160045260246000fd5b9052565b6000610140825184526020830151610ad160208601826001600160a01b03169052565b506040830151816040860152610ae9828601826109dd565b91505060608301518482036060860152610b0382826109dd565b91505060808301518482036080860152610b1d82826109dd565b91505060a083015184820360a0860152610b3782826109dd565b91505060c083015184820360c0860152610b5182826109dd565b91505060e083015184820360e0860152610b6b82826109dd565b9150506101008084015185830382870152610b8683826109dd565b9250505061012080840151610b9d82870182610a8c565b5090949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610bfc57603f19888603018452610bea858351610aae565b94509285019290850190600101610bce565b5092979650505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610bfc57603f19888603018452610c4c858351610a09565b94509285019290850190600101610c30565b60008060408385031215610c7157600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715610cba57610cba610c80565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610ce957610ce9610c80565b604052919050565b600067ffffffffffffffff821115610d0b57610d0b610c80565b50601f01601f191660200190565b600082601f830112610d2a57600080fd5b8135610d3d610d3882610cf1565b610cc0565b818152846020838601011115610d5257600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600080600060e0888a031215610d8a57600080fd5b873567ffffffffffffffff80821115610da257600080fd5b610dae8b838c01610d19565b985060208a0135915080821115610dc457600080fd5b610dd08b838c01610d19565b975060408a0135915080821115610de657600080fd5b610df28b838c01610d19565b965060608a0135915080821115610e0857600080fd5b610e148b838c01610d19565b955060808a0135915080821115610e2a57600080fd5b610e368b838c01610d19565b945060a08a0135915080821115610e4c57600080fd5b610e588b838c01610d19565b935060c08a0135915080821115610e6e57600080fd5b50610e7b8a828b01610d19565b91505092959891949750929550565b60008060408385031215610e9d57600080fd5b82359150602083013567ffffffffffffffff811115610ebb57600080fd5b610ec785828601610d19565b9150509250929050565b602081526000610a6f6020830184610aae565b6001600160a01b038116811461077957600080fd5b600060208284031215610f0b57600080fd5b8135610a6f81610ee4565b600082601f830112610f2757600080fd5b8151610f35610d3882610cf1565b818152846020838601011115610f4a57600080fd5b610f5b8260208301602087016109b9565b949350505050565b600060c08284031215610f7557600080fd5b60405160c0810167ffffffffffffffff8282108183111715610f9957610f99610c80565b816040528293508451835260208501516020840152604085015160408401526060850151915080821115610fcc57600080fd5b50610fd985828601610f16565b6060830152506080830151608082015260a083015160a08201525092915050565b60006020828403121561100c57600080fd5b815167ffffffffffffffff81111561102357600080fd5b610f5b84828501610f63565b600067ffffffffffffffff82111561104957611049610c80565b5060051b60200190565b805161105e81610ee4565b919050565b80516002811061105e57600080fd5b6000610140828403121561108557600080fd5b61108d610c96565b90508151815261109f60208301611053565b6020820152604082015167ffffffffffffffff808211156110bf57600080fd5b6110cb85838601610f16565b604084015260608401519150808211156110e457600080fd5b6110f085838601610f16565b6060840152608084015191508082111561110957600080fd5b61111585838601610f16565b608084015260a084015191508082111561112e57600080fd5b61113a85838601610f16565b60a084015260c084015191508082111561115357600080fd5b61115f85838601610f16565b60c084015260e084015191508082111561117857600080fd5b61118485838601610f16565b60e08401526101009150818401518181111561119f57600080fd5b6111ab86828701610f16565b838501525050506101206111c0818401611063565b9082015292915050565b600060208083850312156111dd57600080fd5b825167ffffffffffffffff808211156111f557600080fd5b818501915085601f83011261120957600080fd5b8151611217610d388261102f565b81815260059190911b8301840190848101908883111561123657600080fd5b8585015b8381101561126e578051858111156112525760008081fd5b6112608b89838a0101611072565b84525091860191860161123a565b5098975050505050505050565b6000602080838503121561128e57600080fd5b825167ffffffffffffffff808211156112a657600080fd5b818501915085601f8301126112ba57600080fd5b81516112c8610d388261102f565b81815260059190911b830184019084810190888311156112e757600080fd5b8585015b8381101561126e578051858111156113035760008081fd5b6113118b89838a0101610f63565b8452509186019186016112eb565b60006020828403121561133157600080fd5b5051919050565b60006020828403121561134a57600080fd5b815167ffffffffffffffff81111561136157600080fd5b610f5b84828501611072565b634e487b7160e01b600052603260045260246000fd5b6000600182016113a357634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220047dc50948a198324ffbe119cad940917f8a031e2043242e2f76c7401136634d64736f6c63430008110033";

type BusinessControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BusinessControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BusinessController__factory extends ContractFactory {
  constructor(...args: BusinessControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    listBusinessAddress: PromiseOrValue<string>,
    listBusinessApplyAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BusinessController> {
    return super.deploy(
      listBusinessAddress,
      listBusinessApplyAddress,
      overrides || {}
    ) as Promise<BusinessController>;
  }
  override getDeployTransaction(
    listBusinessAddress: PromiseOrValue<string>,
    listBusinessApplyAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      listBusinessAddress,
      listBusinessApplyAddress,
      overrides || {}
    );
  }
  override attach(address: string): BusinessController {
    return super.attach(address) as BusinessController;
  }
  override connect(signer: Signer): BusinessController__factory {
    return super.connect(signer) as BusinessController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BusinessControllerInterface {
    return new utils.Interface(_abi) as BusinessControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BusinessController {
    return new Contract(address, _abi, signerOrProvider) as BusinessController;
  }
}
