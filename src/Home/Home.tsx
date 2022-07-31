import styles from './home.module.scss'
import { Category } from '../Category/Category'
export function Home() {
  return (
    <div className={styles.container}>
      <Category key="1" />
    </div>
  )
}
