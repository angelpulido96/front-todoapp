import dayjs, { Dayjs } from 'dayjs';
export interface Props {
    open: boolean,
    task: {
        _id?: string,
        title: string,
        description: string,
        limitDate: dayjs.Dayjs | null
    } | null,
    handleClose: () => void
    handleGetTasks: () => {}
}

export interface Task {
    title: string,
    description: string,
}

export interface CompleteTask extends Task {
    id?: string,
    limitDate: string,
    createdBy: string
}