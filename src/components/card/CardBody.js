import PropTypes from 'prop-types';
const CardBody = (props) => {
    return (  
        <div className="card_body">
            {props.children}
        </div>
    );
}

CardBody.propTypes = {
    props: PropTypes.object
}

export default CardBody;
