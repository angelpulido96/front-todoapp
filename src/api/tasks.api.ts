import { CompleteTask } from "@/interfaces/createTasks";
import { api } from "./api";

const resource = 'tasks'

export const tasksAPI = {
  createTask: async (data: CompleteTask) => {
    return await api({
      resource,
      method: 'POST',
      endpoint: '/',
      data
    })
  },
  getTasks: async (filters: any) => {
    return await api({
      resource,
      method: 'GET',
      endpoint: `?query=${filters}`,
    })
  }
} 