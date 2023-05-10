
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
				$('.accountaddress').html("Welcome, " + pp);
				$('.loader').hide();
				$('.container').show();
			}
		},500);
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
			console.log("count of prducts",parseInt(count))
			console.log("productid",parseInt(productid));
			count = parseInt(count)
			productid =parseInt(productid)
			if(count<productid){
				// i change dthe logic here
                alert("Enter Valid Product ID--");
			}else{
				var singleProduct = await nodeContract.methods.ProductList(productid).call();
				console.log(singleProduct)

				if(singleProduct[7]=="0"){
					alert("Product already recycled");
				}else if(singleProduct[5]==true && singleProduct[6]==true ){

				// }else if(singleProduct[5]==true || singleProduct[6]==true ){
					// I change dthe logic here
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
							const accounts = await window.ethereum.enable();
        					const account = accounts[0];
							var amount = await nodeContract.methods.getValue(productid, reusedpercentage).call();
							var receipt = await nodeContract.methods.addPercentage(productid, reusedpercentage).send({from:account,value:amount,gas:7920027})
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

    }
}

$(document).ready(function(){
    $(window).on('load', function(){
        RecycApp.loadAddress();
    });
});