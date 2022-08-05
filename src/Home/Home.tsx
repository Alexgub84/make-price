import React, { useState } from 'react'
import styles from './home.module.scss'
import { ServicesList } from '../ServiceList/ServiceList'
import { CategoryList, Settings } from '../types'
import { Summary } from '../Summary/Summary'

export function Home() {
  const settings: Settings = {
    pointPrice: 20,
  }
  const data: CategoryList = [
    {
      'first category': [
        {
          id: 'aa1',
          title: 'a',
          isChecked: false,
          points: 0,
        },
        {
          id: 'bb1',
          title: 'b',
          isChecked: false,
          points: 0,
        },
        {
          id: 'cc1',
          title: 'c',
          isChecked: false,
          points: 0,
        },
        {
          id: 'dd1',
          title: 'd',
          isChecked: false,
          points: 0,
        },
        {
          id: 'ee1',
          title: 'e',
          isChecked: false,
          points: 0,
        },
      ],
    },
    {
      'second category': [
        {
          id: 'aa',
          title: 'a',
          isChecked: false,
          points: 0,
        },
        {
          id: 'bb',
          title: 'b',
          isChecked: false,
          points: 0,
        },
        {
          id: 'cc',
          title: 'c',
          isChecked: false,
          points: 0,
        },
        {
          id: 'dd',
          title: 'd',
          isChecked: false,
          points: 0,
        },
        {
          id: 'ee',
          title: 'e',
          isChecked: false,
          points: 0,
        },
      ],
    },
  ]
  const [list, setList] = useState(data)
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
            />
          )
        })
      )}
      <Summary settings={settings} pointsCount={pointsCount} />
    </div>
  )
}
