// Globals
import React from 'react';
// Styles
import './listingPage.scss';
// Stores
import AuctionStore from 'stores/AuctionStore';

// React Components
import ListingTable from 'components/listingTable/listingTable';

let ListingPage = React.createClass({
    
    getInitialState : function () {
        return {
            allAuctions: AuctionStore.getAll()
        };
    },
    
    render: function() {
        return (
            <div id="listing-page" className="listing-page-l">
                <ListingTable allAuctions={this.state.allAuctions} />
            </div>
        );
    }
});

export default ListingPage;
