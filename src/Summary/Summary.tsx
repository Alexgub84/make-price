import React from 'react'
import { Settings, CategoryList } from '../types'
import styles from './summary.module.scss'
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
      <div className={styles.summaryList}>
        {summaryList.map((category) => {
          return (
            <div>
              <h3>{category.name}</h3>
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
      </div>
      <div className={styles.totalPrice}>
        The total price is: {totalPrice * pointPrice}₪
      </div>
    </div>
  )
}
