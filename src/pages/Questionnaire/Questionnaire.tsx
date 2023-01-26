import React from 'react'
import styles from './questionnaire.module.scss'
import {ServicesList} from '../../ServiceList/ServiceList'
import type {HandleServiceChange, CategoryList, Service} from '../../types'
import {AddService} from '../../ServiceLine/AddService'

export const Questionnaire: React.FC<{
  list: CategoryList
  handleServiceChange: HandleServiceChange
  handleAddService: (service: Service, categoryId: string) => void
}> = (props) => {
  console.log(props.list)

  return (
    <div className={styles.container} dir="rtl">
      {React.Children.toArray(
        props.list.map((category) => {
          return (
            <section key={`category-${category.id}`}>
              <ServicesList
                categoryName={category.name}
                serviceList={category.list}
                handleServiceChange={props.handleServiceChange}
              />
              <AddService handleAddService={props.handleAddService} categoryId={category.id} />
            </section>
          )
        }),
      )}
    </div>
  )
}
