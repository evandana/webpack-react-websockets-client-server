// Globals
import React from 'react';

// Styles
import './listingPage.scss';

// React Components
import ListingTable from 'components/listingTable/listingTable';

console.log('Loading Listing Page');

let ListingPage = React.createClass({
    render: function() {
        return (
            <div id="listing-page" className="listing-page-l">
                <ListingTable />
            </div>
        );
    }
});

export default ListingPage;
