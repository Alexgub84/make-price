import React, { FC } from 'react'
import { Settings, CategoryList } from '../types'
import { PdfExporter } from './PdfExporter/PdfExporter'
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
  // const SummaryComp: FC<{ styles: typeof styles }> = (): React.ReactElement => (
  const SummaryComp: FC = (): React.ReactElement => (
    <div>
      <h1>Summary</h1>
      <div className={styles.summaryList}>
        {React.Children.toArray(
          summaryList.map((category) => {
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
                    } else {
                      return
                    }
                  })
                )}
              </div>
            )
          })
        )}
      </div>
      <div className={styles.totalPrice}>
        The total price is: {totalPrice * pointPrice}₪
      </div>
    </div>
  )
  const SummaryCompForPdf: FC = (): React.ReactElement => {
    return <SummaryComp />
  }
  return (
    <div className={styles.container}>
      <h1>Summary</h1>
      <div className={styles.summaryList}>
        {React.Children.toArray(
          summaryList.map((category) => {
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
                    } else {
                      return
                    }
                  })
                )}
              </div>
            )
          })
        )}
      </div>
      <div className={styles.totalPrice}>
        The total price is: {totalPrice * pointPrice}₪
      </div>
      <SummaryComp />
      <PdfExporter component={<SummaryComp />} />
    </div>
  )
}
