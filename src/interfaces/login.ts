export interface Login {
    email: string,
    password: string
}
interface Avatar {
    url: string
}

export interface Payload {
    data: object
    error: boolean
    message: string
}

export interface Loged {
    _id?: string,
    id: string | undefined,
    name: string,
    firstLastName: string,
    secondLastName: string,
    cellphone: string,
    email: string,
    avatar: Avatar
}