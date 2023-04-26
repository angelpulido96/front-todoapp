import dayjs, { Dayjs } from 'dayjs';

export interface Props {
    open: boolean,
    task: CompleteTask | null,
    handleClose: () => void
    handleGetTasks: () => {}
}

export interface Task {
    title: string,
    description: string,
}

export interface CompleteTask extends Task {
    _id?: string,
    id?: string,
    limitDate: string,
    createdBy: string
}