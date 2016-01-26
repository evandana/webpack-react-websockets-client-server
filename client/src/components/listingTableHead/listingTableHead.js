import React from 'react';
import './listingTableHead.scss';
// Application Comoponents
import AuctionActions from 'actions/AuctionActions';

let ListingTableHead = {},
    sortOrder = 'ascend';

ListingTableHead = React.createClass({
    render: function() {
        
        return (
            <thead>
                <tr>{
                    this.props.headers.map( (obj, index) => 
                        <th key={index}>
                            <span onClick={this.sortByCol.bind(this, obj.key)}>{obj.copy}</span>
                        </th> 
                    )
                }</tr>
            </thead>
        );
    },
    
    sortByCol: function(key) {
        AuctionActions.sortByCol(key, curOrder);
        sortOrder = sortOrder === 'ascend' ? 'descend' : 'ascend';
    }
    
});

export default ListingTableHead;
