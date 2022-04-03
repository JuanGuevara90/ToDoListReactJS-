import {useState} from 'react';
import { TASK_OPERATIONS } from '../common/enums';
import { isEqual } from '../common/strings';

export const useCardHook = (initial_state) => {
    const [tasks, setTasks] = useState(initial_state);
    
    const handleTaskChange = (task, operation) => {
        if (isEqual(operation, TASK_OPERATIONS.add)) {
            setTasks([...tasks,{name:task,done:false}]);
            return;
        }
        if (isEqual(operation, TASK_OPERATIONS.removeByItem)) {
            let arrayTasksDeleted = tasks.filter((element) => element.name !== task.name );
            setTasks(arrayTasksDeleted);
            return;
        }
        if (isEqual(operation, TASK_OPERATIONS.change)) {
            let arrayTasksDone = tasks.map(element => {
                if(element.name === task.name){
                    return {...element,done:!element.done};
                }
                return element;
            });
            setTasks(arrayTasksDone);
            return;
        }
        setTasks([]);
    }
    return {tasks,handleTaskChange};
}

