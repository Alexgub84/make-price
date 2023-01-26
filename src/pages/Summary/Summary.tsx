import React, {FC} from 'react'
import {dateToday} from '../../services/utils'
import {SettingsComp} from '../Settings/Settings'
import type {Settings, CategoryList} from '../../types'
import {PdfExporter} from './PdfExporter/PdfExporter'
import styles from './summary.module.scss'
import CompanyLogo from '../../assets/imgs/quality_logo.png'

import {settings as fakeSettings} from '../../data/settings.js'

export const Summary: React.FC<{settings: Settings; list: CategoryList}> = (props) => {
  const summaryList = props.list.filter((category) => {
    const isCategory = category.list.find((row) => {
      return row.isChecked
    })
    return isCategory
  })

  const {pointPrice} = props.settings
  let totalPrice = 0
  summaryList.forEach((category) => {
    category.list.forEach((service) => {
      if (service.isChecked && service.points > 0) {
        totalPrice += service.points
      }
    })
  })

  const settings = JSON.parse(JSON.stringify(fakeSettings))

  // const SummaryComp: FC<{ styles: typeof styles }> = (): React.ReactElement => (
  const SummaryComp: FC = (): React.ReactElement => (
    <div className={styles.container} dir="rtl">
      <header>
        <img src={CompanyLogo} alt="company" />
        <div>
          <span>לכבוד: </span>
          <span>{settings.client.name}</span>
        </div>
        <div>
          <span>תאריך: </span>
          <span>{dateToday()}</span>
        </div>
        <div className={styles.for}></div>
      </header>
      <div>
        <h1>
          <span>הצעת מחיר בניית אתר: </span>
          <span>{settings.client.company_name}</span>
        </h1>
        <section>
          <h2>תיאור הפרויקט</h2>
          <div>{settings.client.description}</div>
        </section>

        <section>
          <h3>תכולת האתר</h3>
          {props.list.map((category) => {
            return (
              <section key={`summary-${category.id}`}>
                <h4>{category.name}</h4>
                <ul>
                  {category.list.map((service) => {
                    if (service.isChecked && service.shouldBeDisplayed) {
                      return <li key={`summary-${service.id}`}>{service.title}</li>
                    } else {
                      return null
                    }
                  })}
                </ul>
              </section>
            )
          })}
        </section>
      </div>

      <div className={styles.totalPrice}>The total price is: {totalPrice * pointPrice}₪</div>
    </div>
  )
  const SummaryCompForPdf: FC = (): React.ReactElement => {
    return <SummaryComp />
  }
  return (
    <div className={styles.container}>
      <SummaryComp />
      {/* <SettingsComp settings={props.settings} /> */}
      {/* <PdfExporter component={<SummaryComp />} /> */}
    </div>
  )
}
