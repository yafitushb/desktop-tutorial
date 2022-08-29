import React from 'react';
import { taskService } from '../../services/taskService';
import { useForm } from '../../services/generalService/customHooks';
import { useState } from 'react';
import { newTaskLabels } from '../../services/newTaskLabels';
import { newTask } from '../../services/newTask';

export const AddTask = () => {
    const [ taskDetails, handleChangeTaskDetails, setTaskDetails ] = useForm(
        taskService.getEmptyTask()
    );

    const addTask = () => {
        taskService.add(taskDetails)
    };

    //form
    return (
    <div className="addTask">
        <h4>Create New Task</h4>
        <div className="formTask">
            <form>
                    <input 
                        type="date" 
                        name="time"
                        value={taskDetails.time || ''}
                        onChange={handleChangeTaskDetails}
                        placeholder="Title"
                    />
                    <select name="priority" id="priority">
                        <option value="high">To Do</option>
                        <option value="medium">In Progress</option>
                        <option value="Low">Completed</option>
                    </select>  
                    <input 
                    className='descInput'
                        type="text" 
                        name="desc"
                        value={taskDetails.desc || ''}
                        onChange={handleChangeTaskDetails}
                        placeholder="Description"
                    />
                    <button 
                        className="sendTask" 
                        onClick={(ev) => {
                            addTask()
                            ev.preventDefault();
                        }} 
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
  );
};

