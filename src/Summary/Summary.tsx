import React from 'react'
import { Settings, CategoryList } from '../types'
export const Summary: React.FC<{ settings: Settings; list: CategoryList }> = (
  props
) => {
  const summaryList = props.list.filter((category) => {
    const isCategory = category.list.find((row) => {
      return row.isChecked
    })
    return isCategory
  })

  const { pointPrice } = props.settings
  let totalPrice = 0
  summaryList.forEach((category) => {
    category.list.forEach((service) => {
      if (service.isChecked && service.points > 0) {
        totalPrice += service.points
      }
    })
  })

  return (
    <div>
      <h1>Summary</h1>
      {summaryList.map((category) => {
        return (
          <div>
            <div>
              <h3>{category.name}</h3>
              <div></div>
            </div>
            {React.Children.toArray(
              category.list.map((service) => {
                if (service.isChecked && service.points > 0) {
                  return (
                    <div>
                      <label>{service.title}: </label>
                      <label>{service.points * pointPrice}₪</label>
                    </div>
                  )
                }
              })
            )}
          </div>
        )
      })}
      The total price is:{totalPrice * pointPrice}₪
    </div>
  )
}
