import { Head, Link, usePage } from '@inertiajs/react'
import Task from '../../components/tasks/task'
import { TaskType } from './types'

interface IndexProps {
  tasks: TaskType[]
}

export default function Index({ tasks }: IndexProps) {
  const { flash } = usePage()

  return (
    <>
      <Head title="Tasks" />

      {flash.notice && <p style={{ color: 'green' }}>{flash.notice}</p>}

      <h1>Tasks</h1>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <Task task={task} />
            <p>
              <Link href={`/tasks/${task.id}`}>Show this task</Link>
            </p>
          </div>
        ))}
      </div>

      <Link href="/tasks/new">New task</Link>
    </>
  )
}
