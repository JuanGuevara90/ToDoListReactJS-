import PropTypes from 'prop-types';

import { TASK_OPERATIONS } from '../common/enums';
import { useTaskHook } from '../hooks/useTaskHook';

const Footer = ({onClickButtonDelete,tasks}) => {

    const {remainingTasks,completedAllTasks} = useTaskHook(tasks);
    return ( 
        <footer className="container mt-2 pl-10" >
            <button className="w-36 h-full mt-1 bg-teal-700 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-700 transition duration-300" type="button" onClick={() => onClickButtonDelete(null,TASK_OPERATIONS.removeAllItems)}>
                Clear all tasks
            </button>
            <span className="pl-2">The total number of tasks: {completedAllTasks} / Remaining tasks: {remainingTasks} / Completed tasks: {completedAllTasks-remainingTasks} </span>
        </footer>
    );
}

Footer.propTypes = {
    tasks: PropTypes.array,
    onClickButtonDelete: PropTypes.func
}

export default Footer;