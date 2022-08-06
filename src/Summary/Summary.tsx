import { Settings, CategoryList } from '../types'
import { PdfExporter } from './PdfExporter/PdfExporter'
export const Summary: React.FC<{ settings: Settings; list: CategoryList }> = (
  props
) => {
  let pointsCount = 0
  props.list.forEach((category) => {
    Object.values(category).forEach((list) => {
      list.forEach((service) => {
        if (service.isChecked && service.points > 0) {
          pointsCount++
        }
      })
    })
  })
  const { pointPrice } = props.settings
  return (
    <div>
      {props.list.map((category) => {
        const categoryName = Object.keys(category)[0]
        return (
          <div>
            <h3>{categoryName}</h3>
            {category[categoryName].map((service) => {
              if (service.isChecked && service.points > 0) {
                return (
                  <div>
                    <label>{service.title}: </label>
                    <label>{service.points * pointPrice}₪</label>
                  </div>
                )
              }
            })}
          </div>
        )
      })}
      The price is:{pointsCount * props.settings.pointPrice}
    </div>
  )
}
