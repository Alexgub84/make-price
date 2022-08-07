import { CategoryList } from '../types'
import { v4 as uuidv4 } from 'uuid'
export const categoryList: CategoryList = [
  {
    name: 'Preparing some',
    list: [
      {
        id: uuidv4(),
        title: 'Do this',
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: 'Write this',
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: 'Design that',
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: 'Think about it',
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: 'Get some inspiration',
        isChecked: false,
        points: 0,
      },
    ],
  },
  {
    name: 'Flying away',
    list: [
      {
        id: uuidv4(),
        title: 'Make magic',
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: 'Bring your passion',
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: 'Unleash yourself',
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: "You're the best there are",
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: "The sky isn't you limit",
        isChecked: false,
        points: 0,
      },
    ],
  },
]
