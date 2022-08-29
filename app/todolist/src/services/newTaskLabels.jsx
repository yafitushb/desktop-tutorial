import React from 'react';
import { Task } from "../data/dummyData";
import { storageService } from "./generalService/storageService"

export const newTaskLabels = {
    NewTaskLabels,
    LabelToDoDefault,
    LabelInProgressUnselected
}

function NewTaskLabels() {
    return(       
        <div className="new-task-labels">
            <LabelToDoDefault />
            <LabelInProgressUnselected
        />
            <div className="overlap-group border-0-5px-nobel">
                <div className="completed valign-text-middle roboto-bold-nobel-14x">
                    <span>
                        <span className="roboto-bold-nobel-14px">Completed</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

function LabelToDoDefault() {
    return (
        <div className="label-to-do-default border-0-5px-tahiti-gold">
            <div className="to-do valign-text-middle robot-bold-tahiti-gold-14px">
                <span>
                    <span className="robo-boldtahiti-gold-14px">ToDo</span>
                </span>
            </div>
        </div>
    );
}

function LabelInProgressUnselected() {
    return (
        <div className="label-in-progress-unselected border-0-5px-nobel">
            <div className="in-progress valign-text-middle roboto-bold-nobel-14px">
                <span>
                    <span className="roboto-bold-nobel-14px">In Progress</span>
                </span>
            </div>
        </div>
    );
}
