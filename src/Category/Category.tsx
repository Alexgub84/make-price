import { useState } from 'react'
import styles from './category.module.scss'
import { Service } from '../Service/Service'
export function Category() {
  const categoryData: Array<{
    id: string
    title: string
    isChecked: boolean
    points: number
  }> = [
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
  ]
  const [category, setCategory] = useState(categoryData)
  let temp = {}
  const handleCategoryChange = (category: {
    id: string
    title: string
    isChecked: boolean
    points: number
  }): void => {
    console.log('category updated')

    temp = { ...category }
  }
  return (
    <div className={styles.container}>
      {category.map((service) => {
        return (
          <div>
            <Service
              key={service.id}
              service={service}
              handleCategoryChange={handleCategoryChange}
            />
          </div>
        )
      })}
      <div>{JSON.stringify(temp)}</div>
    </div>
  )
}
