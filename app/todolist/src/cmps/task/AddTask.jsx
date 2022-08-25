import React from 'react';
import  taskService  from '../../services/taskService';
import { useForm } from '../../services/generalService/customHooks';

export const AddTask = () => {
    const [ taskDetails, handleChangeTaskDetails, setTaskDetails ] = useForm(taskService.getEmptyTask()
    );
    const addTask = () => {
        taskService.add(taskDetails)
    };

    //form
    return (
    <div className="addTask">
        <h4>Add Task</h4>
        <div className="formTask">
            <form>
                    <input 
                        type="date" 
                        name="time"
                        value={taskDetails.time || ''}
                        onChange={handleChangeCustomerDetails}
                        placeholder="Title"
                    />
                    <select name="priority" id="priority">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <input 
                    className='descInput'
                        type="text" 
                        name="desc"
                        value={taskDetails.desc || ''}
                        onChange={handleChangeCustomerDetails}
                        placeholder="Please insert Description"
                    />
                    <button 
                        className="sendTask" 
                        onClick={(ev) => {
                            addTask()
                            ev.preventDefault();
                        }} 
                    >
                        שלח
                    </button>
                </form>
            </div>
        </div>
  );
};
