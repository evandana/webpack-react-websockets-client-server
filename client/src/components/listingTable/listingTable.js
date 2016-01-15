// Globals
import React from 'react';

// Styles
import './listingTable.scss';

// React Components
import ListingRow from 'components/listingRow/listingRow';

console.log('Loading Listing Row');

let ListingTable = React.createClass({
    render: function() {
        
        const stubData = [
            'Test One',
            'Test Two',
            'Test Three'
        ];
        
        return (
            <table id="listing-table" className="listing-table-l">
                <thead><tr>
                    <td>Sample Header</td>
                </tr></thead>
                <tbody>{
                    stubData.map( (name, index) => <ListingRow key={index} data={name} /> )
                }</tbody>
            </table>
        );
    }
});

export default ListingTable;
