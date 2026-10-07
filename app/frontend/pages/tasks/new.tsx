import { Head, Link } from '@inertiajs/react'

import Form from './form'
import type { TaskType } from './types'

interface NewProps {
  task: TaskType
}

export default function New({ task }: NewProps) {
  return (
    <>
      <Head title="New task" />

      <h1>New task</h1>

      <Form
        task={task}
        action="/tasks"
        method="post"
        submitText="Create Task"
      />

      <br />

      <div>
        <Link href="/tasks">Back to tasks</Link>
      </div>
    </>
  )
}
