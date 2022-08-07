import React, { useState } from 'react'
import styles from './serviceLine.module.scss'
import { Service, HandleServiceChange } from '../types'

export const ServiceLine: React.FC<{
  service: Service
  handleServiceChange: HandleServiceChange
}> = (props) => {
  const [service, setService] = useState(props.service)
  const handleInputChange = (
    keyName: string,
    newValue: boolean | number
  ): void => {
    const updatedService = { ...service }
    switch (keyName) {
      case 'points':
        updatedService.points = newValue as number
        if (newValue === 0) {
          updatedService.isChecked = false
        }
        break
      case 'isChecked':
        if (newValue && service.points === 0) {
          updatedService.points = 1
        }
        updatedService.isChecked = newValue as boolean
        break
      default:
        break
    }
    setService((prev) => ({ ...prev, ...updatedService }))
    props.handleServiceChange(updatedService)
  }

  return (
    <div className={styles.container}>
      <label>{props.service.title}</label>
      <div>
        <input
          type="checkbox"
          checked={service.isChecked}
          name="isChecked"
          id=""
          onChange={(e) => {
            handleInputChange(e.currentTarget.name, e.currentTarget.checked)
          }}
        />
        <input
          type="number"
          value={service.points}
          name="points"
          className={styles.pointsInput}
          onChange={(e) => {
            handleInputChange(e.currentTarget.name, parseInt(e.target.value))
          }}
        />
      </div>
    </div>
  )
}
