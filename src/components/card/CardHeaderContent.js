import PropTypes from 'prop-types';

const CardHeaderContent = ({title}) => {
    return ( 
        <>
            <h1>{title}</h1>
        </>
    );
}

CardHeaderContent.propTypes = {
    title: PropTypes.string
}

export default CardHeaderContent;