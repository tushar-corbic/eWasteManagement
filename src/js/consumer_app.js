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
ConApp={
	QuantityAvailable:null,
    frequency:{},

	loadAddress:async function() {
        $('.container').hide();

        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        setTimeout(async function(){
            const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
            var exists = await adminContract.methods.checkConsumer(account).call()
            if(!exists){
                  alert("Please log in with a Consumer account to access this page");
            }else{
                var name = await adminContract.methods.getConsumerName(account).call();
                $('.accountaddress').html("Welcome, " + accountName);
                $('.loader').hide();
                $('.container').show();
                ConApp.render();
            }
        }, 500);



        // $('.container').hide();
        // web3.eth.getCoinbase(function(err, account){
        //     if(err===null){
        //         var acInstance;
        //         App.account = account;
        //         setTimeout(function(){
        //             App.contracts.AdminContract.deployed().then(function(i){
        //                 acInstance = i;
        //                 acInstance.checkConsumer(App.account).then(function(exists){
        //                     if (!exists) {
        //                         alert("Please log in with a Consumer account to access this page");
        //                     }else{
        //                         acInstance.getConsumerName(App.account).then(function(accountName){
        //                             $('.accountaddress').html("Welcome, " + accountName);
        //                             $('.loader').hide();
        //                             $('.container').show();
        //                             ConApp.render();
        //                         });
        //                     }
        //                 });
        //             });
        //         }, 500);
        //     }
        // });
    },

    render:async function (argument) {
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        var retailerCount = await adminContract.methods.getRetailerCount().call();
        var retailerSelect = $('#retailerSelect');
        retailerSelect.empty();
        var producerOption = "<option value='" + null + "'disabled selected >" +"Select Retailer" + "</ option>"
        retailerSelect.append(producerOption);
        for (let i = 0; i < retailerCount; i++) {
            var singleProducer = await adminContract.methods.retailers(i).call();
            var name=singleProducer[2];
            var address=singleProducer[0];
            var producerOption = "<option value='" + address + "' >" + name + "</ option>"
            retailerSelect.append(producerOption);
        }

        var acInstance;
        var pAddress;
        var pInstance;

        const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
        var pCount = await nodeContract.methods.getProductCount().call();
        var productList=$('#productList');
        productList.empty();
        for(let i=0;i<pCount;i++){
            var singleProduct = await nodeContract.methods.ProductList(i).call();
            var low = singleProducer[2].toLowerCase();
             if (account==low && singleProduct[5]==false && singleProduct[6]==false) {
                    var id=pid;
                    var name=singleProduct[3];
                    var type=singleProduct[4];
                    var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + type + "</td></tr>";
                    productList.append(productTemplate);
                }
             pid++;
        }

        var rid=0;
        var returnList=$('#returnedProductList');
        returnList.empty();

        for(let i=0;i<pCount;i++){
            var singleProduct = await nodeContract.methods.ProductList(i).call();
            var low = singleProducer[2].toLowerCase();
             if (account==low && singleProduct[5]==true) {
                    var id=rid;
                    var name=singleProduct[3];
                    var type=singleProduct[4];
                    var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + type + "</td></tr>";
                    returnList.append(productTemplate);
                }
                rid++;
        }

        // App.contracts.AdminContract.deployed().then(function (instance) {
        //     acInstance=instance;
        //     return acInstance.getRetailerCount();
        // }).then(function (retailerCount) {
        //     var retailerSelect = $('#retailerSelect');
        //     retailerSelect.empty();
        //     var producerOption = "<option value='" + null + "'disabled selected >" +"Select Retailer" + "</ option>"
        //     retailerSelect.append(producerOption);

        //     for (let i = 0; i < retailerCount; i++) {
        //         acInstance.retailers(i).then(function (singleProducer) {
        //             var name=singleProducer[2];
        //             var address=singleProducer[0];
        //             var producerOption = "<option value='" + address + "' >" + name + "</ option>"
        //             retailerSelect.append(producerOption);
        //         });
        //     }
        // });

        // var pInstance;
        // var pid=0;
        // App.contracts.NodeContract.deployed().then(function(instance) {
        //     pInstance=instance;
        //     return pInstance.getProductCount();
        // }).then(function(pCount) {
        //     var productList=$('#productList');
        //     productList.empty();

        //     for(let i=0;i<pCount;i++){
        //         pInstance.ProductList(i).then(function (singleProduct) {
        //             if (App.account==singleProduct[2] && singleProduct[5]==false && singleProduct[6]==false) {
        //                 var id=pid;
        //                 var name=singleProduct[3];
        //                 var type=singleProduct[4];
        //                 var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + type + "</td></tr>";
        //                 productList.append(productTemplate);
        //             }
        //             pid++;
        //         });
        //     }
        //     return pCount;
        // }).then(function (pCount) {
        //     var rid=0;
        //     var returnList=$('#returnedProductList');
        //     returnList.empty();

        //     for(let i=0;i<pCount;i++){
        //         pInstance.ProductList(i).then(function (singleProduct) {
        //             if (App.account==singleProduct[2] && singleProduct[5]==true) {
        //                 var id=rid;
        //                 var name=singleProduct[3];
        //                 var type=singleProduct[4];
        //                 var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + type + "</td></tr>";
        //                 returnList.append(productTemplate);
        //             }
        //             rid++;
        //         })
        //     }
        // });
    },


    updateRetailer:async function() {
        const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
        var pCount = await nodeContract.methods.getProductCount().call();
        var rAddress=$('#retailerSelect').val();
        var pType=$('#productType').val();
        var nameSet=new Set();
        ConApp.frequency={};
        var productlistSelect = $('#productlistSelect');
        productlistSelect.empty();

        var producerOption = "<option value='" + null + "'disabled selected >" +"Select an option" + "</ option>"
        productlistSelect.append(producerOption);

        for (let i = 0; i <pCount; i++) {
            var singleProduct = await nodeContract.methods.ProductList(i).call();
            if(singleProduct[2]=="0x0000000000000000000000000000000000000000" && singleProduct[1]==rAddress && singleProduct[4]==pType){
                if(singleProduct[3] in ConApp.frequency){
                    ConApp.frequency[singleProduct[3]]+=1;
                }else{
                    ConApp.frequency[singleProduct[3]]=1;
                }
                nameSet.add(singleProduct[3]);
                var productlistSelect = $('#productlistSelect');
                productlistSelect.empty();

                function printOne(values) {
                    var productOption = "<option value='" + values + "' >" + values + "</ option>";
                    productlistSelect.append(productOption);
                }
                nameSet.forEach(printOne);
            }
           
        }
        setTimeout(function(){
            var type=$('#productlistSelect').val();
                if (ConApp.frequency[type]==undefined) {
                ConApp.QuantityAvailable=0;
                alert("Available Stock: 0");
                }else{
                ConApp.QuantityAvailable=ConApp.frequency[type];
                alert("Available Stock: "+ConApp.frequency[type]);
                }

        }, 500);



        // var pAddress;
        // var pInstance;
        // App.contracts.NodeContract.deployed().then(function(instance) {
        //     pInstance=instance;
        //     return pInstance.getProductCount();
        // }).then(function (pCount) {
        //     var rAddress=$('#retailerSelect').val();
        //     var pType=$('#productType').val();
        //     var nameSet=new Set();
        //     ConApp.frequency={};

        //     var productlistSelect = $('#productlistSelect');
        //     productlistSelect.empty();

        //     var producerOption = "<option value='" + null + "'disabled selected >" +"Select an option" + "</ option>"
        //     productlistSelect.append(producerOption);

        //     for (let i = 0; i <pCount; i++) {
        //         pInstance.ProductList(i).then(function(singleProduct) {
        //             if(singleProduct[2]=="0x0000000000000000000000000000000000000000" && singleProduct[1]==rAddress && singleProduct[4]==pType){
        //                 if(singleProduct[3] in ConApp.frequency){
        //                     ConApp.frequency[singleProduct[3]]+=1;
        //                 }else{
        //                     ConApp.frequency[singleProduct[3]]=1;
        //                 }
        //                 nameSet.add(singleProduct[3]);
        //                 var productlistSelect = $('#productlistSelect');
        //                 productlistSelect.empty();

        //                 function printOne(values) {
        //                     var productOption = "<option value='" + values + "' >" + values + "</ option>";
        //                     productlistSelect.append(productOption);
        //                 }
        //                 nameSet.forEach(printOne);
        //             }
        //         });
        //     }
        //     setTimeout(function(){
        //         var type=$('#productlistSelect').val();
        //          if (ConApp.frequency[type]==undefined) {
        //             ConApp.QuantityAvailable=0;
        //             alert("Available Stock: 0");
        //          }else{
        //             ConApp.QuantityAvailable=ConApp.frequency[type];
        //             alert("Available Stock: "+ConApp.frequency[type]);
        //          }

        //     }, 500);
        // })
    },

    updateCount:function () {
        var type=$('#productlistSelect').val();
        if (ConApp.frequency[type]==undefined) {
            alert("Available Stock: 0");
        }else{
            ConApp.QuantityAvailable=ConApp.frequency[type];
            alert("Available Stock: "+ConApp.frequency[type]);
        }
    },

    buyProduct:async function () {
        var rAddress=$('#retailerSelect').val();
        var pType=$('#productType').val();
        var productname = $('#productlistSelect').val();
        var quantity = $('#quantity').val();
        var pInstance;
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        if (rAddress!=null && pType!=null&& productlistSelect!=null && quantity!="") {
            if(quantity>ConApp.QuantityAvailable || quantity==0){
                alert("Enter Valid Quantity");
            }else{
                 const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
                 var amount = await nodeContract.methods.getCostForConsumer(rAddress,productname,pType,quantity);
                var proceed=confirm("Total Cost of product(s):"+amount+" ethers\nPress ok to continue");
                if(proceed){
                    var receipt = await nodeContract.methods.soldToConsumer(rAddress,productname,pType,quantity).send({from:account, gas: 7920027})
                    if(receipt!=undefined){
                        alert("Transaction successful");
                        ConApp.render();
                    }
                }
            }
        }else{
            alert("Fill empty fields");
        }






        // var rAddress=$('#retailerSelect').val();
        // var pType=$('#productType').val();
        // var productname = $('#productlistSelect').val();
        // var quantity = $('#quantity').val();
        // var pInstance;

        // if (rAddress!=null && pType!=null&& productlistSelect!=null && quantity!="") {
        //     if(quantity>ConApp.QuantityAvailable || quantity==0){
        //         alert("Enter Valid Quantity");
        //     }else{
        //         App.contracts.NodeContract.deployed().then(function (instance) {
        //             pInstance=instance;
        //             instance.getCostForConsumer(rAddress,productname,pType,quantity).then(function (amount) {
        //                 var proceed=confirm("Total Cost of product(s):"+amount+" ethers\nPress ok to continue");
        //                 if(proceed){
		// 					pInstance.soldToConsumer(rAddress,productname,pType,quantity, {
		// 						from: App.account,
		// 						value: web3.toWei(amount, 'ether')
		// 					}).then(function(receipt){
		// 						if(receipt!=undefined){
		// 							alert("Transaction successful");
		// 							ConApp.render();
		// 						}
		// 					});
        //                 }
        //             });
        //         });
        //     }
        // }else{
        //     alert("Fill empty fields");
        // }
    }
}

$(document).ready(function(){
    $(window).on('load', function(){
        ConApp.loadAddress();
    });
});