import { Settings, CategoryList } from '../types'

export const Summary: React.FC<{ settings: Settings; list: CategoryList }> = (
  props
) => {
  let pointsCount = 0
  props.list.forEach((category) => {
    Object.values(category).forEach((list) => {
      list.forEach((service) => {
        if (service.isChecked) {
          pointsCount++
        }
      })
    })
  })

  return <div>The price is:{pointsCount * props.settings.pointPrice}</div>
}
