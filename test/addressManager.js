var AdminContract = artifacts.require('./AdminContract.sol');

contract("AdminContract", function(accounts){
    it("Number of producers is 3", function(){
        return AdminContract.deployed().then(function(i){
            i.addProducer('0x44171b5dd2885401b8bba8b752ab9c41e611e919', "Producer 1");
            i.addProducer('0x5136b7e5fecf13359e2052e09c9a6b11e1b3ad04', "Producer 2");
            i.addProducer('0xE5D942c2df02B1e20C298FB87eF52091484C0e27', "Producer 3");
            return i.getProducerCount();
        }).then(function(count){
            console.log(count.toNumber(), "---------------");
            assert.equal(count, 3);
        });
    });

    it("Initializes Producer with correct values", function(){
        return AdminContract.deployed().then(function(i){
            return i.producers(1).then(function(p){
                assert.equal(p.addr, '0xE5D942c2df02B1e20C298FB87eF52091484C0e27');
                assert.equal(p.name, 'Producer 3');
                assert.equal(p.ispresent, true);
            });
        });
    });
});
