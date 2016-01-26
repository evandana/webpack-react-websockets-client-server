import AppDispatcher from 'AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import AuctionConstants from 'constants/AuctionConstants';

let _auctions = [],
    _auctionHeaders = [],
    AuctionStore = {},
    changeEvent = 'change';

// stub the auction data
_auctions = require("json!../stubs/auctions/auctions.json");

_auctionHeaders = getAuctionHeaders();

AuctionStore = assign({}, EventEmitter.prototype, {
    
    getAll : () => _auctions,
    
    getAllHeaders : () => _auctionHeaders,

    emitChange : () => { AuctionStore.emit(changeEvent); },

    addChangeListener : (callback) => { AuctionStore.on(changeEvent, callback); },
    
    sortByCol : (colIndex) => sortByColumn(colIndex),
    
    dispatcherIndex: AppDispatcher.register( function(dispatch) {
        let actionType = dispatch.action.actionType;
        
        switch(actionType) {
            case AuctionConstants.SORT_BY_COL:
                _auctions = sortByColumn(_auctions, dispatch.action.key, dispatch.action.order);
                AuctionStore.emitChange();
            default:
                return true;
        }

        //return true;
    })
});

export default AuctionStore;

// return copy of list sorted by shallow object key
function sortByColumn(list, key, direction) {
    let cloneArray = list.slice(0),
        directionMap = {
            descend : [1, -1, 0],
            ascend : [-1, 1, 0]
        },
        sortValues = direction === 'descend' ?
            directionMap.descend : directionMap.ascend;

    return cloneArray.sort( (a,b) => {
        if (a[key] < b[key]) {
            return sortValues[0];
        } else if (a[key] > b[key]) {
            return sortValues[1];
        } else {
            return sortValues[2];
        }
    });
}

function getAuctionHeaders() {
    return [
        {
            copy: 'Auction Item',
            key: 'title'
        },
        {
            copy: 'Highest Bid',
            key: 'highestBid'
        },
        {
            copy: 'Status',
            key: 'status'
        },
        {
            copy: 'Close Date',
            key: 'closeDate'
        }
    ];
}
