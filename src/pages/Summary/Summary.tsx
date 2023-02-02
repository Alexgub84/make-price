import React, {FC} from 'react'

import {DragDropContext, Droppable} from '@hello-pangea/dnd'
import type {DropResult} from '@hello-pangea/dnd'

import styles from './summary.module.scss'

import type {Settings, CategoryList, Category} from '../../types'

import {dateToday} from '../../services/utils'
import {PdfExporter} from './PdfExporter/PdfExporter'
import CompanyLogo from '../../assets/imgs/quality_logo.png'
import {SummaryPartialComponent} from './SummaryPartialComponent'
import {settings as fakeSettings} from '../../data/settings.js'

export const Summary: React.FC<{settings: Settings; list: CategoryList}> = (props) => {
  const [currentList, setCurrentList] = React.useState<CategoryList>(props.list)

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const reorderedList = [...currentList]
    const [reorderedItem] = reorderedList.splice(result.source.index, 1)
    reorderedList.splice(result.destination.index, 0, reorderedItem)

    setCurrentList(reorderedList)
  }

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
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.summaryList}>
                  {currentList.map((category, ii) => {
                    return (
                      <SummaryPartialComponent
                        key={`summary-${category.id}`}
                        category={category}
                        index={ii}
                      />
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </section>
      </div>

      <div className={styles.totalPrice}>
        <span>הסכום הסופי לתשלום הוא: </span>
        <span>{totalPrice * pointPrice}₪</span>
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      <SummaryComp />
      {/* <SettingsComp settings={props.settings} /> */}
      {/* <PdfExporter component={<SummaryComp />} /> */}
    </div>
  )
}
