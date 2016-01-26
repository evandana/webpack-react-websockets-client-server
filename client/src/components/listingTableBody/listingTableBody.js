import React from 'react';
import './listingTableBody.scss';
// React Components
import ListingRow from 'components/listingRow/listingRow';

let ListingTableBody = {};

ListingTableBody = React.createClass({
    render: function() {

        return (
            <tbody>{
                this.props.listings.map( (obj, index) => <ListingRow key={index} data={obj} /> )
            }</tbody>
        ); 
        
    },

});

export default ListingTableBody;
