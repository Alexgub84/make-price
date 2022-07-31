import React, { useState } from 'react'
type Service = {
  id: string
  title: string
  isChecked: boolean
  points: number
}
type ServiceProps = {
  service: Service
  handleCategoryChange: (service: Service) => void
}
export function Service({
  service = {
    id: 'aa',
    title: 'b',
    isChecked: false,
    points: 0,
  },
  handleCategoryChange,
}: ServiceProps) {
  const [currService, setService] = useState(service)
  const handleChange = (name: string, value: number | boolean): void => {
    setService({ ...currService, [name]: value })
    handleCategoryChange(currService)
  }

  return (
    <div>
      <label>{currService.title}</label>
      <input
        type="checkbox"
        checked={currService.isChecked}
        name="isChecked"
        id=""
        onChange={(e) =>
          handleChange(e.currentTarget.name, e.currentTarget.checked)
        }
      />
      <input
        type="number"
        value={currService.points}
        name="points"
        id=""
        onChange={(e) =>
          handleChange(e.currentTarget.name, parseInt(e.target.value))
        }
      />
    </div>
  )
}
