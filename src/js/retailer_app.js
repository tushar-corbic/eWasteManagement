RecApp={
    QuantityAvailable:null,
    frequency:{},
    returnProductIDs: new Set(),

    loadAddress:async function (argument) {
        $('.container').hide();
        $('.footer').hide();
        $('.penalizeform').hide();
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
          setTimeout(async function(){
                    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
                    const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
                    const checkRes = await adminContract.methods.checkRetailer(account).call()
                    var exists = checkRes
                    if (!exists) {
                            alert("Please log in with a Producer account to access this page");
                    }else{
                        var name = await adminContract.methods.getRetailerName(account).call();
                        $('.accountaddress').html("Welcome, " + name);
                        $('.loader').hide();
                        $('.container').show();
                        RecApp.render();
                    }
    },500)
    
        // $('.container').hide();
        // web3.eth.getCoinbase(function(err, account){
        //     if(err===null){
        //         var acInstance;
        //         App.account = account;
        //         setTimeout(function(){
        //             App.contracts.AdminContract.deployed().then(function(i){
        //                 acInstance = i;
        //                 acInstance.checkRetailer(App.account).then(function(exists){
        //                     if (!exists) {
        //                         alert("Please log in with a Retailer account to access this page");
        //                     }else{
        //                         acInstance.getRetailerName(App.account).then(function(accountName){
        //                             $('.accountaddress').html("Welcome, " + accountName);
        //                             $('.loader').hide();
        //                             $('.container').show();
        //                             RecApp.render();
        //                         })
        //                     }
        //                 })
        //             });
        //         }, 500);
        //     }
        // });
    },



    render:async function (argument) {

        
        const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
        var producerCount =  await adminContract.methods.getProducerCount().call();
        var producerSelect = $('#producerSelect');
        producerSelect.empty();
        var producerOption = "<option value='" + null + "'disabled selected >" +"Select Producer" + "</ option>"
        producerSelect.append(producerOption);
        for (let i = 0; i < producerCount; i++) {
            var singleProducer = await adminContract.methods.producers(i).call();
            var name=singleProducer[2];
            var address=singleProducer[0];
            var producerOption = "<option value='" + address + "' >" + name + "</ option>"
            producerSelect.append(producerOption);
        }

        var pid=0;

        var pCount = await nodeContract.methods.getProductCount().call();
        var productList=$('#productList');
        console.log(productList, "thisis list")
        productList.empty();
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        for(let i=0;i<pCount;i++){
            var singleProduct = await nodeContract.methods.ProductList(i).call();
            // console.log(singleProducer[0])
           
            var low = singleProduct[0].toLowerCase();
            // console.log(low,account, "-----")
            // console.log(singleProduct, account)
            // console.log()
            if (account==low && singleProduct[5]==false && singleProduct[6]==false
                && singleProduct[2]== "0x0000000000000000000000000000000000000000") {
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
        var flag = false;

        for(let i=0;i<pCount;i++){
            var singleProduct = await nodeContract.methods.ProductList(i).call();
            var low = singleProducer[0].toLowerCase();
            console.log(account , low, "-----")
            if (account==low && singleProduct[5]==true && singleProduct[6]==false) {
                if (flag == false) {
                    returnList.empty();
                    $('#returnProductsButton').show();
                    flag = true;
                }
                var id=rid;
                RecApp.returnProductIDs.add(id);    //used set to avoid duplication because render is called multiple times
                var name=singleProduct[3];
                var type=singleProduct[4];
                var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + type + "</td></tr>";
                returnList.append(productTemplate);
            }
            rid++;
        }
    },





    buyProduct:async function () {
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)

        var pAddress=$('#producerSelect').val();
        var pType=$('#productType').val();
        var productname = $('#productlistSelect').val();
        var quantity = $('#quantity').val();
        var pInstance;
        if (pAddress!=null && pType!=null && productlistSelect!=null && quantity!="") {
            if(quantity>RecApp.QuantityAvailable || quantity==0){
                alert("Enter Valid Quantity");
            }else{
                var amount = await nodeContract.methods.getCostForRetailer(pAddress,productname,pType,quantity).call();
                console.log("the amount", amount)
                var proceed=confirm("Total Cost of product(s):"+amount+" ethers\nPress ok to continue");
                if(proceed){
                    var result =  await nodeContract.methods.soldToRetailer(pAddress,productname,pType,quantity).send({from: account,value:amount, gas: 7920027})
                    console.log(amount,"-------")
                    console.log(result)
                    if(result!=undefined){
                        alert("Transaction successful");
                                    RecApp.render();
                    }
                }else{
                    alert("User cancelled transaction");
                }
            }
        }else{
            alert("Fill empty fields");
        }
    },






    updateProducer:async function() {

        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)

        var pCount = await nodeContract.methods.getProductCount().call();
        var pAddress=$('#producerSelect').val();
        var pType=$('#productType').val();
        // var pName=$('#productlistSelect').val();
        var nameSet=new Set();
        RecApp.frequency={};

        var productlistSelect = $('#productlistSelect');
        productlistSelect.empty();

        var producerOption = "<option value='" + null + "'disabled selected >" +"Select an option" + "</ option>"
        productlistSelect.append(producerOption);


        for (let i = 0; i <pCount; i++) {
            var singleProduct = await nodeContract.methods.ProductList(i).call();
            if(singleProduct[1]=="0x0000000000000000000000000000000000000000" && singleProduct[0]==pAddress && singleProduct[4]==pType){
                    if(singleProduct[3] in RecApp.frequency){
                        RecApp.frequency[singleProduct[3]]+=1;
                    }else{
                        RecApp.frequency[singleProduct[3]]=1;
                    }
                    nameSet.add(singleProduct[3]);
                    productlistSelect.empty();
                    function printOne(values) {
                        var productOption = "<option value='" + values + "' >" + values + "</ option>";
                        productlistSelect.append(productOption);
                        }
                    nameSet.forEach(printOne);
                }
           
            }
        setTimeout(function(){
            var pName=$('#productlistSelect').val();
                if (RecApp.frequency[pName]==undefined) {
                    RecApp.QuantityAvailable=0;
                    alert("Available Stock: 0");
                        // TODO: field showinng available stock wherever applicable instead of alert
                }else{
                    RecApp.QuantityAvailable=RecApp.frequency[pName];
                    alert("Available Stock: "+RecApp.frequency[pName]);
                }
            }, 1000);

    },

    updateCount:function () {
        var type=$('#productlistSelect').val();
        if (RecApp.frequency[type]==undefined) {
            alert("Available Stock: 0");
            // TODO: field showinng available stock wherever applicable instead of alert
        }else{
            RecApp.QuantityAvailable=RecApp.frequency[type];
            alert("Available Stock: "+RecApp.frequency[type]);
        }
    },





    addReturnProduct:async function() {
        var productid=$('#productid').val();
        var percent=$('#percent').val();
        var pInstance;
        if (productid!="") {
            const accounts = await window.ethereum.enable();
            const account = accounts[0];
            const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
            const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
            var count = await nodeContract.methods.getProductCount().call();
            if(count<productid){
                    alert("Enter Valid Product Id");
            }
            else{
                var singleProduct = await nodeContract.methods.ProductList(productid)
                if(account==singleProduct[1] && singleProduct[5]==false && singleProduct[6]==false && singleProduct[2]!="0x0000000000000000000000000000000000000000"){
                     var amount=(singleProduct[8]*percent)/100;
                     var result = await nodeContract.methods.addReturnProductToRetailer(productid,singleProduct[2], percent).send({from: account, gas: 7920027})
                     if (result){
                         alert("Transaction successful");
                         RecApp.render();
                     }
                }else{
                     alert("Enter Valid Product Id");
                }
                   
            }
        }
    }
    ,




    returnToProducer: async function(){
        const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
        var ids = []
        RecApp.returnProductIDs.forEach((item) => {
                ids.push(item);
        });
        await nodeContract.methods.addReturnProducts(ids).call()
        RecApp.returnProductIDs.clear();
        RecApp.render();
    }
}



$(document).ready(function(){
    $(window).on('load', function(){
        RecApp.loadAddress();
    });
});