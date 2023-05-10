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
adminApp={
    idList:[],
	loadAddress:function () {
        web3.eth.getCoinbase(function(err, account){
            if(err===null){
                var acInstance;
                App.account = account;
                setTimeout(function(){
                    App.contracts.AdminContract.deployed().then(function(i){
                        acInstance = i;
                        return acInstance.owner();
                    }).then(function (adminAddress) {
                    	if(adminAddress==App.account){
                    		$('.adminaddress').html("Account Address: " + adminAddress);
                            adminApp.render();
                    	}else{
                            $('.container').hide();
                    		alert("You are not admin");
                    	}
                    })
                }, 500);
            }
        });
    },
    render:function () {

        $('#chart').hide();
        $('.list-content').hide();
        $('.form-div2').hide();
        var acInstance;
        var pAddress;

        App.contracts.AdminContract.deployed().then(function (instance) {
            acInstance=instance;
            return acInstance.getProducerCount();
        }).then(function (producerCount) {
            var producerSelect = $('#producerSelect');
            producerSelect.empty();
            var producerOption = "<option value='" + null + "'disabled selected >" +"Select Producer" + "</ option>"
            producerSelect.append(producerOption);

            for (let i = 0; i < producerCount; i++) {
                acInstance.producers(i).then(function (singleProducer) {
                    var name=singleProducer[2];
                    var address=singleProducer[0];
                    var producerOption = "<option value='" + address + "' >" + name + "</ option>"
                    producerSelect.append(producerOption);
                });
            }
        });
    },
    displayData:function () {



        var producerSelect = $('#producerSelect').val();

        if (producerSelect!=null) {

            adminApp.idList=[];
            var pInstance;
            reusedPercentages=[0];
            $('#chart').show();
            $('.list-content').show();
            $('.form-div2').show();

            var pid=0;
            var count=0;
            var sumValue=0;

            App.contracts.NodeContract.deployed().then(function (instance) {
                pInstance=instance;
                pInstance.getProductCount().then(function (productCount) {
                var productList=$('#productList');
                productList.empty();

                for (var i = 0; i < productCount; i++) {
                    pInstance.ProductList(i).then(function (singleProduct) {

                        //for table
                        if (singleProduct[5]==true && singleProduct[6]==true && singleProduct[10]==false
                            && singleProduct[0]==producerSelect && singleProduct[7]!=0) {

                            var id=pid;
                            var name=singleProduct[3];
                            var type=singleProduct[4];
                            var rPercentage=singleProduct[7];

                            count++;
                            sumValue=sumValue+parseInt(rPercentage);
                            adminApp.idList.push(id);

                            var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + type + "</td><td>" + rPercentage + "</td></tr>";
                            productList.append(productTemplate);
                        }

                        //for graph
                        if (singleProduct[5]==true && singleProduct[6]==true &&
                            singleProduct[0]==producerSelect && singleProduct[7]!=0) {

                            var rPercentage=singleProduct[7];
                            reusedPercentages.push(parseInt(rPercentage));
                        }

                        pid++;
                    });
                }

                setTimeout(function () {
                    var productTemplate = "<tr><td>"  + "</td><td>" + "Average Percentage" + "</td><td>" + "</td><td>" + (sumValue/count) + "</td></tr>";
                    productList.append(productTemplate);
                },200);

                })
            })

            console.log("r percent",reusedPercentages);

            setTimeout(function () {
                //for graph
                var layout={
                    title:'Graph',
                    xaxis:{title:'Products',zeroline:true},
                    yaxis:{title:'Reused Percentage'}
                }


                Plotly.newPlot('chart',
                            [{
                                y:reusedPercentages,
                                type:'line'
                            }],
                            layout);
            },500);
        }else{
            alert("Select a producer");
        }
    },

    assessment:function () {
        var producerSelect = $('#producerSelect').val();
        var performanceType = $('#performanceType').val();
        var amount = $('#amount').val();

        if (performanceType=="Incentive") {
            App.contracts.NodeContract.deployed().then(function (instance) {
                instance.sendIncentives(adminApp.idList,producerSelect,{
                    from:App.account,
                    value:web3.toWei(amount,'ether')
                }).then(function (receipt) {
                    if (receipt!=undefined) {
                        alert("Transaction successful");
                        adminApp.render();
                    }
                })
            })
        }else{
            App.contracts.AdminContract.deployed().then(function (instance) {
                instance.addPenalizeAmount(amount,producerSelect).then(function (receipt) {
                    if (receipt!=undefined) {
                        App.contracts.NodeContract.deployed().then(function (instance) {
                            instance.penalizeProducer(adminApp.idList,producerSelect).then(function (receipt) {
                                if (receipt!=undefined) {
                                    alert("Transaction successful");
                                    adminApp.render();
                                }
                            })
                        })
                    }
                })
            })

        }
    }


}

$(document).ready(function(){
    $(window).on('load', function(){
        adminApp.loadAddress();
    });
});