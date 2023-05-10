
adminApp={
    idList:[],
	loadAddress:async function () {
        const accounts = await window.ethereum.enable();
        const account = accounts[0];

        setTimeout(function(){
        const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        const adminaddress =  adminContract.owner().call();
        if(adminaddress==account){
            $('.adminaddress').html("Account Address: " + adminaddress);
            adminApp.render();
        }else{
            $('.container').hide();
            alert("You are not admin");
        }
    }, 500);
        // web3.eth.getCoinbase(function(err, account){
    },
    render:async function () {

        $('#chart').hide();
        $('.list-content').hide();
        $('.form-div2').hide();
        const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
        var producerCount = await adminContract.methods.getProducerCount().call();
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
    },


    displayData:async function () {
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
            const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
            var productCount = await nodeContract.methods.getProductCount().call();
            var productList=$('#productList');
            productList.empty();
             for (var i = 0; i < productCount; i++) {
                var singleProduct = await nodeContract.methods.ProductList(i).call();
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
                if (singleProduct[5]==true && singleProduct[6]==true &&
                    singleProduct[0]==producerSelect && singleProduct[7]!=0) {

                    var rPercentage=singleProduct[7];
                    reusedPercentages.push(parseInt(rPercentage));
                }
                pid++;

            }

            setTimeout(function () {
                var productTemplate = "<tr><td>"  + "</td><td>" + "Average Percentage" + "</td><td>" + "</td><td>" + (sumValue/count) + "</td></tr>";
                productList.append(productTemplate);
            },200);

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

    assessment:async function () {
        var producerSelect = $('#producerSelect').val();
        var performanceType = $('#performanceType').val();
        var amount = $('#amount').val();
        if (performanceType=="Incentive") {
            const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
            var result = nodeContract.methods.sendIncentives(adminApp.idList,producerSelect).send({from:account, gas: 7920027})
            if(result!=undefined){
                alert("Transaction successful");
                adminApp.render();
            }
        }else{
            const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
            var result = await adminContract.methods.addPenalizeAmount(amount,producerSelect).call();
            if(result!=undefined){
                const nodeContract = new web3.eth.Contract(Node_CONTRACT_ABI, Node_CONTRACT_ADDRESS)
               var rr = await nodeContract.methods.penalizeProducer(adminApp.idList, producerSelect).call();
               if(rr!=undefined){
                 alert("Transaction successful");
                 adminApp.render();
               }
            }
        }
    }


}

$(document).ready(function(){
    $(window).on('load', function(){
        adminApp.loadAddress();
    });
});