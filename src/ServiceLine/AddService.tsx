import {useRef} from 'react'
import type {Service} from '../types'
const {v4: uuidv4} = require('uuid')

export const AddService: React.FC<{
  categoryId: string
  handleAddService: (service: Service, categoryId: string) => void
}> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const newService: Service = {
      id: uuidv4(),
      title: data.get('title') as string,
      isChecked: true,
      points: 1,
      shouldBeDisplayed: true,
    }
    props.handleAddService(newService, props.categoryId)
    inputRef.current?.value && (inputRef.current.value = '')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" placeholder="קדימה" ref={inputRef} />

      <button type="submit">Add</button>
    </form>
  )
}
