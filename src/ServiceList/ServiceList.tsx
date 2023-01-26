import React, {useState} from 'react'
import styles from './serviceList.module.scss'
import {ServiceLine} from '../ServiceLine/ServiceLine'
import type {HandleServiceChange, ServiceList} from '../types'
export const ServicesList: React.FC<{
  categoryName: string
  serviceList: ServiceList
  handleServiceChange: HandleServiceChange
}> = (props) => {
  const [showList, setShowList] = useState(true)
  const buttonText = showList ? 'לסגור' : 'לפתוח'
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <h2>{props.categoryName}</h2>
        <button onClick={() => setShowList(!showList)}>{buttonText}</button>
      </div>
      {showList && (
        <div className={styles.listContainer}>
          {props.serviceList.map((service, ii) => {
            return (
              <ServiceLine
                service={service}
                handleServiceChange={props.handleServiceChange}
                key={`service-${service.id}`}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
