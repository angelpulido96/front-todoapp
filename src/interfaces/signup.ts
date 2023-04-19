export interface SingUp {
    name: string,
    firstLastName: string,
    secondLastName?: string,
    birthday: string,
    cellphone: string,
    avatar?: object,
    email: string,
    password: string | boolean,
    confirmPassword: string
}