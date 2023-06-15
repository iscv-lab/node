/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ListBigFive,
  ListBigFiveInterface,
} from "../../../../database/employee/bigfive/ListBigFive";

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
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct BigFive",
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
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct BigFive",
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
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
        ],
        internalType: "struct BigFive",
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
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
        ],
        internalType: "struct BigFive",
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
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
        ],
        internalType: "struct BigFive[]",
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
        name: "time",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "cid",
        type: "string",
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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561003261002d3390565b610037565b6100d5565b61003f610066565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b336100796000546001600160a01b031690565b6001600160a01b0316146100d35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b610bc5806100e46000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638da5cb5b116100665780638da5cb5b146100f6578063daea85c514610111578063e0886f9014610124578063f2fde38b14610144578063f44409761461015757600080fd5b80632417450f1461009857806353ed5143146100ad57806380c9419e146100cb57806383197ef0146100ee575b600080fd5b6100ab6100a6366004610773565b61016a565b005b6100b5610193565b6040516100c29190610824565b60405180910390f35b6100de6100d9366004610886565b6102a2565b6040516100c2949392919061089f565b6100ab61036a565b6000546040516001600160a01b0390911681526020016100c2565b6100ab61011f366004610773565b610375565b610137610132366004610886565b6103a4565b6040516100c291906108ce565b6100ab610152366004610773565b6104ba565b6100ab610165366004610951565b610538565b610172610644565b6001600160a01b03166000908152600160205260409020805460ff19169055565b60606002805480602002602001604051908101604052809291908181526020016000905b82821015610299578382906000526020600020906004020160405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201805461020890610a30565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a30565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b505050505081525050815260200190600101906101b7565b50505050905090565b600281815481106102b257600080fd5b90600052602060002090600402016000915090508060000154908060010154908060020154908060030180546102e790610a30565b80601f016020809104026020016040519081016040528092919081815260200182805461031390610a30565b80156103605780601f1061033557610100808354040283529160200191610360565b820191906000526020600020905b81548152906001019060200180831161034357829003601f168201915b5050505050905084565b610372610644565b30ff5b61037d610644565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6103cf6040518060800160405280600081526020016000815260200160008152602001606081525090565b6103d76106af565b600282815481106103ea576103ea610a6a565b906000526020600020906004020160405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201805461043190610a30565b80601f016020809104026020016040519081016040528092919081815260200182805461045d90610a30565b80156104aa5780601f1061047f576101008083540402835291602001916104aa565b820191906000526020600020905b81548152906001019060200180831161048d57829003601f168201915b5050505050815250509050919050565b6104c2610644565b6001600160a01b03811661052c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61053581610723565b50565b6105406106af565b60028054808352600181018255600091909152815160049091027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace810191825560208301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf82015560408301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad082015560608301518392917f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad101906106079082610acf565b5050507fa3be13d0d66ad2a9cc793fa2c8efcab3dc5776a3032ee2cb813702b574c3aaee8160405161063991906108ce565b60405180910390a150565b336106576000546001600160a01b031690565b6001600160a01b0316146106ad5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610523565b565b3360009081526001602052604090205460ff16806106d757506000546001600160a01b031633145b6106ad5760405162461bcd60e51b815260206004820152601960248201527f5065726d697373696f6e3a206f6e6c7920617070726f766564000000000000006044820152606401610523565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561078557600080fd5b81356001600160a01b038116811461079c57600080fd5b9392505050565b6000815180845260005b818110156107c9576020818501810151868301820152016107ad565b506000602082860101526020601f19601f83011685010191505092915050565b805182526020810151602083015260408101516040830152600060608201516080606085015261081c60808501826107a3565b949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561087957603f198886030184526108678583516107e9565b9450928501929085019060010161084b565b5092979650505050505050565b60006020828403121561089857600080fd5b5035919050565b8481528360208201528260408201526080606082015260006108c460808301846107a3565b9695505050505050565b60208152600061079c60208301846107e9565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561091a5761091a6108e1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610949576109496108e1565b604052919050565b6000602080838503121561096457600080fd5b823567ffffffffffffffff8082111561097c57600080fd5b908401906080828703121561099057600080fd5b6109986108f7565b823581528383013584820152604083013560408201526060830135828111156109c057600080fd5b80840193505086601f8401126109d557600080fd5b8235828111156109e7576109e76108e1565b6109f9601f8201601f19168601610920565b92508083528785828601011115610a0f57600080fd5b80858501868501376000908301909401939093526060830152509392505050565b600181811c90821680610a4457607f821691505b602082108103610a6457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b601f821115610aca57600081815260208120601f850160051c81016020861015610aa75750805b601f850160051c820191505b81811015610ac657828155600101610ab3565b5050505b505050565b815167ffffffffffffffff811115610ae957610ae96108e1565b610afd81610af78454610a30565b84610a80565b602080601f831160018114610b325760008415610b1a5750858301515b600019600386901b1c1916600185901b178555610ac6565b600085815260208120601f198616915b82811015610b6157888601518255948401946001909101908401610b42565b5085821015610b7f5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212209ce4763cbf324da818e58e81fe3eb5780fec9b69d80f6dad7b9626d6336df13f64736f6c63430008110033";

type ListBigFiveConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ListBigFiveConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ListBigFive__factory extends ContractFactory {
  constructor(...args: ListBigFiveConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ListBigFive> {
    return super.deploy(overrides || {}) as Promise<ListBigFive>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ListBigFive {
    return super.attach(address) as ListBigFive;
  }
  override connect(signer: Signer): ListBigFive__factory {
    return super.connect(signer) as ListBigFive__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ListBigFiveInterface {
    return new utils.Interface(_abi) as ListBigFiveInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ListBigFive {
    return new Contract(address, _abi, signerOrProvider) as ListBigFive;
  }
}
