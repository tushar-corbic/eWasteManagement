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

function login(){
    switch ($('#accountType').val()) {
        case null:
            alert("Please select an option");
            $('#accountType').focus()
            break;
        case "Producer":
            loginProducer();
            break;
        case "Retailer":
            loginRetailer();
            break;
        case "Consumer":
            loginConsumer();
            break;
        case "RecyclingUnit":
            loginRecycleUnit();
            break;
        default:
            alert("There was an error completing the transaction");
    }
}
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
async function loginProducer(){
    var exists = false;
    var name = $('#name').val();
    var accountname = $("#accountAddress").val();
    console.log(accountname,"------------");
    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
    console.log(adminContract)
        const checkRes = await adminContract.methods.checkProducer(accountname).call()
        exists = checkRes
        if(exists){
            window.location="../ProducerProfile.html";
        }
        else{
            alert("Producer Does not exists");
        }
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
            alert("Retailer is already associated with this account");
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
async function loginRetailer(){
    var exists = false;
    var name = $('#name').val();
       var accountname = $("#accountAddress").val();
    console.log(accountname,"------------");
    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
    console.log(adminContract)
        const checkRes = await adminContract.methods.checkRetailer(accountname).call()
        exists = checkRes
        if(exists){
            window.location="../RetailerProfile.html";
            // location.replace("src\/RetailerProfile.html");
        }
        else{
            alert("Retailer Does not exists");
        }
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
            alert("Consumer is already associated with this account");
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
async function loginConsumer(){
    var exists = false;
    var name = $('#name').val();

       var accountname = $("#accountAddress").val();
    console.log(accountname,"------------");
    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
    console.log(adminContract)
        const checkRes = await adminContract.methods.checkConsumer(accountname).call()
        exists = checkRes
       if(exists){
        window.location="../ConsumerProfile.html"
            // location.replace("src\ConsumerProfile.html");
        }
        else{
            alert("Consumer Does not exists");
        }
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
            alert("RecyleUnit is already associated with this account");
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
async function loginRecycleUnit(){
    var exists = false;
    var name = $('#name').val();
       var accountname = $("#accountAddress").val();
    console.log(accountname,"------------");
    const adminContract = new web3.eth.Contract(ADMIN_CONTRACT_ABI, ADMIN_CONTRACT_ADDRESS)
    console.log(adminContract)
        const checkRes = await adminContract.methods.checkRecycleUnit(accountname).call()
        exists = checkRes
         if(exists){
            location.replace("src\RecyclingUnitProfile.html");
        }
        else{
            alert("Consumer Does not exists");
        }
}