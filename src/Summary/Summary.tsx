import { Settings } from '../types'

export const Summary: React.FC<{ settings: Settings; pointsCount: number }> = (
  props
) => {
  return (
    <div>The price is: {props.pointsCount * props.settings.pointPrice}</div>
  )
}
