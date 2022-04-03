import PropTypes from 'prop-types';

import CardHeader from '../card/CardHeader';
import CardHeaderContent from '../card/CardHeaderContent';
import CardBody from '../card/CardBody';
import CardBodyContent from '../card/CardBodyContent';

const Card = ({data:{TITLE,INITIAL_STATE}}) => {
    return ( 
        <div className="card">
            <div className="w-4/6 z-50 relative mx-auto mt-28">
                <CardHeader>
                    <CardHeaderContent title={TITLE}/>
                </CardHeader>
                <CardBody>
                    <CardBodyContent initial_state={INITIAL_STATE}/>
                </CardBody>
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.object
}

export default Card;