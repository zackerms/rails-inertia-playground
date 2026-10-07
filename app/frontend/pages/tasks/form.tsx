import { type FormComponentProps } from '@inertiajs/core'
import { Form as InertiaForm } from '@inertiajs/react'

import type { TaskType, TaskFormType } from './types'

type FormProps = FormComponentProps<TaskFormType> & {
  task: TaskType
  submitText: string
}

export default function Form({ task, submitText, ...formProps }: FormProps) {
  return (
    <InertiaForm<TaskFormType>
      transform={data => ({ task: data })}
      {...formProps}
    >
      {({ errors, processing }) => (
        <>
          <div>
            <label style={{ display: 'block' }} htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={task.title}
            />
            {errors.title && (
              <div style={{ color: 'red' }}>{errors.title.join(', ')}</div>
            )}
          </div>
          <div>
            <button type="submit" disabled={processing}>
              {submitText}
            </button>
          </div>
        </>
      )}
    </InertiaForm>
  )
}
