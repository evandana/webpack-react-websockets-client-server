import Promise from 'bluebird';

let auctions = {},
    auctionJSON = require("json!../stubs/auctions/auctions.json");

auctions.getAll = function getAllAuctions() {

    return new Promise(function(resolve){
        resolve(auctionJSON);
    });

}

export default auctions;
