import React from "react";

class App extends React.Component {
    render() {
        return <CreateNewTaskDefaultToDoDisabled{...CreateNewTaskDefaultToDoDisabledData} />;
    }
}

export default App;
class CreateNewTaskDefaultToDoDisabled extends React.Component {
    render() {
        const {
            spanText1,
            spanText2,
            iconTime,
            spanText3,
            iconTeam,
            spanText4,
            color,
            spanText5,
            overlapGroup8,
            navigationexpandMore24pxProps,
        } = this.props;
        
        return (
            <div className="create-new-task-default-to-do-disabled">
                <div className="flex-col">
                    <div className="create-new-task-container robot-medium-abbey-20px">
                        <div className="create-new-task">
                            <span className="roboto-medium-abbey-20px">{spanText1}</span>
                        </div>
                        <div className="create-new-task">
                        <span className="roboto-medium-abbey-20px">{spanText2}</span>
                        </div>
                    </div>
                    <div className="new-task-labels-container">
                        <NewTaskLabels />
                        <NewTaskLabels />
                    </div>
                    <div className="new-task-default-container">
                        <NewTaskTitleDefault/>
                        <NewTaskTitleDefault/>
                    </div>
                    <div className="new-task-description-default-container">
                        <NewTaskDescriptionDefault />
                        <NewTaskDescriptionDefault />
                    </div>
                    <div className="new-task-due-date">
                        <img className="icon-t" src={iconTime} />
                        <div className="add-due-date valign-text-middle roboto-normal-nobel-14px">
                            <span>
                                <span className="roboto-normal-nobel-14px">{spanText3}</span>
                            </span>
                        </div>
                    </div>
                    <div className="new-task-team-members">
                        <img className="icon-t" src={iconTeam} />
                        <div className="add-team-members valign-text-iddle roboto-normal-14px">
                            <span>
                                <span className="roboto-normal-nobel-14px">{spanText4}</span>
                            </span>
                        </div>
                    </div>
                    <div className="new-task-locarion">
                        <img className="color" src={color} />
                        <div className="add-location valign-text-middle roboto-normal-14px">
                        <span>
                        <span className="roboto-normal-nobel-14px">{spanText5}</span>
                        </span>
                    </div>
                  </div>
                  <div className="button-create-task-default-container">
                        <ButtonCreateTaskDefault2 />
                        <ButtonCreateTaskDefault2 />
                </div>
            </div>
            <div className="overlap-group3" style={{ backgroundImage : `url(${overlapGroup8})`
            }}>

            <navigationexpandMore24px src={navigationexpandMore24pxProps.src} />
        </div>
        </div>
        );
    }
}

class NewTaskLabels extends React.Component {
    render () {
        return (
            <div className="new-task-labels">
                <LabelToDoDefault />
                <LabelInProgressUnselected />
                <div className="overlap-group border-0-5px-nobel">
                    <div className="completed valign-text-middle roboto-bold-nobel-14px">
                        <span>
                            <span className="roboto-bold-nobel-14px">Completed</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}




class LabelToDoDefault extends React.Component {
    render () {
        return (
                <div className="label-to-do-default border-0-5px-tahiti-gold">
                    <div className="to do valign-text-middle roboto-bold-tahiti-gold-14px">
                        <span>
                            <span className="roboto-bold-tahiti-gold-14px">To Do</span>
                        </span>
                    </div>
                </div>
        );
    }
}

class LabelInProgressUnselected extends React.Component {
    render () {
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
}

class NewTaskTitleDefault extends React.Component {
    render () {
        return (
                <div className="new-task-title-default">
                    <div className="title valign-text-middle roboto-normal-nobel-16px">
                        <span>
                            <span className="roboto-bold-nobel-16px">Title</span>
                        </span>
                    </div>
                </div>
        );
    }
}

class NewTaskDescriptionDefault extends React.Component {
    render () {
        return (
                <div className="new-task-description-default">
                    <div className="description roboto-normal-nobel-16px">
                            <span className="roboto-normal-nobel-16px">Description</span>
                    </div>
                    <img className="icon-attach-file" src="icon-attach-file-8.png" />
                </div>
        );
    }
}


class ButtonCreateTaskDefault2 extends React.Component {
    render () {
        return (
                <div className="button-create-task-default">
                    <div className="create-task valign-text-middle roboto-bold-abbey-16px">
                            <span>
                    <span className="roboto-bold-abbey-16p">Create Task</span>
                </span>
            </div>
        </div>
        );
    }
}

class navigationexpandMore24px extends React.Component {
    render() {
        const { src } = this.props;

        return <div className="icon-close" style={{ backgroundImage: `url(${src})` }}></div>;
    }
}

const navigationexpandMore24pxData = {
    src: "navigation-close-24px-1.png",
}; 

const CreateNewTaskDefaultToDoDisabledData = {
    spanText1: "Create New Task",
    spanText2: "Create New Task",
    iconTime: "icon-time-6.png",
    spanText3: "Add Due Date",
    iconTeam: "icon-team-2.png",
    spanText4: "Add Team Members",
    color: "-color-48.png",
    spanText5: "Add Location",
    overlapGroup8: "navigation-close-24px-1.png",
    navigationexpandMore24pxProps: navigationexpandMore24pxData,
};