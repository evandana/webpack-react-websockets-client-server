import AppDispatcher from 'AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';

let _auctions = [],
    AuctionStore = {};

// stub the auction data
_auctions = require("json!../stubs/auctions/auctions.json");

AuctionStore = assign({}, EventEmitter.prototype, {
    getAll : () => _auctions,
    
    sortByCol : (colIndex) => sortByColumn(colIndex),
    
    dispatcherIndex: AppDispatcher.register( function(index) {
        
        console.log("caught the event", index);

        //return true;
    })
});

export default AuctionStore;

function sortByColumn(key) {
    return _auctions.sort( (a,b) => a[key] > b[key] );
}
