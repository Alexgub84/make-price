import {Draggable} from '@hello-pangea/dnd'
import styles from './summarypartialomponent.module.scss'
import type {Category} from '../../types'

export const SummaryPartialComponent: React.FC<{
  category: Category
  index: number
}> = (props) => {
  const {category} = props
  return (
    <Draggable key={`dragable-${category.id}`} draggableId={category.id} index={props.index}>
      {(provided) => (
        <section
          className={styles.container}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}>
          <h4>{category.name}</h4>
          <ul>
            {category.list.map((service) => {
              return <li key={`summary-${service.id}`}>{service.title}</li>
            })}
          </ul>
        </section>
      )}
    </Draggable>
  )
}

//                {category.list.find((service) => service.isChecked && service.shouldBeDisplayed) && (
