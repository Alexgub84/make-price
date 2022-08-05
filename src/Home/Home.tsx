import React from 'react'
import styles from './home.module.scss'
import { ServicesList } from '../ServiceList/ServiceList'
import { CategoryList } from '../types'

export function Home() {
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
  return (
    <div className={styles.container}>
      {React.Children.toArray(
        data.map((category) => {
          const categoryName = Object.keys(category)[0]
          return (
            <ServicesList
              categoryName={categoryName}
              serviceList={category[categoryName]}
            />
          )
        })
      )}
    </div>
  )
}
