var AdminContract = artifacts.require("./AdminContract.sol");
var NodeContract = artifacts.require("./NodeContract.sol");

module.exports =  function(deployer) {
     deployer.deploy(AdminContract);
     deployer.deploy(NodeContract);
};
