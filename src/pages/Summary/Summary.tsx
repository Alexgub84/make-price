import React, { FC } from 'react'
import { dateToday } from '../../services/utils'
import { SettingsComp } from '../Settings/Settings'
import { Settings, CategoryList } from '../../types'
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
    <div className={styles.container}>
      <header>
        <img src="bla" alt="bla" />
        <div className={styles.for}>
          <div>
            <span>for</span>
            <span>settings.client.name</span>
          </div>
          <div>
            <span>date</span>
            <span>{dateToday()}</span>
          </div>
        </div>
      </header>
      <div>
        <h1>
          <span>הצעת מחיר בניית אתר</span>
          <span>settings.client.name</span>
        </h1>
        <section>
          <h2>תיאור הפרויקט</h2>
          <div>settings.client.description</div>
        </section>

        <section>
          <h3>תכולת האתר</h3>
          <h4>עמודים ראשיים</h4>
          <ul>
            <li>עמוד ראשי</li>
            <li>עמוד ראשי</li>
            <li>עמוד ראשי</li>
            <li>עמוד ראשי</li>
          </ul>
        </section>
      </div>
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
      <SummaryComp />
      <SettingsComp settings={props.settings} />
      <PdfExporter component={<SummaryComp />} />
    </div>
  )
}
