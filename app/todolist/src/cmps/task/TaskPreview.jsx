import React from 'react'
import { taskService } from '../../services/taskService';

export const TaskPreview = ({task}) => {
  const doneTask = ()=>{
    task.isDone= true;
    taskService.update(task);
  }
  return (
    <div className={`taskPreview prev${task.priority}`}>
      <div className="leftCard">
        <h4> {task.title}</h4>
        <h4>{task.data}</h4>
      </div>
      <div className="rightCard">
        <p>{task.desc}</p>
        <button onClick={()=> {doneTask()}}>Done</button>
    </div>
  </div>
  )
}
