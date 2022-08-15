import { useState } from 'react'
import { Settings } from '../types'
import styles from './settings.module.scss'
export const SettingsComp: React.FC<{ settings: Settings }> = (props) => {
  const [isShown, setIsShown] = useState(false)
  const buttonText = isShown ? 'hide' : 'show'
  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label htmlFor="pointPrice">Point price</label>
        <input
          type="number"
          id="pointPrice"
          value={props.settings.pointPrice}
        />
      </div>
      <section>
        <h2>Details</h2>
        <button
          onClick={() => {
            setIsShown(!isShown)
          }}
        >
          {buttonText}
        </button>
      </section>
      {isShown && (
        <section className={styles.personalDetails}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input type="file" name="image" id="image" />
          </div>
          <div>
            <label htmlFor="about">about</label>
            <input type="text" name="about" id="about" />
          </div>
        </section>
      )}
    </div>
  )
}
