import AppDispatcher from 'AppDispatcher';
import AuctionConstants from 'constants/AuctionConstants';

let AuctionActions = {
    
    sortByCol: function(key, order) {
        AppDispatcher.handleViewAction({
            actionType: AuctionConstants.SORT_BY_COL,
            key: key,
            order: order
        });
    }
    
};

export default AuctionActions;
