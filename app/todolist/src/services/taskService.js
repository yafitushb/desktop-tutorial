import { Task } from "../data/dummyData";
import { storageService } from "./generalService/storageService"

export const taskService = {
    query,
    add,
    getById,
    remove,
    update
}

const entityType = "task";

// _id : "t0001",
// title: "Plan tactic to players",
// desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui aperiam maxime hic fugiat a magnam, corrupti neque iusto tenetur nesciunt impedit sit nisi quam reprehenderit cum distinctio optio Dolor",
// time : new Date(),
// priority: 3,
// done : false
function getEmptyTask (){
    return {
        title: '',
        desc: '',
        time: new Date(),
        priority: 1,
        isDone: false
    }
}
function query(filter = null) {
    let tasks = storageService.query(entityType);
    if (filter) tasks = _filter(tasks, filter);
    return tasks
}

function add(newTask) {
    const newTask =  storageService.post(entityType,newTask);
    return newTask;
}

function getById(taskId) {
    const task = storageService.getById(entityType,taskId);
    return task;
}
function remove(taskId) {
    const newTasks = storageService.remove(entityType,taskId);
    return newTasks;
}
function update(task) {
    const updateTask = storageService.put(entityType, task);
    return task;
}

// const filter1 = { done: true, priority: 2, time: new Date(), text: "goalkeeper" }
// const filter2 = { done: null, priority: 2, time: null, text: "goalkeeper" }
function _filter(tasks, filter) {
    let filterTasks = tasks.filter(task =>
            (task.title.includes(filter.text) ||
                task.desc.includes(filter.text)) &&
                !task.isDone
            )
    return filterTasks;
}
