import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = (props) => {
    return ( 
        <header className="card_header">
            {props.children}
        </header>
    );
}

CardHeader.propTypes = {
    value: PropTypes.object
}

export default React.memo(CardHeader);