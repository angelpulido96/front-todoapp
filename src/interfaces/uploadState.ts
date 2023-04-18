import React from "react"

export interface UploadState {
    id: string,
    types: string,
    typesAccepted: [],
    file: null | string,

    open: boolean,
    drag: boolean,
}

export interface File {
    fileName: string,
    type: string,
    size: Number,
    width?: Number,
    height?: Number,
    base64: string
}

export type Props = {
    file: File,
    setFile: React.Dispatch<React.SetStateAction<File>>,
    handleDeleteImage?: () => void,
    handleErrorFile?: () => void,
    typesAccepted: string[],
    description?: string,
    text?: string,
    show?: boolean,
    error?: boolean,
    helperText?: string,
    disabled: boolean
}