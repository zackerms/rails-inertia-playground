import { Head, Link, usePage } from '@inertiajs/react'
import Task from './task'
import { TaskType } from './types'

interface ShowProps {
  task: TaskType
}

export default function Show({ task }: ShowProps) {
  const { flash } = usePage()

  return (
    <>
      <Head title={`Task #${task.id}`} />

      {flash.notice && <p style={{ color: 'green' }}>{flash.notice}</p>}

      <h1>Task #{task.id}</h1>

      <Task task={task} />

      <div>
        <Link href={`/tasks/${task.id}/edit`}>Edit this task</Link>
        {' | '}
        <Link href="/tasks">Back to tasks</Link>

        <br />

        <Link
          href={`/tasks/${task.id}`}
          as="button"
          method="delete"
        >
          Destroy this task
        </Link>
      </div>
    </>
  )
}
