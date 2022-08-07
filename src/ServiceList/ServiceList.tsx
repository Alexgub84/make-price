import React, { useState } from 'react'
import styles from './serviceList.module.scss'
import { ServiceLine } from '../ServiceLine/ServiceLine'
import {
  HandleServiceChange,
  Category,
  ServiceList,
  HandleListChange,
} from '../types'

export const ServicesList: React.FC<{
  categoryName: string
  serviceList: ServiceList
  handleServiceChange: HandleServiceChange
}> = (props) => {
  const [serviceList, setServiceList] = useState(props.serviceList)
  // const handleServiceChange: HandleServiceChange = (id, name, newValue) => {
  //   console.log('start update: ', name, newValue)
  //   //todo bug
  //   const updatedList = serviceList.map((row) => {
  //     if (row.id === id) {
  //       console.log({ ...row, [name]: newValue })

  //       return { ...row, [name]: newValue }
  //     } else {
  //       return row
  //     }
  //   })

  //   props.handleListChange(props.categoryName, updatedList)
  //   setServiceList(updatedList)
  //   console.log(serviceList)

  //   console.log('end update: ', name)
  // }
  return (
    <div className={styles.container}>
      <h2>{props.categoryName}</h2>
      <div className={styles.listContainer}>
        {React.Children.toArray(
          props.serviceList.map((service) => {
            return (
              <div>
                <ServiceLine
                  service={service}
                  handleServiceChange={props.handleServiceChange}
                />
              </div>
            )
          })
        )}
      </div>
      {/* <div>{JSON.stringify(category)}</div> */}
    </div>
  )
}
