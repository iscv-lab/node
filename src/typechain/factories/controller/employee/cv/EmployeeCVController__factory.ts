/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../common';
import type {
  EmployeeCVController,
  EmployeeCVControllerInterface,
} from '../../../../controller/employee/cv/EmployeeCVController';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'listEmployeeAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'listEmployeeCVAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
    inputs: [],
    name: '_checkExistEmployeeAccount',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'employeeId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'source',
        type: 'string',
      },
    ],
    name: 'addCV',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'getCVs',
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
            name: 'time',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'source',
            type: 'string',
          },
        ],
        internalType: 'struct EmployeeCV[]',
        name: '',
        type: 'tuple[]',
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
  '0x608060405234801561001057600080fd5b50604051610b9e380380610b9e83398101604081905261002f91610087565b60008054336001600160a01b0319918216179091556001805482166001600160a01b0394851617905560028054909116919092161790556100ba565b80516001600160a01b038116811461008257600080fd5b919050565b6000806040838503121561009a57600080fd5b6100a38361006b565b91506100b16020840161006b565b90509250929050565b610ad5806100c96000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630201a64f1461006757806383197ef0146100855780638da5cb5b1461008f578063ec40a59b146100aa578063f2fde38b146100c2578063ffc1e78a146100d5575b600080fd5b61006f6100e8565b60405161007c91906105bf565b60405180910390f35b61008d610166565b005b6000546040516001600160a01b03909116815260200161007c565b6100b2610171565b604051901515815260200161007c565b61008d6100d0366004610636565b6101fd565b61008d6100e336600461070f565b61027b565b60606100fc6002546001600160a01b031690565b6001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa158015610139573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261016191908101906107e6565b905090565b61016e6103d2565b30ff5b600154604051630689388760e41b815233600482015260009182916001600160a01b0390911690636893887090602401602060405180830381865afa1580156101be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e291906108fe565b905060001981036101f557600091505090565b600191505090565b6102056103d2565b6001600160a01b03811661026f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6102788161043d565b50565b81610284610171565b6102de5760405162461bcd60e51b815260206004820152602560248201527f4c697374456d706c6f796565437572736f723a206e6f7420657869737420616360448201526418dbdd5b9d60da1b6064820152608401610266565b6102e78161048d565b61034b5760405162461bcd60e51b815260206004820152602f60248201527f4c697374456d706c6f796565437572736f723a206964206973206e6f7420626560448201526e6c6f6e6720746f206164647265737360881b6064820152608401610266565b60408051608081018252848152600060208201524281830152606081018490526002549151637a2204bb60e11b815290916001600160a01b03169063f44409769061039a908490600401610917565b600060405180830381600087803b1580156103b457600080fd5b505af11580156103c8573d6000803e3d6000fd5b5050505050505050565b336103e56000546001600160a01b031690565b6001600160a01b03161461043b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610266565b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600154604051630e0886f960e41b81526004810183905260009182916001600160a01b039091169063e0886f9090602401600060405180830381865afa1580156104db573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610503919081019061093a565b905061051381602001513361051a565b9392505050565b6000816001600160a01b0316836001600160a01b03160361053d57506001610541565b5060005b92915050565b60005b8381101561056257818101518382015260200161054a565b50506000910152565b805182526020810151602083015260408101516040830152600060608201516080606085015280518060808601526105aa8160a0870160208501610547565b601f01601f19169390930160a0019392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561061457603f1988860301845261060285835161056b565b945092850192908501906001016105e6565b5092979650505050505050565b6001600160a01b038116811461027857600080fd5b60006020828403121561064857600080fd5b813561051381610621565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561068c5761068c610653565b60405290565b604051610120810167ffffffffffffffff8111828210171561068c5761068c610653565b604051601f8201601f1916810167ffffffffffffffff811182821017156106df576106df610653565b604052919050565b600067ffffffffffffffff82111561070157610701610653565b50601f01601f191660200190565b6000806040838503121561072257600080fd5b82359150602083013567ffffffffffffffff81111561074057600080fd5b8301601f8101851361075157600080fd5b803561076461075f826106e7565b6106b6565b81815286602083850101111561077957600080fd5b816020840160208301376000602083830101528093505050509250929050565b600082601f8301126107aa57600080fd5b81516107b861075f826106e7565b8181528460208386010111156107cd57600080fd5b6107de826020830160208701610547565b949350505050565b600060208083850312156107f957600080fd5b825167ffffffffffffffff8082111561081157600080fd5b818501915085601f83011261082557600080fd5b81518181111561083757610837610653565b8060051b6108468582016106b6565b918252838101850191858101908984111561086057600080fd5b86860192505b838310156108f15782518581111561087e5760008081fd5b86016080818c03601f19018113156108965760008081fd5b61089e610669565b828a01518152604080840151828c0152606080850151828401529284015192898411156108cd57600091508182fd5b6108db8f8d86880101610799565b9083015250845250509186019190860190610866565b9998505050505050505050565b60006020828403121561091057600080fd5b5051919050565b602081526000610513602083018461056b565b805161093581610621565b919050565b60006020828403121561094c57600080fd5b815167ffffffffffffffff8082111561096457600080fd5b90830190610120828603121561097957600080fd5b610981610692565b825181526109916020840161092a565b60208201526040830151828111156109a857600080fd5b6109b487828601610799565b6040830152506060830151828111156109cc57600080fd5b6109d887828601610799565b6060830152506080830151828111156109f057600080fd5b6109fc87828601610799565b60808301525060a083015182811115610a1457600080fd5b610a2087828601610799565b60a08301525060c083015182811115610a3857600080fd5b610a4487828601610799565b60c08301525060e083015182811115610a5c57600080fd5b610a6887828601610799565b60e0830152506101008084015183811115610a8257600080fd5b610a8e88828701610799565b91830191909152509594505050505056fea2646970667358221220ad191095fe40a5897122d4a810237ab239349039435a7fcf22cf6a47a43e971b64736f6c63430008110033';

type EmployeeCVControllerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: EmployeeCVControllerConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class EmployeeCVController__factory extends ContractFactory {
  constructor(...args: EmployeeCVControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    listEmployeeAddress: PromiseOrValue<string>,
    listEmployeeCVAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<EmployeeCVController> {
    return super.deploy(listEmployeeAddress, listEmployeeCVAddress, overrides || {}) as Promise<EmployeeCVController>;
  }
  override getDeployTransaction(
    listEmployeeAddress: PromiseOrValue<string>,
    listEmployeeCVAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(listEmployeeAddress, listEmployeeCVAddress, overrides || {});
  }
  override attach(address: string): EmployeeCVController {
    return super.attach(address) as EmployeeCVController;
  }
  override connect(signer: Signer): EmployeeCVController__factory {
    return super.connect(signer) as EmployeeCVController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmployeeCVControllerInterface {
    return new utils.Interface(_abi) as EmployeeCVControllerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): EmployeeCVController {
    return new Contract(address, _abi, signerOrProvider) as EmployeeCVController;
  }
}
