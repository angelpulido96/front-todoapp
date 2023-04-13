import { Login } from "@/interfaces/login";
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
  }
} 