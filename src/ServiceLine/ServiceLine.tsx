import React, { useState } from 'react'
import { Service, HandleServiceChange } from '../types'

export const ServiceLine: React.FC<{
  props: { service: Service; handleServiceChange: HandleServiceChange }
}> = ({ props }) => {
  return (
    <div>
      <label>{props.service.title}</label>
      <input
        type="checkbox"
        checked={props.service.isChecked}
        name="isChecked"
        id=""
        onChange={(e) =>
          props.handleServiceChange(
            props.service.id,
            e.currentTarget.name,
            e.currentTarget.checked
          )
        }
      />
      <input
        type="number"
        value={props.service.points}
        name="points"
        id=""
        onChange={(e) =>
          props.handleServiceChange(
            props.service.id,
            e.currentTarget.name,
            parseInt(e.target.value)
          )
        }
      />
    </div>
  )
}
