import AppDispatcher from 'AppDispatcher';
import AuctionConstants from 'constants/AuctionConstants';

let AuctionActions = {
    
    sortByCol: function(colIndex) {
        console.log("Sort Action");
        AppDispatcher.handleViewAction({
            actionType: AuctionConstants.SORT_BY_COL,
            index: colIndex
        });
    }
    
};

export default AuctionActions;
