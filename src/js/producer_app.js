
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
        var amount = await adminContract.methods.getPenalizeAmount().call()
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        var receipt = await adminContract.methods.payPenalizeAmount().send({from: account, value:amount,gas: 7920027})
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