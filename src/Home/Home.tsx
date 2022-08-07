import React, { useState } from 'react'
import styles from './home.module.scss'
import { ServicesList } from '../ServiceList/ServiceList'
import { Service, ServiceList, Settings, HandleServiceChange } from '../types'
import { Summary } from '../Summary/Summary'
import { categoryList } from '../data/category-list'

export function Home() {
  const settings: Settings = {
    pointPrice: 20,
  }

  const [list, setList] = useState(categoryList)

  const handleServiceChange: HandleServiceChange = (updatedService): void => {
    const updatedList = list.map((category) => {
      const updatedServiceList = updateServiceList(
        category.list,
        updatedService
      )
      return { name: category.name, list: updatedServiceList }
    })
    setList(updatedList)
  }

  const updateServiceList = (
    list: ServiceList,
    updatedService: Service
  ): ServiceList => {
    const updatedList = list.map((service) => {
      if (service.id === updatedService.id) {
        return updatedService
      } else {
        return service
      }
    })

    return updatedList
  }
  return (
    <div className={styles.container}>
      {React.Children.toArray(
        list.map((category) => {
          return (
            <ServicesList
              categoryName={category.name}
              serviceList={category.list}
              handleServiceChange={handleServiceChange}
            />
          )
        })
      )}

      <Summary settings={settings} list={list} />
    </div>
  )
}
