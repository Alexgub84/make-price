import styles from './category.module.scss'
import { Service } from '../Service/Service'
export function Category() {
  return (
    <div className={styles.container}>
      <Service />
      <Service />
    </div>
  )
}
