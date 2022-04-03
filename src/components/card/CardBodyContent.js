import PropTypes from 'prop-types';

import {useCardHook} from '../../hooks/useCardHook';

import Form from '../Form';
import ListTasks from '../ListTasks';
import Footer from '../Footer';

const CardBodyContent = ({initial_state}) => {
    
    const {tasks,handleTaskChange} = useCardHook(initial_state);
    return ( 
        <>
            <Form onSubmit={handleTaskChange} /> 
            <ListTasks tasks={tasks} onSelectedTask={handleTaskChange}/>      
            <Footer tasks={tasks} onClickButtonDelete={handleTaskChange} />
        </>
    );
}

CardBodyContent.propTypes = {
    initial_state: PropTypes.array
}

export default CardBodyContent;

