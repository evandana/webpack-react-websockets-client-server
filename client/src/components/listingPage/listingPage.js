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
        return getAuctionState();
    },
    
    componentDidMount: function() {
        AuctionStore.addChangeListener(this.onChange);
    },

    render: function() {
        return (
            <div id="listing-page" className="listing-page-l">
                <ListingTable
                    listings={this.state.listings} 
                    listingHeaders={this.state.listingHeaders}
                />
            </div>
        );
    },
    
    onChange: function() {
        this.setState(getAuctionState());
    }
    
});

export default ListingPage;

function getAuctionState () {
    return {
        listings: AuctionStore.getAll(),
        listingHeaders: AuctionStore.getAllHeaders()
    };
}
