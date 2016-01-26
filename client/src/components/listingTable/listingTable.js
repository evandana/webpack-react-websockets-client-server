import React from 'react';
// Application Comoponents
import AuctionActions from 'actions/AuctionActions';
// Styles
import './listingTable.scss';
// React Components
import ListingTableBody from 'components/listingTableBody/listingTableBody';
import ListingTableHead from 'components/listingTableHead/listingTableHead';


let ListingTable = {};

ListingTable = React.createClass({
    render: function() {
        
        return (
            <table id="listing-table" className="listing-table-l">
                <ListingTableHead headers={this.props.listingHeaders} />
                <ListingTableBody listings={this.props.listings} />
            </table>
        );
    },
});

export default ListingTable;
