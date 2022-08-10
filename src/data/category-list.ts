import { CategoryList } from '../types'
// import { v4 as uuidv4 } from 'uuid'
const { v4: uuidv4 } = require('uuid')
export const categoryList: CategoryList = [
  {
    name: 'Basic',
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
    name: 'Pages',
    list: [
      {
        id: uuidv4(),
        title: 'Home page',
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
        title: 'Page 1',
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: 'Page 2',
        isChecked: false,
        points: 0,
      },
      {
        id: uuidv4(),
        title: 'About',
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
        title: "The sky isn't your limit",
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
        title: "The sky isn't your limit",
        isChecked: false,
        points: 0,
      },
    ],
  },
]
