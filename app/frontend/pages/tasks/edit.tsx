import { Head, Link } from '@inertiajs/react'

import Form from './form'
import type { TaskType } from './types'

interface EditProps {
  task: TaskType
}

export default function Edit({ task }: EditProps) {
  return (
    <>
      <Head title="Editing task" />

      <h1>Editing task</h1>

      <Form
        task={task}
        action={`/tasks/${task.id}`}
        method="patch"
        submitText="Update Task"
      />

      <br />

      <div>
        <Link href={`/tasks/${task.id}`}>Show this task</Link>
        {' | '}
        <Link href="/tasks">Back to tasks</Link>
      </div>
    </>
  )
}
