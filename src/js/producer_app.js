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

const Node_CONTRACT_ABI = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
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
      "name": "ProductList",
      "outputs": [
        {
          "internalType": "address",
          "name": "producerAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "retailerAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "consumerAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "typeOfProduct",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "returnedToRetailer",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "returnedToProducer",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "reusePercentage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "percentConsumer",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "markedByAdmin",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "weights",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "weightOfGlass",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "weightOfPlastic",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "weightOfNickel",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "weightOfAluminium",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "weightOfCopper",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "weightOfMagnesium",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "weightOfLead",
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
          "internalType": "string",
          "name": "a",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "b",
          "type": "string"
        }
      ],
      "name": "compareStrings",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_type",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_weightOfAluminium",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weightOfNickel",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weightOfGlass",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weightOfPlastic",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weightOfCopper",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weightOfMagnesium",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weightOfLead",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getProductCount",
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
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_ids",
          "type": "uint256[]"
        }
      ],
      "name": "addReturnProducts",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_percentConsumer",
          "type": "uint256"
        }
      ],
      "name": "addReturnProductToRetailer",
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
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_type",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "getCostForRetailer",
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
      "constant": false,
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_producer",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_type",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "soldToRetailer",
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
          "name": "_retailer",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_type",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "getCostForConsumer",
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
      "constant": false,
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_retailer",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_type",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "soldToConsumer",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_percentage",
          "type": "uint256"
        }
      ],
      "name": "getValue",
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
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_percentage",
          "type": "uint256"
        }
      ],
      "name": "addPercentage",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_products",
          "type": "uint256[]"
        },
        {
          "internalType": "address payable",
          "name": "_producer",
          "type": "address"
        }
      ],
      "name": "sendIncentives",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_products",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "_producer",
          "type": "address"
        }
      ],
      "name": "penalizeProducer",
      "outputs": [],
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
      "name": "fetchProductReferenceConsumer",
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
const Node_CONTRACT_ADDRESS = "0xc3203FF51bB7C40985e36c0Ff7ed6872a975c94e"
ProApp={
    addProduct: async function () {
        var productname = $('#productname').val();
        var weightglass = $('#weightglass').val();
        var weightplastic = $('#weightplastic').val();
        var weightnickel = $('#weightnickel').val();
        var weightaluminium = $('#weightaluminium').val();
        var weightcopper = $('#weightcopper').val();
        var weightmagnesium = $('#weightmagnesium').val();
        var weightlead = $('#weightlead').val();
        var producttype = $('#producttype').val();
        var price = $('#price').val();
        var quantity = $('#quantity').val();

        const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)

        const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        if(productname!="" && weightglass!="" && weightplastic!="" && weightnickel!="" && weightaluminium!="" && weightcopper!="" && weightmagnesium!="" && weightlead!="" && price!="" && quantity!=""){
            // App.contracts.NodeContract.deployed().then(function (instance) {
            //     instance.addProduct(productname, producttype, weightaluminium, weightnickel, weightglass, weightplastic, weightcopper, weightmagnesium, weightlead, price, quantity).then(function (receipt) {
            //         ProApp.render();
            //     });
            // });
            const accounts = await window.ethereum.enable();
            const account = accounts[0];
            await nodeContract.methods.addProduct(productname, producttype, weightaluminium, weightnickel, weightglass, weightplastic, weightcopper, weightmagnesium, weightlead, price, quantity).send({from: account, gas: 7920027})
             ProApp.render();

        }else{
            alert("Fill empty fields");
        }
    },

    loadAddress:async function() {
        $('.container').hide();
        $('.footer').hide();
        $('.penalizeform').hide();
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
          setTimeout(async function(){
                    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
                    const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
                    const checkRes = await adminContract.methods.checkProducer(account).call()
                    var exists = checkRes
                    if (!exists) {
                            alert("Please log in with a Producer account to access this page");
                    }else{
                        var name = await adminContract.methods.getProducerName(account).call();
                        $('.accountaddress').html("Welcome, " + name[0]);
                            $('.loader').hide();
                            if (name[1]==0) {

                                    $('.container').show();
                                    $('.footer').show();
                                    ProApp.render();
                                }else{
                                    $('.penalizeform').show();
                                    alert("You are penalized");
                                }
                    }

        // web3.eth.getCoinbase(function(err, account){
        //     if(err===null){
        //         var acInstance;
        //         App.account = account;
        //         setTimeout(function(){
        //             const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        //             const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)

        //             App.contracts.AdminContract.deployed().then(function(i){
        //                 acInstance = i;
        //                 acInstance.checkProducer(App.account).then(function(exists){
        //                     if (!exists) {
        //                         alert("Please log in with a Producer account to access this page");
        //                     }else{
        //                         acInstance.getProducerName(App.account).then(function(data){
        //                             $('.accountaddress').html("Welcome, " + data[0]);
        //                             $('.loader').hide();

        //                             if (data[1]==0) {

        //                                 $('.container').show();
        //                                 $('.footer').show();
        //                                 ProApp.render();
        //                             }else{
        //                                 $('.penalizeform').show();
        //                                 alert("You are penalized");
        //                             }
        //                         });
        //                     }
        //                 });
        //             });
        //         }, 500);
        //     }
        // });
    },500)
    
    },
    render:async function () {
        var pInstance;
        var pid=0;
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        console.log(account)
        const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
        const pCount = await nodeContract.methods.getProductCount().call()
        console.log(pCount,"---")
        if(pCount){
            var productList=$('#productList');
            console.log(productList)
            productList.empty();
            pid=0;
            var productList=$('#productList');
            for(let i=0;i<pCount;i++){
                var current_product =await  nodeContract.methods.ProductList(i).call();
                var low = current_product[0].toLowerCase()
                if(account==low && current_product[5]==false && current_product[6]==false && current_product[1]== "0x0000000000000000000000000000000000000000" ){
                    var id=pid;
                    var name=current_product[3];
                    var type=current_product[4];
                    var productTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + type + "</td></tr>";
                    productList.append(productTemplate);
                }
                pid++;
             }

    }
        // App.contracts.NodeContract.deployed().then(function(instance) {
        //     pInstance=instance;
        //     return pInstance.getProductCount();
        // }).then(function(pCount) {
        //     var productList=$('#productList');
        //     productList.empty();

        //     for(let i=0;i<pCount;i++){
        //         pInstance.ProductList(i).then(function (singleProduct) {
        //             if (App.account==singleProduct[0] && singleProduct[5]==false && singleProduct[6]==false
        //                 && singleProduct[1]== "0x0000000000000000000000000000000000000000") {

        //                 var id=pid;
        //                 var name=singleProduct[3];
        //                 var type=singleProduct[4];
        //                 var productTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + type + "</td></tr>";
        //                 productList.append(productTemplate);
        //             }
        //             pid++;
        //         });
        //     }
        //     return pCount;
        // }).then(function (pCount) {
        //     var rid=0;
        //     var returnList=$('#returnedProductList');
        //     var flag = false;

        //     for(let i=0;i<pCount;i++){
        //         pInstance.ProductList(i).then(function (singleProduct) {
        //             if (App.account==singleProduct[0] && singleProduct[5]==true && singleProduct[6]==true && singleProduct[7]==0) {
        //                 if (flag == false) {
        //                     returnList.empty();
        //                     $('#returnProductButton').show();
        //                     flag = true;
        //                 }
        //                 var id=rid;
        //                 var name=singleProduct[3];
        //                 var type=singleProduct[4];
        //                 var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + type + "</td></tr>";
        //                 returnList.append(productTemplate);
        //             }
        //             rid++;
        //         });
        //     }
        // });
    },

    payPenalty:async function () {
        var acInstance;
        const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        var amount = adminContract.methods.getPenalizeAmount().call()
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        var receipt = await adminContract.methods.payPenalizeAmount().send({from: account, gas: 7920027})
         if (receipt!=undefined) {
            alert("Transaction Successful");
            $('.container').show();
            ProApp.render();
            $('.penalizeform').hide();
        }
        // App.contracts.AdminContract.deployed().then(function (instance) {
        //     acInstance=instance;
        //     acInstance.getPenalizeAmount(App.account).then(function (amount) {
        //         acInstance.payPenalizeAmount(App.account,{
        //             from:App.account,
        //             value:web3.toWei(amount,'ether')
        //         }).then(function (receipt) {
        //             if (receipt!=undefined) {
        //                 alert("Transaction Successful");
        //                 $('.container').show();
        //                 ProApp.render();
        //                 $('.penalizeform').hide();
        //             }
        //         });
        //     });
        // });
    }
}

$(document).ready(function(){
    ProApp.loadAddress();
});