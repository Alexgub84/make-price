import React from 'react'
import styles from './home.module.scss'
import { ServicesList } from '../../ServiceList/ServiceList'
import { HandleServiceChange, CategoryList } from '../../types'

export const Home: React.FC<{
  list: CategoryList
  handleServiceChange: HandleServiceChange
}> = (props) => {
  return (
    <div className={styles.container}>
      {React.Children.toArray(
        props.list.map((category) => {
          return (
            <ServicesList
              categoryName={category.name}
              serviceList={category.list}
              handleServiceChange={props.handleServiceChange}
            />
          )
        })
      )}
    </div>
  )
}
