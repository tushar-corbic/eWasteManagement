
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
                $('.accountaddress').html("Welcome, " + name);
                $('.loader').hide();
                $('.container').show();
                ConApp.render();
            }
        }, 500);
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
        var pid=0;

        const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
        var pCount = await nodeContract.methods.getProductCount().call();
        console.log(pCount, "thisis count of proeducr")
        var productList=$('#productList');
        productList.empty();
        for(let i=0;i<pCount;i++){
            var singleProduct = await nodeContract.methods.ProductList(i).call();
            var low = singleProduct[2].toLowerCase();
            
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
                // console.log(quantity, ConApp.QuantityAvailable)
                alert("Enter Valid Quantity");
            }else{
                 const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
                 var amount = await nodeContract.methods.getCostForConsumer(rAddress,productname,pType,quantity);
                //  console.log("amount", amount)
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

    }
}

$(document).ready(function(){
    $(window).on('load', function(){
        ConApp.loadAddress();
    });
});