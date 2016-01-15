// Globals
import React from 'react';

// Styles
import './listingRow.scss';

console.log('Loading Listing Row');

let ListingRow = React.createClass({
    render: function() {        
        return (
            <tr className="listing-row-l">
                <td>{this.props.data}</td>
            </tr>
        );
    }
});

export default ListingRow;
