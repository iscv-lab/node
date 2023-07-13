/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type { ListEmployee, ListEmployeeInterface } from '../../../database/employee/ListEmployee';

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
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'phone',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'professional',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'github',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'linkedin',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sourceImage',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct Profile',
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
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'phone',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'professional',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'github',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'linkedin',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sourceImage',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct Profile',
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
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'phone',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'professional',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'github',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'linkedin',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sourceImage',
            type: 'string',
          },
        ],
        internalType: 'struct Profile',
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
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'phone',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'professional',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'github',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'linkedin',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sourceImage',
            type: 'string',
          },
        ],
        internalType: 'struct Profile',
        name: '',
        type: 'tuple',
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
    name: 'atAddress',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'phone',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'professional',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'github',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'linkedin',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sourceImage',
            type: 'string',
          },
        ],
        internalType: 'struct Profile',
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
    inputs: [
      {
        internalType: 'address',
        name: 'value',
        type: 'address',
      },
    ],
    name: 'findIdByAddress',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
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
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'phone',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'professional',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'github',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'linkedin',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sourceImage',
            type: 'string',
          },
        ],
        internalType: 'struct Profile[]',
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
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'phone',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'professional',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'github',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'linkedin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceImage',
        type: 'string',
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
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
    ],
    name: 'setEmail',
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
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
    ],
    name: 'setGithub',
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
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'setId',
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
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
    ],
    name: 'setLinkedin',
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
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
    ],
    name: 'setName',
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
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
    ],
    name: 'setPhone',
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
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
    ],
    name: 'setProfessional',
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
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
    ],
    name: 'setSourceImage',
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
        internalType: 'address',
        name: 'value',
        type: 'address',
      },
    ],
    name: 'setUser',
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
  '0x60806040523480156200001157600080fd5b50600080546001600160a01b0319163317905562000036620000303390565b6200003c565b620000de565b620000466200006d565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b33620000816000546001600160a01b031690565b6001600160a01b031614620000dc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b61231580620000ee6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806380c9419e116100ad578063db4d295b11610071578063db4d295b14610288578063e0886f901461029b578063e396c622146102ae578063f2fde38b146102c1578063fe55932a146102d457600080fd5b806380c9419e1461021757806383197ef01461023f5780638da5cb5b146102475780639da3ffb414610262578063daea85c51461027557600080fd5b80634da07e19116100f45780634da07e191461019257806352d0fa14146101a557806353ed5143146101ce57806368938870146101e35780636a179ab41461020457600080fd5b806319f1d115146101315780631c136e3d146101465780632417450f1461015957806326ee2f0d1461016c57806341fc96fc1461017f575b600080fd5b61014461013f366004611bf0565b6102e7565b005b610144610154366004611cdf565b610318565b610144610167366004611d3d565b610356565b61014461017a366004611d5f565b61037f565b61014461018d366004611cdf565b6104fd565b6101446101a0366004611cdf565b610536565b6101b86101b3366004611d3d565b61056f565b6040516101c59190611fec565b60405180910390f35b6101d6610ace565b6040516101c59190611fff565b6101f66101f1366004611d3d565b610f4c565b6040519081526020016101c5565b610144610212366004611cdf565b610fe2565b61022a610225366004612061565b61101b565b6040516101c59998979695949392919061207a565b610144611438565b6000546040516001600160a01b0390911681526020016101c5565b610144610270366004611cdf565b611443565b610144610283366004611d3d565b61147c565b61014461029636600461212e565b6114ab565b6101b86102a9366004612061565b611500565b6101446102bc366004611cdf565b61197c565b6101446102cf366004611d3d565b6119b5565b6101446102e2366004611cdf565b611a33565b6102ef611a6c565b80600283815481106103035761030361215a565b60009182526020909120600990910201555050565b610320611a6c565b80600283815481106103345761033461215a565b9060005260206000209060090201600701908161035191906121f8565b505050565b61035e611ae2565b6001600160a01b03166000908152600160205260409020805460ff19169055565b610387611a6c565b6002805480835260018101825560009190915281517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace600990920291820190815560208301517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf830180546001600160a01b0319166001600160a01b03909216919091179055604083015183927f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad0019061044190826121f8565b506060820151600382019061045690826121f8565b506080820151600482019061046b90826121f8565b5060a0820151600582019061048090826121f8565b5060c0820151600682019061049590826121f8565b5060e082015160078201906104aa90826121f8565b5061010082015160088201906104c090826121f8565b5050507fb90e5883c44144e6d4f0d76cd40f063ec2e944e86030885387ef58656395cae1816040516104f29190611fec565b60405180910390a150565b610505611a6c565b80600283815481106105195761051961215a565b9060005260206000209060090201600501908161035191906121f8565b61053e611a6c565b80600283815481106105525761055261215a565b9060005260206000209060090201600301908161035191906121f8565b610577611b9b565b60005b600254811015610a4157826001600160a01b0316600282815481106105a1576105a161215a565b60009182526020909120600160099092020101546001600160a01b031603610a2f57600281815481106105d6576105d661215a565b906000526020600020906009020160405180610120016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815260200160028201805461063990612170565b80601f016020809104026020016040519081016040528092919081815260200182805461066590612170565b80156106b25780601f10610687576101008083540402835291602001916106b2565b820191906000526020600020905b81548152906001019060200180831161069557829003601f168201915b505050505081526020016003820180546106cb90612170565b80601f01602080910402602001604051908101604052809291908181526020018280546106f790612170565b80156107445780601f1061071957610100808354040283529160200191610744565b820191906000526020600020905b81548152906001019060200180831161072757829003601f168201915b5050505050815260200160048201805461075d90612170565b80601f016020809104026020016040519081016040528092919081815260200182805461078990612170565b80156107d65780601f106107ab576101008083540402835291602001916107d6565b820191906000526020600020905b8154815290600101906020018083116107b957829003601f168201915b505050505081526020016005820180546107ef90612170565b80601f016020809104026020016040519081016040528092919081815260200182805461081b90612170565b80156108685780601f1061083d57610100808354040283529160200191610868565b820191906000526020600020905b81548152906001019060200180831161084b57829003601f168201915b5050505050815260200160068201805461088190612170565b80601f01602080910402602001604051908101604052809291908181526020018280546108ad90612170565b80156108fa5780601f106108cf576101008083540402835291602001916108fa565b820191906000526020600020905b8154815290600101906020018083116108dd57829003601f168201915b5050505050815260200160078201805461091390612170565b80601f016020809104026020016040519081016040528092919081815260200182805461093f90612170565b801561098c5780601f106109615761010080835404028352916020019161098c565b820191906000526020600020905b81548152906001019060200180831161096f57829003601f168201915b505050505081526020016008820180546109a590612170565b80601f01602080910402602001604051908101604052809291908181526020018280546109d190612170565b8015610a1e5780601f106109f357610100808354040283529160200191610a1e565b820191906000526020600020905b815481529060010190602001808311610a0157829003601f168201915b505050505081525050915050919050565b80610a39816122b8565b91505061057a565b5050604080516101208101825260001981526000602080830182905283518082018552828152838501528351808201855282815260608401528351808201855282815260808401528351808201855282815260a08401528351808201855282815260c08401528351808201855282815260e084015283519081019093528252610100810191909152919050565b60606002805480602002602001604051908101604052809291908181526020016000905b82821015610f435760008481526020908190206040805161012081018252600986029092018054835260018101546001600160a01b03169383019390935260028301805492939291840191610b4690612170565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7290612170565b8015610bbf5780601f10610b9457610100808354040283529160200191610bbf565b820191906000526020600020905b815481529060010190602001808311610ba257829003601f168201915b50505050508152602001600382018054610bd890612170565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0490612170565b8015610c515780601f10610c2657610100808354040283529160200191610c51565b820191906000526020600020905b815481529060010190602001808311610c3457829003601f168201915b50505050508152602001600482018054610c6a90612170565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9690612170565b8015610ce35780601f10610cb857610100808354040283529160200191610ce3565b820191906000526020600020905b815481529060010190602001808311610cc657829003601f168201915b50505050508152602001600582018054610cfc90612170565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2890612170565b8015610d755780601f10610d4a57610100808354040283529160200191610d75565b820191906000526020600020905b815481529060010190602001808311610d5857829003601f168201915b50505050508152602001600682018054610d8e90612170565b80601f0160208091040260200160405190810160405280929190818152602001828054610dba90612170565b8015610e075780601f10610ddc57610100808354040283529160200191610e07565b820191906000526020600020905b815481529060010190602001808311610dea57829003601f168201915b50505050508152602001600782018054610e2090612170565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4c90612170565b8015610e995780601f10610e6e57610100808354040283529160200191610e99565b820191906000526020600020905b815481529060010190602001808311610e7c57829003601f168201915b50505050508152602001600882018054610eb290612170565b80601f0160208091040260200160405190810160405280929190818152602001828054610ede90612170565b8015610f2b5780601f10610f0057610100808354040283529160200191610f2b565b820191906000526020600020905b815481529060010190602001808311610f0e57829003601f168201915b50505050508152505081526020019060010190610af2565b50505050905090565b6000805b600254811015610fd857826001600160a01b031660028281548110610f7757610f7761215a565b60009182526020909120600160099092020101546001600160a01b031603610fc65760028181548110610fac57610fac61215a565b906000526020600020906009020160000154915050919050565b80610fd0816122b8565b915050610f50565b5060001992915050565b610fea611a6c565b8060028381548110610ffe57610ffe61215a565b9060005260206000209060090201600601908161035191906121f8565b6002818154811061102b57600080fd5b60009182526020909120600990910201805460018201546002830180549294506001600160a01b03909116929161106190612170565b80601f016020809104026020016040519081016040528092919081815260200182805461108d90612170565b80156110da5780601f106110af576101008083540402835291602001916110da565b820191906000526020600020905b8154815290600101906020018083116110bd57829003601f168201915b5050505050908060030180546110ef90612170565b80601f016020809104026020016040519081016040528092919081815260200182805461111b90612170565b80156111685780601f1061113d57610100808354040283529160200191611168565b820191906000526020600020905b81548152906001019060200180831161114b57829003601f168201915b50505050509080600401805461117d90612170565b80601f01602080910402602001604051908101604052809291908181526020018280546111a990612170565b80156111f65780601f106111cb576101008083540402835291602001916111f6565b820191906000526020600020905b8154815290600101906020018083116111d957829003601f168201915b50505050509080600501805461120b90612170565b80601f016020809104026020016040519081016040528092919081815260200182805461123790612170565b80156112845780601f1061125957610100808354040283529160200191611284565b820191906000526020600020905b81548152906001019060200180831161126757829003601f168201915b50505050509080600601805461129990612170565b80601f01602080910402602001604051908101604052809291908181526020018280546112c590612170565b80156113125780601f106112e757610100808354040283529160200191611312565b820191906000526020600020905b8154815290600101906020018083116112f557829003601f168201915b50505050509080600701805461132790612170565b80601f016020809104026020016040519081016040528092919081815260200182805461135390612170565b80156113a05780601f10611375576101008083540402835291602001916113a0565b820191906000526020600020905b81548152906001019060200180831161138357829003601f168201915b5050505050908060080180546113b590612170565b80601f01602080910402602001604051908101604052809291908181526020018280546113e190612170565b801561142e5780601f106114035761010080835404028352916020019161142e565b820191906000526020600020905b81548152906001019060200180831161141157829003601f168201915b5050505050905089565b611440611ae2565b30ff5b61144b611a6c565b806002838154811061145f5761145f61215a565b9060005260206000209060090201600801908161035191906121f8565b611484611ae2565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6114b3611a6c565b80600283815481106114c7576114c761215a565b906000526020600020906009020160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505050565b611508611b9b565b611510611a6c565b600282815481106115235761152361215a565b906000526020600020906009020160405180610120016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815260200160028201805461158690612170565b80601f01602080910402602001604051908101604052809291908181526020018280546115b290612170565b80156115ff5780601f106115d4576101008083540402835291602001916115ff565b820191906000526020600020905b8154815290600101906020018083116115e257829003601f168201915b5050505050815260200160038201805461161890612170565b80601f016020809104026020016040519081016040528092919081815260200182805461164490612170565b80156116915780601f1061166657610100808354040283529160200191611691565b820191906000526020600020905b81548152906001019060200180831161167457829003601f168201915b505050505081526020016004820180546116aa90612170565b80601f01602080910402602001604051908101604052809291908181526020018280546116d690612170565b80156117235780601f106116f857610100808354040283529160200191611723565b820191906000526020600020905b81548152906001019060200180831161170657829003601f168201915b5050505050815260200160058201805461173c90612170565b80601f016020809104026020016040519081016040528092919081815260200182805461176890612170565b80156117b55780601f1061178a576101008083540402835291602001916117b5565b820191906000526020600020905b81548152906001019060200180831161179857829003601f168201915b505050505081526020016006820180546117ce90612170565b80601f01602080910402602001604051908101604052809291908181526020018280546117fa90612170565b80156118475780601f1061181c57610100808354040283529160200191611847565b820191906000526020600020905b81548152906001019060200180831161182a57829003601f168201915b5050505050815260200160078201805461186090612170565b80601f016020809104026020016040519081016040528092919081815260200182805461188c90612170565b80156118d95780601f106118ae576101008083540402835291602001916118d9565b820191906000526020600020905b8154815290600101906020018083116118bc57829003601f168201915b505050505081526020016008820180546118f290612170565b80601f016020809104026020016040519081016040528092919081815260200182805461191e90612170565b801561196b5780601f106119405761010080835404028352916020019161196b565b820191906000526020600020905b81548152906001019060200180831161194e57829003601f168201915b50505050508152505090505b919050565b611984611a6c565b80600283815481106119985761199861215a565b9060005260206000209060090201600401908161035191906121f8565b6119bd611ae2565b6001600160a01b038116611a275760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b611a3081611b4b565b50565b611a3b611a6c565b8060028381548110611a4f57611a4f61215a565b9060005260206000209060090201600201908161035191906121f8565b3360009081526001602052604090205460ff1680611a9457506000546001600160a01b031633145b611ae05760405162461bcd60e51b815260206004820152601960248201527f5065726d697373696f6e3a206f6e6c7920617070726f766564000000000000006044820152606401611a1e565b565b33611af56000546001600160a01b031690565b6001600160a01b031614611ae05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401611a1e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518061012001604052806000815260200160006001600160a01b03168152602001606081526020016060815260200160608152602001606081526020016060815260200160608152602001606081525090565b60008060408385031215611c0357600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715611c4c57611c4c611c12565b60405290565b600082601f830112611c6357600080fd5b813567ffffffffffffffff80821115611c7e57611c7e611c12565b604051601f8301601f19908116603f01168101908282118183101715611ca657611ca6611c12565b81604052838152866020858801011115611cbf57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611cf257600080fd5b82359150602083013567ffffffffffffffff811115611d1057600080fd5b611d1c85828601611c52565b9150509250929050565b80356001600160a01b038116811461197757600080fd5b600060208284031215611d4f57600080fd5b611d5882611d26565b9392505050565b600060208284031215611d7157600080fd5b813567ffffffffffffffff80821115611d8957600080fd5b908301906101208286031215611d9e57600080fd5b611da6611c28565b82358152611db660208401611d26565b6020820152604083013582811115611dcd57600080fd5b611dd987828601611c52565b604083015250606083013582811115611df157600080fd5b611dfd87828601611c52565b606083015250608083013582811115611e1557600080fd5b611e2187828601611c52565b60808301525060a083013582811115611e3957600080fd5b611e4587828601611c52565b60a08301525060c083013582811115611e5d57600080fd5b611e6987828601611c52565b60c08301525060e083013582811115611e8157600080fd5b611e8d87828601611c52565b60e0830152506101008084013583811115611ea757600080fd5b611eb388828701611c52565b918301919091525095945050505050565b6000815180845260005b81811015611eea57602081850181015186830182015201611ece565b506000602082860101526020601f19601f83011685010191505092915050565b6000610120825184526020830151611f2d60208601826001600160a01b03169052565b506040830151816040860152611f4582860182611ec4565b91505060608301518482036060860152611f5f8282611ec4565b91505060808301518482036080860152611f798282611ec4565b91505060a083015184820360a0860152611f938282611ec4565b91505060c083015184820360c0860152611fad8282611ec4565b91505060e083015184820360e0860152611fc78282611ec4565b9150506101008084015185830382870152611fe28382611ec4565b9695505050505050565b602081526000611d586020830184611f0a565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561205457603f19888603018452612042858351611f0a565b94509285019290850190600101612026565b5092979650505050505050565b60006020828403121561207357600080fd5b5035919050565b8981526001600160a01b0389166020820152610120604082018190526000906120a58382018b611ec4565b905082810360608401526120b9818a611ec4565b905082810360808401526120cd8189611ec4565b905082810360a08401526120e18188611ec4565b905082810360c08401526120f58187611ec4565b905082810360e08401526121098186611ec4565b905082810361010084015261211e8185611ec4565b9c9b505050505050505050505050565b6000806040838503121561214157600080fd5b8235915061215160208401611d26565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061218457607f821691505b6020821081036121a457634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561035157600081815260208120601f850160051c810160208610156121d15750805b601f850160051c820191505b818110156121f0578281556001016121dd565b505050505050565b815167ffffffffffffffff81111561221257612212611c12565b612226816122208454612170565b846121aa565b602080601f83116001811461225b57600084156122435750858301515b600019600386901b1c1916600185901b1785556121f0565b600085815260208120601f198616915b8281101561228a5788860151825594840194600190910190840161226b565b50858210156122a85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000600182016122d857634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220abc4c0ec86b1b0c8a7f091ddbd427ed358141f76189800e621631df538b3f57564736f6c63430008110033';

type ListEmployeeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ListEmployeeConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class ListEmployee__factory extends ContractFactory {
  constructor(...args: ListEmployeeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ListEmployee> {
    return super.deploy(overrides || {}) as Promise<ListEmployee>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ListEmployee {
    return super.attach(address) as ListEmployee;
  }
  override connect(signer: Signer): ListEmployee__factory {
    return super.connect(signer) as ListEmployee__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ListEmployeeInterface {
    return new utils.Interface(_abi) as ListEmployeeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ListEmployee {
    return new Contract(address, _abi, signerOrProvider) as ListEmployee;
  }
}
