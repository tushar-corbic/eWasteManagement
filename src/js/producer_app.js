
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

            var rid=0;
            var returnList=$('#returnedProductList');
            var flag = false;
             for(let i=0;i<pCount;i++){
                var current_product =await  nodeContract.methods.ProductList(i).call();
                var low = current_product[0].toLowerCase()
                 if(account==low && current_product[5]==true && current_product[6]==true && current_product[7]==0 ){
                    if (flag == false) {
                        returnList.empty();
                        $('#returnProductButton').show();
                        flag = true;
                    }
                    var id=rid;
                    var name=current_product[3];
                    var type=current_product[4];
                    var productTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + type + "</td></tr>";
                    returnList.append(productTemplate);
                }
                rid++;

             }

    }
    },

    payPenalty:async function () {
        var acInstance;
        const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        var amount = await adminContract.methods.getPenalizeAmount().call()
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        var receipt = await adminContract.methods.payPenalizeAmount().send({from: account, value:amount*1000000000000000000,gas: 7920027})
         if (receipt!=undefined) {
            alert("Transaction Successful");
            $('.container').show();
            ProApp.render();
            $('.penalizeform').hide();
        }
    }
}

$(document).ready(function(){
    ProApp.loadAddress();
});