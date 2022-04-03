import PropTypes from 'prop-types';

import DeleteIco from '../images/icons8-delete-100.png';
import { TASK_OPERATIONS } from '../common/enums';

const ListTasks = ({tasks,onSelectedTask}) => {

    const handleClickTaskDone = ({target:{innerHTML}}) => onSelectedTask({name:innerHTML,done:true},TASK_OPERATIONS.change);
    const handleClickDeleteTask = ({target:{alt}}) => onSelectedTask({name:alt,done:true},TASK_OPERATIONS.removeByItem);

    return ( 
        <div  className="list">
            {tasks.map((task,index) =>{
                return(
                    <div key={`tk_${index}`} className="list_item">
                            <span className={`w-full p-3 ${task.done ?"line-through" :"no-underline"} rounded-lg cursor-pointer `}  onClick={handleClickTaskDone} >
                                {task.name}
                            </span>
                            <button onClick={handleClickDeleteTask} ><img className="w-16 h-16" src={DeleteIco} alt={task.name}/></button>
                            <br></br>
                    </div>
                );
                }
            )}
        </div>
    );
}

ListTasks.propTypes = {
    tasks: PropTypes.array,
    onSelectedTask: PropTypes.func
}

export default ListTasks;