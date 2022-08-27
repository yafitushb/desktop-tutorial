import { Task } from "../data/dummyData";
import { storageService } from "./generalService/storageService"

export const taskService = {
    getEmptyTask,
    query,
    add,
    getById,
    remove,
    update
}

const entityType = "task";

function getEmptyTask( ) {
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

function add(task) {
    const newTask =  storageService.post(entityType,task);
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
