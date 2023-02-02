import {NavLink} from 'react-router-dom'
import styles from './navbar.module.scss'

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <li>
        <NavLink to="/" end>
          Welcome
        </NavLink>
      </li>
      <li>
        <NavLink to="/questionnaire">Make Price</NavLink>
      </li>
      <li>
        <NavLink to="/summary">Summary</NavLink>
      </li>
      <li>
        <NavLink to="/settings">Settings</NavLink>
      </li>
    </nav>
  )
}
