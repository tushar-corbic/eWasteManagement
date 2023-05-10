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
RecycApp={
	loadAddress:async function() {
  		$('.container').hide();
		const accounts = await window.ethereum.enable();
        const account = accounts[0];

		setTimeout(async function(){
 			const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
			var exists = await adminContract.methods.checkRecycleUnit(account).call();
			if (!exists) {
				alert("Please log in with a Recycling Unit account to access this page");
			}else{
				var pp = await adminContract.methods.getRecycleUnitName(account).call();
				$('.accountaddress').html("Welcome, " + accountName);
				$('.loader').hide();
				$('.container').show();
			}
		},500);
       



        // $('.container').hide();

        // web3.eth.getCoinbase(function(err, account){
        //     if(err===null){
        //         var acInstance;
        //         App.account = account;
        //         setTimeout(function(){
        //             App.contracts.AdminContract.deployed().then(function(i){
        //                 acInstance = i;
        //                 acInstance.checkRecycleUnit(App.account).then(function(exists){
        //                     if (!exists) {
        //                         alert("Please log in with a Recycling Unit account to access this page");
        //                     }else{
        //                         acInstance.getRecycleUnitName(App.account).then(function(accountName){
        //                             $('.accountaddress').html("Welcome, " + accountName);
        //                             $('.loader').hide();
        //                             $('.container').show();
        //                         });
        //                     }
        //                 });
        //             });
        //         }, 500);
        //     }
        // });
    },

    addPercentage:async function (argument) {
		var productid = $('#productid').val();
        var weightglass = $('#weightglass').val();
        var weightplastic = $('#weightplastic').val();
        var weightnickel = $('#weightnickel').val();
        var weightaluminium = $('#weightaluminium').val();
        var weightcopper = $('#weightcopper').val();
        var weightmagnesium = $('#weightmagnesium').val();
        var weightlead = $('#weightlead').val();
		if(productid!="" && weightglass!="" && weightnickel!="" && weightcopper!="" && weightmagnesium!="" && weightlead!=""){
        	const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
			var count = await nodeContract.methods.getProductCount().call();
			if(productid>count){
                alert("Enter Valid Product ID");
			}else{
				var singleProduct = await nodeContract.methods.ProductList(i).call();
				if(singleProduct[7]!=0){
					alert("Product already recycled");
				}else if(singleProduct[5]==false || singleProduct[6]==false ){
					alert("Enter Valid Product ID");
				}else{
					var singleWeight = await nodeContract.methods.weights(productid).call();
					if (parseInt(singleWeight[0])<parseInt(weightglass)) {
						alert("Reused weight of glass is greater than manufactured weight");
					}else if (parseInt(singleWeight[1])<parseInt(weightplastic)) {
						alert("Reused weight of plastic is greater than manufactured weight");
					}else if (parseInt(singleWeight[2])<parseInt(weightnickel)) {
						alert("Reused weight of nickel is greater than manufactured weight");
					}else if (parseInt(singleWeight[3])<parseInt(weightaluminium)) {
						alert("Reused weight of aluminium is greater than manufactured weight");
					}else if (parseInt(singleWeight[4])<parseInt(weightcopper)) {
						alert("Reused weight of copper is greater than manufactured weight");
					}else if (parseInt(singleWeight[5])<parseInt(weightmagnesium)) {
						alert("Reused weight of magnesium is greater than manufactured weight");
					}else if (parseInt(singleWeight[6])<parseInt(weightlead)) {
						alert("Reused weight of lead is greater than manufactured weight");
					}else{
						var totalweight=parseInt(singleWeight[0])+parseInt(singleWeight[1])+parseInt(singleWeight[2])+
						parseInt(singleWeight[3])+parseInt(singleWeight[4])+parseInt(singleWeight[5])+parseInt(singleWeight[6]);

						var totalReused=parseInt(weightglass)+parseInt(weightplastic)+parseInt(weightnickel)+parseInt(weightaluminium)+
						parseInt(weightcopper)+parseInt(weightmagnesium)+parseInt(weightlead);

						var reusedpercentage=(totalReused/totalweight)*100;
						reusedpercentage=Math.round(reusedpercentage);

						var proceed=confirm("Press OK to continue");
						if(proceed) {
							var amount = await nodeContract.methods.getValue(productid, reusedpercentage).call();
							var receipt = await nodeContract.methods.addPercentage(productid, reusedpercentage).send({from:account,gas:7920027})
							if(receipt!=undefined) {
								alert("Transaction successful");
							}
						}else{
							alert("User cancelled transaction");
						}
                	}
				}
			}
        }else{
        	alert("Fill Empty Fields");
        }





    // 	var pInstance;
    // 	var productid = $('#productid').val();
    //     var weightglass = $('#weightglass').val();
    //     var weightplastic = $('#weightplastic').val();
    //     var weightnickel = $('#weightnickel').val();
    //     var weightaluminium = $('#weightaluminium').val();
    //     var weightcopper = $('#weightcopper').val();
    //     var weightmagnesium = $('#weightmagnesium').val();
    //     var weightlead = $('#weightlead').val();

    //     if(productid!="" && weightglass!="" && weightnickel!="" && weightcopper!="" && weightmagnesium!="" && weightlead!=""){
    //             App.contracts.NodeContract.deployed().then(function (instance) {
    //             	pInstance=instance;
    //             	return instance.getProductCount();
    //             }).then(function (count) {
    //             	if (productid>count) {
    //             		alert("Enter Valid Product ID");
    //             	}else{
    //             		pInstance.ProductList(productid).then(function (singleProduct) {
    //             			if(singleProduct[7]!=0){
    //             				alert("Product already recycled");
    //             			}else if(singleProduct[5]==false || singleProduct[6]==false ){
    //             				alert("Enter Valid Product ID");
    //             			}else{
    //             				pInstance.weights(productid).then(function (singleWeight) {
    //             					if (parseInt(singleWeight[0])<parseInt(weightglass)) {
    //             						alert("Reused weight of glass is greater than manufactured weight");
    //             					}else if (parseInt(singleWeight[1])<parseInt(weightplastic)) {
    //             						alert("Reused weight of plastic is greater than manufactured weight");
    //             					}else if (parseInt(singleWeight[2])<parseInt(weightnickel)) {
    //             						alert("Reused weight of nickel is greater than manufactured weight");
    //             					}else if (parseInt(singleWeight[3])<parseInt(weightaluminium)) {
    //             						alert("Reused weight of aluminium is greater than manufactured weight");
    //             					}else if (parseInt(singleWeight[4])<parseInt(weightcopper)) {
    //             						alert("Reused weight of copper is greater than manufactured weight");
    //             					}else if (parseInt(singleWeight[5])<parseInt(weightmagnesium)) {
    //             						alert("Reused weight of magnesium is greater than manufactured weight");
    //             					}else if (parseInt(singleWeight[6])<parseInt(weightlead)) {
    //             						alert("Reused weight of lead is greater than manufactured weight");
    //             					}else{
    //             						var totalweight=parseInt(singleWeight[0])+parseInt(singleWeight[1])+parseInt(singleWeight[2])+
    //             						parseInt(singleWeight[3])+parseInt(singleWeight[4])+parseInt(singleWeight[5])+parseInt(singleWeight[6]);

    //             						var totalReused=parseInt(weightglass)+parseInt(weightplastic)+parseInt(weightnickel)+parseInt(weightaluminium)+
    //             						parseInt(weightcopper)+parseInt(weightmagnesium)+parseInt(weightlead);

    //             						var reusedpercentage=(totalReused/totalweight)*100;
    //             						reusedpercentage=Math.round(reusedpercentage);

	// 									var proceed=confirm("Press OK to continue");
	// 									if(proceed) {
	// 										pInstance.getValue(productid, reusedpercentage).then(function (amount) {
	// 											pInstance.addPercentage(productid, reusedpercentage, {
	// 												from: App.account,
	// 												value: amount
	// 											}).then(function(receipt){
	// 												if(receipt!=undefined) {
	// 													alert("Transaction successful");
	// 												}
	// 											})
	// 										});

	// 									}else{
	// 										alert("User cancelled transaction");
	// 									}
    //             					}
    //             				});
    //             			}
    //             		});
    //             	}
    //             });
    //     }else{
    //     	alert("Fill Empty Fields");
    //     }
    }
}

$(document).ready(function(){
    $(window).on('load', function(){
        RecycApp.loadAddress();
    });
});