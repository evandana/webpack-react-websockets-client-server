// Globals
import React from 'react';
// Styles
import './listingRow.scss';

let ListingRow = React.createClass({
    render: function() {        
        return (
            <tr className="listing-row-l">
                <td>{this.props.data.title}</td>
                <td>{this.props.data.highestBid}</td>
                <td>{this.props.data.status}</td>
                <td>{this.props.data.closeDate}</td>
            </tr>
        );
    }
});

export default ListingRow;
