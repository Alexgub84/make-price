import React, { useState } from 'react'
import styles from './serviceList.module.scss'
import { ServiceLine } from '../ServiceLine/ServiceLine'
import { HandleServiceChange, Category, ServiceList } from '../types'

export const ServicesList: React.FC<{
  props: { categoryName: string; serviceList: ServiceList }
}> = ({ props }) => {
  const [serviceList, setServiceList] = useState(props.serviceList)
  const handleServiceChange: HandleServiceChange = (id, name, value) => {
    const updatedData = serviceList.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value }
      } else {
        return row
      }
    })
    setServiceList(updatedData)
  }
  return (
    <div className={styles.container}>
      <h2>{props.categoryName}</h2>
      {React.Children.toArray(
        serviceList.map((service) => {
          return (
            <div>
              <ServiceLine
                service={service}
                handleServiceChange={handleServiceChange}
              />
            </div>
          )
        })
      )}

      {/* <div>{JSON.stringify(category)}</div> */}
    </div>
  )
}
