/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ListBusinessApply,
  ListBusinessApplyInterface,
} from "../../../../database/business/apply/ListBusinessApply";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct BusinessApply",
        name: "item",
        type: "tuple",
      },
    ],
    name: "Add",
    type: "event",
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
        indexed: false,
        internalType: "struct BusinessApply",
        name: "item",
        type: "tuple",
      },
    ],
    name: "Remove",
    type: "event",
  },
  {
    inputs: [
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
        internalType: "struct BusinessApply",
        name: "item",
        type: "tuple",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "at",
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
        internalType: "struct BusinessApply",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
    name: "getAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "list",
    outputs: [
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
        name: "value",
        type: "address",
      },
    ],
    name: "retrive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
    ],
    name: "setStatus",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561003261002d3390565b610037565b6100d5565b61003f610066565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b336100796000546001600160a01b031690565b6001600160a01b0316146100d35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6108e0806100e46000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b14610131578063a5b7e4bd1461014c578063daea85c51461015f578063e0886f9014610172578063f2fde38b1461019257600080fd5b80632417450f146100a357806353ed5143146100b857806380c9419e146100d657806382e408131461011657806383197ef014610129575b600080fd5b6100b66100b13660046106d5565b6101a5565b005b6100c06101ce565b6040516100cd9190610705565b60405180910390f35b6100e96100e4366004610788565b610271565b604080519687526020870195909552938501929092526060840152608083015260a082015260c0016100cd565b6100b66101243660046107a1565b6102b7565b6100b66102ec565b6000546040516001600160a01b0390911681526020016100cd565b6100b661015a3660046107c3565b6102f7565b6100b661016d3660046106d5565b610449565b610185610180366004610788565b610478565b6040516100cd919061084b565b6100b66101a03660046106d5565b610528565b6101ad6105a6565b6001600160a01b03166000908152600160205260409020805460ff19169055565b60606101d8610611565b6002805480602002602001604051908101604052809291908181526020016000905b8282101561026857838290600052602060002090600602016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820154815260200160048201548152602001600582015481525050815260200190600101906101fa565b50505050905090565b6002818154811061028157600080fd5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501549395509193909286565b6102bf610611565b80600283815481106102d3576102d3610894565b9060005260206000209060060201600501819055505050565b6102f46105a6565b30ff5b6102ff610611565b6002805480835260018101825560009190915281517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace60069092029182015560208201517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf8201556040808301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad083015560608301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad183015560808301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad283015560a08301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad390920191909155517ff10c8232a4bdf5b5da9b097eb5792ae0aaa86af7b105a984dfe1b117b3ab3adf9061043e90839061084b565b60405180910390a150565b6104516105a6565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6104b16040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6104b9610611565b600282815481106104cc576104cc610894565b90600052602060002090600602016040518060c001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820154815250509050919050565b6105306105a6565b6001600160a01b03811661059a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6105a381610685565b50565b336105b96000546001600160a01b031690565b6001600160a01b03161461060f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610591565b565b3360009081526001602052604090205460ff168061063957506000546001600160a01b031633145b61060f5760405162461bcd60e51b815260206004820152601960248201527f5065726d697373696f6e3a206f6e6c7920617070726f766564000000000000006044820152606401610591565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156106e757600080fd5b81356001600160a01b03811681146106fe57600080fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b8181101561077c57610769838551805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b9284019260c09290920191600101610721565b50909695505050505050565b60006020828403121561079a57600080fd5b5035919050565b600080604083850312156107b457600080fd5b50508035926020909101359150565b600060c082840312156107d557600080fd5b60405160c0810181811067ffffffffffffffff8211171561080657634e487b7160e01b600052604160045260246000fd5b8060405250823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201528091505092915050565b60c0810161088e8284805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b92915050565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220d38b8b3e2e0ccfb0c62abe547cad6f3e57cbd255b2d476ff59dcb928fb9087c364736f6c63430008110033";

type ListBusinessApplyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ListBusinessApplyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ListBusinessApply__factory extends ContractFactory {
  constructor(...args: ListBusinessApplyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ListBusinessApply> {
    return super.deploy(overrides || {}) as Promise<ListBusinessApply>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ListBusinessApply {
    return super.attach(address) as ListBusinessApply;
  }
  override connect(signer: Signer): ListBusinessApply__factory {
    return super.connect(signer) as ListBusinessApply__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ListBusinessApplyInterface {
    return new utils.Interface(_abi) as ListBusinessApplyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ListBusinessApply {
    return new Contract(address, _abi, signerOrProvider) as ListBusinessApply;
  }
}
