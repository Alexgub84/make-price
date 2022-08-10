import React from 'react'
import styles from './app.module.scss'
import { Home } from './Home/Home'

function App() {
  return (
    <div className="App">
      <header className={styles.header}>
        <h1> Make Price for Shir</h1>
      </header>
      <Home />
    </div>
  )
}

export default App
