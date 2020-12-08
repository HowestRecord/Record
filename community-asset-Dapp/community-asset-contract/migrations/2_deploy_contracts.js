const Record = artifacts.require("Record");

module.exports = function (deployer) {
  var uri = "www.url{id}.be";
  deployer.deploy(Record, uri);
};
