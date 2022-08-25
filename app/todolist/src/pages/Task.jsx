import React from 'react'
import { TaskList } from '../cmps/task/TaskList'
import { AddTask } from '../cmps/task/AddTask'
import { DoneList } from '../cmps/task/DoneList'

export const Task = () => {
  return (
    <div className="task">
      <AddTask/>
      <TaskList/>
      <doneTask/>
  
      
    </div>
  );
}