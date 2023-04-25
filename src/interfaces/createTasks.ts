export interface Props {
    open: boolean,
    handleClose: () => void
    handleGetTasks: () => {}
}

export interface Task {
    title: string,
    description: string,
}

export interface CompleteTask extends Task {
    limitDate: string,
    createdBy: string
}