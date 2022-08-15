import { Settings } from '../types'

export const SettingsComp: React.FC<{ settings: Settings }> = (props) => {
  return (
    <div>
      <label htmlFor="pointPrice">Point price</label>
      <input type="number" value={props.settings.pointPrice} />
    </div>
  )
}
