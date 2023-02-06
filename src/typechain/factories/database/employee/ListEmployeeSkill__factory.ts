/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ListEmployeeSkill,
  ListEmployeeSkillInterface,
} from "../../../database/employee/ListEmployeeSkill";

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
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct EmployeeSkill",
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
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct EmployeeSkill",
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
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
        ],
        internalType: "struct EmployeeSkill",
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
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
        ],
        internalType: "struct EmployeeSkill",
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
    inputs: [
      {
        internalType: "uint256",
        name: "employeeId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
    ],
    name: "findIdByEmployeeIdAndTitle",
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
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
        ],
        internalType: "struct EmployeeSkill[]",
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
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "level",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "setEmployeeId",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "setEmployeeSkill",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "setId",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "setLevel",
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
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setTitle",
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
  "0x60806040523480156200001157600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000072620000666200007860201b60201c565b6200008060201b60201c565b62000218565b600033905090565b62000090620000ea60201b60201c565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b3373ffffffffffffffffffffffffffffffffffffffff16620001116200016c60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146200016a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016190620001f6565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620001de60208362000195565b9150620001eb82620001a6565b602082019050919050565b600060208201905081810360008301526200021181620001cf565b9050919050565b611a5480620002286000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806380c9419e11610097578063e0886f9011610066578063e0886f901461024b578063e6a1b60f1461027b578063e79d4e2214610297578063f2fde38b146102b3576100f5565b806380c9419e146101d457806383197ef0146102075780638da5cb5b14610211578063daea85c51461022f576100f5565b80635102bc9d116100d35780635102bc9d1461016257806353ed51431461017e57806363ba26b61461019c57806370a93b36146101b8576100f5565b806319f1d115146100fa5780632417450f1461011657806325f5477014610132575b600080fd5b610114600480360381019061010f9190610d95565b6102cf565b005b610130600480360381019061012b9190610e33565b610305565b005b61014c60048036038101906101479190610fa6565b610368565b6040516101599190611011565b60405180910390f35b61017c60048036038101906101779190610fa6565b6104b9565b005b6101866104f8565b60405161019391906111df565b60405180910390f35b6101b660048036038101906101b1919061129f565b610607565b005b6101d260048036038101906101cd9190610d95565b6106ba565b005b6101ee60048036038101906101e991906112e8565b6106f0565b6040516101fe949392919061135f565b60405180910390f35b61020f6107b8565b005b6102196107d9565b60405161022691906113ba565b60405180910390f35b61024960048036038101906102449190610e33565b610802565b005b610265600480360381019061026091906112e8565b610864565b6040516102729190611438565b60405180910390f35b61029560048036038101906102909190610d95565b610950565b005b6102b160048036038101906102ac919061145a565b610986565b005b6102cd60048036038101906102c89190610e33565b610a1b565b005b6102d7610a9e565b80600283815481106102ec576102eb6114dd565b5b9060005260206000209060040201600001819055505050565b61030d610b77565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600080600090505b60028054905081101561048e578360028281548110610392576103916114dd565b5b90600052602060002090600402016001015414801561046d575061046c83600283815481106103c4576103c36114dd565b5b906000526020600020906004020160020180546103e09061153b565b80601f016020809104026020016040519081016040528092919081815260200182805461040c9061153b565b80156104595780601f1061042e57610100808354040283529160200191610459565b820191906000526020600020905b81548152906001019060200180831161043c57829003601f168201915b5050505050610bee90919063ffffffff16565b5b1561047b57809150506104b3565b80806104869061159b565b915050610370565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90505b92915050565b6104c1610a9e565b80600283815481106104d6576104d56114dd565b5b906000526020600020906004020160020190816104f3919061178f565b505050565b60606002805480602002602001604051908101604052809291908181526020016000905b828210156105fe578382906000526020600020906004020160405180608001604052908160008201548152602001600182015481526020016002820180546105639061153b565b80601f016020809104026020016040519081016040528092919081815260200182805461058f9061153b565b80156105dc5780601f106105b1576101008083540402835291602001916105dc565b820191906000526020600020905b8154815290600101906020018083116105bf57829003601f168201915b505050505081526020016003820154815250508152602001906001019061051c565b50505050905090565b61060f610a9e565b600280549050816000018181525050600281908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002019081610673919061178f565b506060820151816003015550507f78f301a7aaeaf8967e1c04c6f9812d7e24d22e46fcda39c558eb392d45a082f2816040516106af9190611438565b60405180910390a150565b6106c2610a9e565b80600283815481106106d7576106d66114dd565b5b9060005260206000209060040201600301819055505050565b6002818154811061070057600080fd5b906000526020600020906004020160009150905080600001549080600101549080600201805461072f9061153b565b80601f016020809104026020016040519081016040528092919081815260200182805461075b9061153b565b80156107a85780601f1061077d576101008083540402835291602001916107a8565b820191906000526020600020905b81548152906001019060200180831161078b57829003601f168201915b5050505050908060030154905084565b6107c0610b77565b3073ffffffffffffffffffffffffffffffffffffffff16ff5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61080a610b77565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b61086c610d23565b600282815481106108805761087f6114dd565b5b906000526020600020906004020160405180608001604052908160008201548152602001600182015481526020016002820180546108bd9061153b565b80601f01602080910402602001604051908101604052809291908181526020018280546108e99061153b565b80156109365780601f1061090b57610100808354040283529160200191610936565b820191906000526020600020905b81548152906001019060200180831161091957829003601f168201915b505050505081526020016003820154815250509050919050565b610958610a9e565b806002838154811061096d5761096c6114dd565b5b9060005260206000209060040201600101819055505050565b61098e610a9e565b82600285815481106109a3576109a26114dd565b5b90600052602060002090600402016000018190555081600285815481106109cd576109cc6114dd565b5b906000526020600020906004020160020190816109ea919061178f565b508060028581548110610a00576109ff6114dd565b5b90600052602060002090600402016003018190555050505050565b610a23610b77565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a89906118d3565b60405180910390fd5b610a9b81610c57565b50565b60016000610aaa610d1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680610b365750610b006107d9565b73ffffffffffffffffffffffffffffffffffffffff16610b1e610d1b565b73ffffffffffffffffffffffffffffffffffffffff16145b610b75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6c9061193f565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff16610b966107d9565b73ffffffffffffffffffffffffffffffffffffffff1614610bec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be3906119ab565b60405180910390fd5b565b600081604051602001610c019190611a07565b6040516020818303038152906040528051906020012083604051602001610c289190611a07565b6040516020818303038152906040528051906020012003610c4c5760019050610c51565b600090505b92915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6040518060800160405280600081526020016000815260200160608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610d7281610d5f565b8114610d7d57600080fd5b50565b600081359050610d8f81610d69565b92915050565b60008060408385031215610dac57610dab610d55565b5b6000610dba85828601610d80565b9250506020610dcb85828601610d80565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e0082610dd5565b9050919050565b610e1081610df5565b8114610e1b57600080fd5b50565b600081359050610e2d81610e07565b92915050565b600060208284031215610e4957610e48610d55565b5b6000610e5784828501610e1e565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610eb382610e6a565b810181811067ffffffffffffffff82111715610ed257610ed1610e7b565b5b80604052505050565b6000610ee5610d4b565b9050610ef18282610eaa565b919050565b600067ffffffffffffffff821115610f1157610f10610e7b565b5b610f1a82610e6a565b9050602081019050919050565b82818337600083830152505050565b6000610f49610f4484610ef6565b610edb565b905082815260208101848484011115610f6557610f64610e65565b5b610f70848285610f27565b509392505050565b600082601f830112610f8d57610f8c610e60565b5b8135610f9d848260208601610f36565b91505092915050565b60008060408385031215610fbd57610fbc610d55565b5b6000610fcb85828601610d80565b925050602083013567ffffffffffffffff811115610fec57610feb610d5a565b5b610ff885828601610f78565b9150509250929050565b61100b81610d5f565b82525050565b60006020820190506110266000830184611002565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61106181610d5f565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110a1578082015181840152602081019050611086565b60008484015250505050565b60006110b882611067565b6110c28185611072565b93506110d2818560208601611083565b6110db81610e6a565b840191505092915050565b60006080830160008301516110fe6000860182611058565b5060208301516111116020860182611058565b506040830151848203604086015261112982826110ad565b915050606083015161113e6060860182611058565b508091505092915050565b600061115583836110e6565b905092915050565b6000602082019050919050565b60006111758261102c565b61117f8185611037565b93508360208202850161119185611048565b8060005b858110156111cd57848403895281516111ae8582611149565b94506111b98361115d565b925060208a01995050600181019050611195565b50829750879550505050505092915050565b600060208201905081810360008301526111f9818461116a565b905092915050565b600080fd5b600080fd5b60006080828403121561122157611220611201565b5b61122b6080610edb565b9050600061123b84828501610d80565b600083015250602061124f84828501610d80565b602083015250604082013567ffffffffffffffff81111561127357611272611206565b5b61127f84828501610f78565b604083015250606061129384828501610d80565b60608301525092915050565b6000602082840312156112b5576112b4610d55565b5b600082013567ffffffffffffffff8111156112d3576112d2610d5a565b5b6112df8482850161120b565b91505092915050565b6000602082840312156112fe576112fd610d55565b5b600061130c84828501610d80565b91505092915050565b600082825260208201905092915050565b600061133182611067565b61133b8185611315565b935061134b818560208601611083565b61135481610e6a565b840191505092915050565b60006080820190506113746000830187611002565b6113816020830186611002565b81810360408301526113938185611326565b90506113a26060830184611002565b95945050505050565b6113b481610df5565b82525050565b60006020820190506113cf60008301846113ab565b92915050565b60006080830160008301516113ed6000860182611058565b5060208301516114006020860182611058565b506040830151848203604086015261141882826110ad565b915050606083015161142d6060860182611058565b508091505092915050565b6000602082019050818103600083015261145281846113d5565b905092915050565b6000806000806080858703121561147457611473610d55565b5b600061148287828801610d80565b945050602061149387828801610d80565b935050604085013567ffffffffffffffff8111156114b4576114b3610d5a565b5b6114c087828801610f78565b92505060606114d187828801610d80565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061155357607f821691505b6020821081036115665761156561150c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115a682610d5f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036115d8576115d761156c565b5b600182019050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026116457fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611608565b61164f8683611608565b95508019841693508086168417925050509392505050565b6000819050919050565b600061168c61168761168284610d5f565b611667565b610d5f565b9050919050565b6000819050919050565b6116a683611671565b6116ba6116b282611693565b848454611615565b825550505050565b600090565b6116cf6116c2565b6116da81848461169d565b505050565b5b818110156116fe576116f36000826116c7565b6001810190506116e0565b5050565b601f82111561174357611714816115e3565b61171d846115f8565b8101602085101561172c578190505b611740611738856115f8565b8301826116df565b50505b505050565b600082821c905092915050565b600061176660001984600802611748565b1980831691505092915050565b600061177f8383611755565b9150826002028217905092915050565b61179882611067565b67ffffffffffffffff8111156117b1576117b0610e7b565b5b6117bb825461153b565b6117c6828285611702565b600060209050601f8311600181146117f957600084156117e7578287015190505b6117f18582611773565b865550611859565b601f198416611807866115e3565b60005b8281101561182f5784890151825560018201915060208501945060208101905061180a565b8683101561184c5784890151611848601f891682611755565b8355505b6001600288020188555050505b505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006118bd602683611315565b91506118c882611861565b604082019050919050565b600060208201905081810360008301526118ec816118b0565b9050919050565b7f5065726d697373696f6e3a206f6e6c7920617070726f76656400000000000000600082015250565b6000611929601983611315565b9150611934826118f3565b602082019050919050565b600060208201905081810360008301526119588161191c565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611995602083611315565b91506119a08261195f565b602082019050919050565b600060208201905081810360008301526119c481611988565b9050919050565b600081905092915050565b60006119e182611067565b6119eb81856119cb565b93506119fb818560208601611083565b80840191505092915050565b6000611a1382846119d6565b91508190509291505056fea26469706673582212203612a470fa807e2cbd84948fa7ead882b5083b71915080e5899ff9c805ca803764736f6c63430008110033";

type ListEmployeeSkillConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ListEmployeeSkillConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ListEmployeeSkill__factory extends ContractFactory {
  constructor(...args: ListEmployeeSkillConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ListEmployeeSkill> {
    return super.deploy(overrides || {}) as Promise<ListEmployeeSkill>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ListEmployeeSkill {
    return super.attach(address) as ListEmployeeSkill;
  }
  override connect(signer: Signer): ListEmployeeSkill__factory {
    return super.connect(signer) as ListEmployeeSkill__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ListEmployeeSkillInterface {
    return new utils.Interface(_abi) as ListEmployeeSkillInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ListEmployeeSkill {
    return new Contract(address, _abi, signerOrProvider) as ListEmployeeSkill;
  }
}
