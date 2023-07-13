/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../common';
import type {
  ListBusinessApply,
  ListBusinessApplyInterface,
} from '../../../../database/business/apply/ListBusinessApply';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'employeeId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'businessId',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'postId',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'time',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'status',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct BusinessApply',
        name: 'item',
        type: 'tuple',
      },
    ],
    name: 'Add',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'employeeId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'businessId',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'postId',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'time',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'status',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct BusinessApply',
        name: 'item',
        type: 'tuple',
      },
    ],
    name: 'Remove',
    type: 'event',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'employeeId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'businessId',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'postId',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'time',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'status',
            type: 'uint256',
          },
        ],
        internalType: 'struct BusinessApply',
        name: 'item',
        type: 'tuple',
      },
    ],
    name: 'add',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'value',
        type: 'address',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'at',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'employeeId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'businessId',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'postId',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'time',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'status',
            type: 'uint256',
          },
        ],
        internalType: 'struct BusinessApply',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'destroy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAll',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'employeeId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'businessId',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'postId',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'time',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'status',
            type: 'uint256',
          },
        ],
        internalType: 'struct BusinessApply[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'list',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'employeeId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'businessId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'postId',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'time',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'status',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'value',
        type: 'address',
      },
    ],
    name: 'retrive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'status',
        type: 'uint256',
      },
    ],
    name: 'setStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561003261002d3390565b610037565b6100d5565b61003f610066565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b336100796000546001600160a01b031690565b6001600160a01b0316146100d35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b610cd1806100e46000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806383197ef01161006657806383197ef0146101215780638da5cb5b14610129578063daea85c514610144578063e0886f9014610157578063f2fde38b1461017757600080fd5b80632417450f146100a35780632e6de701146100b857806353ed5143146100cb57806380c9419e146100e957806382e408131461010e575b600080fd5b6100b66100b1366004610826565b61018a565b005b6100b66100c63660046108c6565b6101b3565b6100d36102d3565b6040516100e09190610a52565b60405180910390f35b6100fc6100f7366004610ab4565b6103fe565b6040516100e096959493929190610acd565b6100b661011c366004610b07565b6104d2565b6100b6610507565b6000546040516001600160a01b0390911681526020016100e0565b6100b6610152366004610826565b610512565b61016a610165366004610ab4565b610541565b6040516100e09190610b29565b6100b6610185366004610826565b610679565b6101926106f7565b6001600160a01b03166000908152600160205260409020805460ff19169055565b6101bb610762565b60028054808352600181018255600091909152815160069091027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace810191825560208301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf82015560408301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad082015560608301518392917f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad101906102829082610bc5565b506080820151816004015560a0820151816005015550507ff3cd26fb9c458f5191f7d09b70c941603294e1ffae1b5830705d81099766e7a1816040516102c89190610b29565b60405180910390a150565b60606102dd610762565b6002805480602002602001604051908101604052809291908181526020016000905b828210156103f557838290600052602060002090600602016040518060c001604052908160008201548152602001600182015481526020016002820154815260200160038201805461035090610b3c565b80601f016020809104026020016040519081016040528092919081815260200182805461037c90610b3c565b80156103c95780601f1061039e576101008083540402835291602001916103c9565b820191906000526020600020905b8154815290600101906020018083116103ac57829003601f168201915b5050505050815260200160048201548152602001600582015481525050815260200190600101906102ff565b50505050905090565b6002818154811061040e57600080fd5b906000526020600020906006020160009150905080600001549080600101549080600201549080600301805461044390610b3c565b80601f016020809104026020016040519081016040528092919081815260200182805461046f90610b3c565b80156104bc5780601f10610491576101008083540402835291602001916104bc565b820191906000526020600020905b81548152906001019060200180831161049f57829003601f168201915b5050505050908060040154908060050154905086565b6104da610762565b80600283815481106104ee576104ee610c85565b9060005260206000209060060201600501819055505050565b61050f6106f7565b30ff5b61051a6106f7565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b61057a6040518060c001604052806000815260200160008152602001600081526020016060815260200160008152602001600081525090565b610582610762565b6002828154811061059557610595610c85565b90600052602060002090600602016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820180546105dc90610b3c565b80601f016020809104026020016040519081016040528092919081815260200182805461060890610b3c565b80156106555780601f1061062a57610100808354040283529160200191610655565b820191906000526020600020905b81548152906001019060200180831161063857829003601f168201915b50505050508152602001600482015481526020016005820154815250509050919050565b6106816106f7565b6001600160a01b0381166106eb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6106f4816107d6565b50565b3361070a6000546001600160a01b031690565b6001600160a01b0316146107605760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106e2565b565b3360009081526001602052604090205460ff168061078a57506000546001600160a01b031633145b6107605760405162461bcd60e51b815260206004820152601960248201527f5065726d697373696f6e3a206f6e6c7920617070726f7665640000000000000060448201526064016106e2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561083857600080fd5b81356001600160a01b038116811461084f57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561088f5761088f610856565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156108be576108be610856565b604052919050565b600060208083850312156108d957600080fd5b823567ffffffffffffffff808211156108f157600080fd5b9084019060c0828703121561090557600080fd5b61090d61086c565b8235815283830135848201526040830135604082015260608301358281111561093557600080fd5b8301601f8101881361094657600080fd5b80358381111561095857610958610856565b61096a601f8201601f19168701610895565b9350808452888682840101111561098057600080fd5b8086830187860137600086828601015250508160608201526080830135608082015260a083013560a08201528094505050505092915050565b6000815180845260005b818110156109df576020818501810151868301820152016109c3565b506000602082860101526020601f19601f83011685010191505092915050565b8051825260208101516020830152604081015160408301526000606082015160c06060850152610a3260c08501826109b9565b90506080830151608085015260a083015160a08501528091505092915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610aa757603f19888603018452610a958583516109ff565b94509285019290850190600101610a79565b5092979650505050505050565b600060208284031215610ac657600080fd5b5035919050565b86815285602082015284604082015260c060608201526000610af260c08301866109b9565b60808301949094525060a00152949350505050565b60008060408385031215610b1a57600080fd5b50508035926020909101359150565b60208152600061084f60208301846109ff565b600181811c90821680610b5057607f821691505b602082108103610b7057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610bc057600081815260208120601f850160051c81016020861015610b9d5750805b601f850160051c820191505b81811015610bbc57828155600101610ba9565b5050505b505050565b815167ffffffffffffffff811115610bdf57610bdf610856565b610bf381610bed8454610b3c565b84610b76565b602080601f831160018114610c285760008415610c105750858301515b600019600386901b1c1916600185901b178555610bbc565b600085815260208120601f198616915b82811015610c5757888601518255948401946001909101908401610c38565b5085821015610c755787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fdfea264697066735822122046bfeb3b02905c02cd3a82ae023dad9ed2a94258cc8d952131200b3975b67ad864736f6c63430008110033';

type ListBusinessApplyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ListBusinessApplyConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class ListBusinessApply__factory extends ContractFactory {
  constructor(...args: ListBusinessApplyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ListBusinessApply> {
    return super.deploy(overrides || {}) as Promise<ListBusinessApply>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
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
  static connect(address: string, signerOrProvider: Signer | Provider): ListBusinessApply {
    return new Contract(address, _abi, signerOrProvider) as ListBusinessApply;
  }
}
