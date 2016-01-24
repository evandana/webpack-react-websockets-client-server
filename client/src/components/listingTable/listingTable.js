import React from 'react';
// Application Comoponents
import AuctionActions from 'actions/AuctionActions';
// Styles
import './listingTable.scss';
// React Components
import ListingRow from 'components/listingRow/listingRow';

const headers = [
    'Auction Item',
    'Highest Bid',
    'Status',
    'Close Date'
],
    columnKeys = [
        'title',
        'highestBid',
        'status',
        'closeDate'
    ]

let ListingTable = {};

ListingTable = React.createClass({
    render: function() {
        
        return (
            <table id="listing-table" className="listing-table-l">
                <thead><tr>{
                    headers.map( (title, index) => <th key={index}>
                        <span onClick={this.sortByCol.bind(this, index)}>{title}</span>
                    </th> )
                }</tr></thead>
                <tbody>{
                    this.props.allAuctions.map( (obj, index) => <ListingRow key={index} data={obj} /> )
                }</tbody>
            </table>
        );
    },
    
    sortByCol: function(index) {
        AuctionActions.sortByCol(columnKeys[index]);
    }
    
});

export default ListingTable;
