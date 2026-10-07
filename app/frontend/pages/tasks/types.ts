export interface TaskType {
  id: number
  title: string
}

export type TaskFormType = Omit<TaskType, 'id'>
