import React, { useState } from 'react'
import styles from './serviceList.module.scss'
import { ServiceLine } from '../ServiceLine/ServiceLine'
import { HandleServiceChange, ServiceList } from '../types'

export const ServicesList: React.FC<{
  categoryName: string
  serviceList: ServiceList
  handleServiceChange: HandleServiceChange
}> = (props) => {
  const [showList, setShowList] = useState(true)
  const buttonText = showList ? 'close' : 'open'
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <h2>{props.categoryName}</h2>
        <button onClick={() => setShowList(!showList)}>{buttonText}</button>
      </div>
      {showList && (
        <div className={styles.listContainer}>
          {React.Children.toArray(
            props.serviceList.map((service) => {
              return (
                <ServiceLine
                  service={service}
                  handleServiceChange={props.handleServiceChange}
                />
              )
            })
          )}
        </div>
      )}
    </div>
  )
}
