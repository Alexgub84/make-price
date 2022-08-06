import React, { useState } from 'react'
import styles from './home.module.scss'
import { ServicesList } from '../ServiceList/ServiceList'
import { CategoryList, Settings, handleListChange } from '../types'
import { Summary } from '../Summary/Summary'
import { categoryList } from '../data/category-list'

export function Home() {
  const settings: Settings = {
    pointPrice: 20,
  }

  const [list, setList] = useState(categoryList)
  const handleListChange: handleListChange = (categoryName, newlist) => {
    const updatedList = list.map((category) => {
      if (Object.keys(category).includes(categoryName)) {
        return { [categoryName]: newlist }
      } else {
        return category
      }
    })

    setList(updatedList)
  }
  const pointsCount = 200
  return (
    <div className={styles.container}>
      {React.Children.toArray(
        list.map((category) => {
          const categoryName = Object.keys(category)[0]
          return (
            <ServicesList
              categoryName={categoryName}
              serviceList={category[categoryName]}
              handleListChange={handleListChange}
            />
          )
        })
      )}
      <Summary settings={settings} list={list} />
    </div>
  )
}
