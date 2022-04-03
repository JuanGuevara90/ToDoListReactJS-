export const useTaskHook = (tasks) => {
    const remainingTasks = tasks.filter(task => task.done===false).length; 
    const completedAllTasks = tasks.length;
    return {remainingTasks,completedAllTasks};
}

