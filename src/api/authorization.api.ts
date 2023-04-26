import { api } from "./api";

const resource = 'refreshToken'

export const authorizatonAPI = {
  refreshToken: async (data: any) => {
    return await api({
      resource,
      method: 'POST',
      endpoint: '/',
      data
    })
  }
} 