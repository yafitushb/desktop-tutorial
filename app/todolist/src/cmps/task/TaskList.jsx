import React, {useState, useEffect} from 'react';
import { taskService } from '../../services/taskService';
import { TaskPreview } from './TaskPreview';
export const TaskList = () => {
    const [filter, setFilter] = useState('');
    let tasksFilter = taskService.query();
    useEffect(()=> {
        tasksFilter = taskService.query(filter)
    }, [ filter ]);

    return (
        <div className="taskList">
            <div className="control">
                <input
                    type={"text"}
                    onchange={(ev) => { 
                        setFilter(ev.target.value); 
                    }}
                    value={filter ? filter : ''} 
                />
            </div>
            <div className="list">
                <div className="highList">
                    {tasksFilter && 
                        tasksFilter
                        .filter( task => task.priority == 1).
                        map( task => <TaskPreview key={task._id} task={task}/>)}
                </div>
            <div className="mediumList">
                    {tasksFilter && 
                        tasksFilter
                        .filter( task => task.priority == 2).
                        map( task => <TaskPreview key={task._id} task={task}/>)}                   
            </div>
            <div className="lowList"/>
                    {tasksFilter && 
                        tasksFilter
                        .filter( task => task.priority == 3).
                        map( task => <TaskPreview key={task._id} task={task}/>)}
            </div>
        </div>   
  );
};
