import { Login } from "@/interfaces/login";
import { SingUp } from "@/interfaces/signup";
import { api } from "./api";

const resource = 'users'

export const loginAPI = {
  login: async (data: Login) => {
    return await api({
      resource,
      method: 'POST',
      endpoint: '/login',
      data
    })
  },
  signup: async (data: SingUp) => {
    return await api({
      resource,
      method: 'POST',
      endpoint: '/',
      data
    })
  }
} 