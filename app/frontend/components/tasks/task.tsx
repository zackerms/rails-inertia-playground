import { TaskType } from '../../pages/tasks/types'

interface TaskProps {
  task: TaskType
}

export default function Task({ task }: TaskProps) {
  return (
    <div>
      <p>
        <strong>Title:</strong>
        {task.title?.toString()}
      </p>
    </div>
  )
}
