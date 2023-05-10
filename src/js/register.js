

$(document).ready(function(){
    $('.container').hide();
    $('.footer').hide();
    setTimeout(function(){
        $('.loader').hide();
        $('.footer').show();
        $('.container').show();
        $('#accountAddress').val(App.account);
    }, 1000);
});

function addUser(){
    switch ($('#accountType').val()) {
        case null:
            alert("Please select an option");
            $('#accountType').focus()
            break;
        case "Producer":
            addProducer();
            break;
        case "Retailer":
            addRetailer();
            break;
        case "Consumer":
            addConsumer();
            break;
        case "RecyclingUnit":
            addRecycleUnit();
            break;
        default:
            alert("There was an error completing the transaction");
    }
}

const ADMIN_CONTRACT_ABI = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "consumers",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "ispresent",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "producers",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "ispresent",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "penalize",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "recycleUnits",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "ispresent",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "retailers",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "ispresent",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_pAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addProducer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_rAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addRetailer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_cAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addConsumer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_rAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addRecycleUnit",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "checkProducer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "checkRetailer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "checkConsumer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "checkRecycleUnit",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getProducerCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRetailerCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getConsumerCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRecyclingUintCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getProducerName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getRetailerName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getConsumerName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getRecycleUnitName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_producer",
          "type": "address"
        }
      ],
      "name": "addPenalizeAmount",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_producer",
          "type": "address"
        }
      ],
      "name": "payPenalizeAmount",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_producer",
          "type": "address"
        }
      ],
      "name": "getPenalizeAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const ADMIN_CONTRACT_ADDRESS = "0xB472aAEe44a3a6cd37bF5b38d3aA88E8992de717"

async function addProducer(){
    var exists = false;
    var name = $('#name').val();
    var accountname = $("#accountAddress").val();
    console.log(accountname,"------------");
    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
    console.log(adminContract)
        const checkRes = await adminContract.methods.checkProducer(accountname).call()
        exists = checkRes
        if(!exists){
            await adminContract.methods.addProducer(accountname, name).send({from: accountname, gas: 7920027})
        }else{
            alert("Producer is already associated with this account");
        }
   

    // App.contracts.AdminContract.deployed().then(function(i){
    //     i.checkProducer(accountname).then(function(res){
    //     // i.checkProducer(accountname).then(function(res){
    //         exists = res;
    //         return i;
    //     }).then(function(i){
    //         if (!exists) {
    //             i.addProducer(accountname, name);
    //             // i.addProducer(App.account, name);
    //         }else{
    //             alert("Producer is already associated with this account");
    //         }
    //     });
    // });
}

async function addRetailer(){
    var exists = false;
    var name = $('#name').val();
       var accountname = $("#accountAddress").val();
    console.log(accountname,"------------");
    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
    console.log(adminContract)
        const checkRes = await adminContract.methods.checkRetailer(accountname).call()
        exists = checkRes
        if(!exists){
            await adminContract.methods.addRetailer(accountname, name).send({from: accountname, gas: 7920027})
        }else{
            alert("Producer is already associated with this account");
        }
   

    // App.contracts.AdminContract.deployed().then(function(i){
    //     i.checkRetailer(App.account).then(function(res){
    //         exists = res;
    //         return i;
    //     }).then(function(i){
    //         if (!exists) {
    //             i.addRetailer(App.account, name);
    //         }else{
    //             alert("Retailer is already associated with this account");
    //         }
    //     });
    // });
}

async function addConsumer(){
    var exists = false;
    var name = $('#name').val();

       var accountname = $("#accountAddress").val();
    console.log(accountname,"------------");
    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
    console.log(adminContract)
        const checkRes = await adminContract.methods.checkConsumer(accountname).call()
        exists = checkRes
        if(!exists){
            await adminContract.methods.addConsumer(accountname, name).send({from: accountname, gas: 7920027})
        }else{
            alert("Producer is already associated with this account");
        }
   


    // App.contracts.AdminContract.deployed().then(function(i){
    //     i.checkConsumer(App.account).then(function(res){
    //         exists = res;
    //         return i;
    //     }).then(function(i){
    //         if (!exists) {
    //             i.addConsumer(App.account, name);
    //         }else{
    //             alert("Consumer is already associated with this account");
    //         }
    //     });
    // });
}

async function addRecycleUnit(){
    var exists = false;
    var name = $('#name').val();
       var accountname = $("#accountAddress").val();
    console.log(accountname,"------------");
    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
    console.log(adminContract)
        const checkRes = await adminContract.methods.checkRecycleUnit(accountname).call()
        exists = checkRes
        if(!exists){
            await adminContract.methods.addRecycleUnit(accountname, name).send({from: accountname, gas: 7920027})
        }else{
            alert("Producer is already associated with this account");
        }
   


    // App.contracts.AdminContract.deployed().then(function(i){
    //     i.checkRecycleUnit(App.account).then(function(res){
    //         exists = res;
    //         return i;
    //     }).then(function(i){
    //         if (!exists) {
    //             i.addRecycleUnit(App.account, name);
    //         }else{
    //             alert("Recycle Unit is already associated with this account");
    //         }
    //     });
    // });
}