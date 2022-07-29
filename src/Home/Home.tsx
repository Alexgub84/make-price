import styles from './home.module.scss'
import { Category } from '../Category/Category'
export function Home() {
  return (
    <div className={styles.home}>
      <Category />
      <Category />
    </div>
  )
}
