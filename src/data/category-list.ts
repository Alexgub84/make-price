import type {CategoryList} from '../types'

// import { v4 as uuidv4 } from 'uuid'
const {v4: uuidv4} = require('uuid')
export const categoryList: CategoryList = [
  {
    name: 'בסיס',
    id: uuidv4(),

    list: [
      {
        id: uuidv4(),
        title: 'התקנת וורדפרס, תבנית והגדרות',
        isChecked: true,
        points: 3,
        shouldBeDisplayed: false,
      },
      {
        id: uuidv4(),
        title: 'גביה ותוספות',
        isChecked: true,
        points: 3,
        shouldBeDisplayed: false,
      },
      {
        id: uuidv4(),
        title: 'הדר + פוטר',
        isChecked: true,
        points: 0,
        shouldBeDisplayed: false,
      },
      {
        id: uuidv4(),
        title: 'עמוד ראשי 5 אזורים',
        isChecked: true,
        points: 4,
        shouldBeDisplayed: true,
      },
      {
        id: uuidv4(),
        title: 'עמוד אודות',
        isChecked: true,
        points: 2,
        shouldBeDisplayed: true,
      },
      {
        id: uuidv4(),
        title: 'יצירת קשר',
        isChecked: true,
        points: 2,
        shouldBeDisplayed: true,
      },
      {
        id: uuidv4(),
        title: 'עמוד שירותים',
        isChecked: false,
        points: 3,
        shouldBeDisplayed: true,
      },
      {
        id: uuidv4(),
        title: 'בלוג',
        isChecked: false,
        points: 2,
        shouldBeDisplayed: true,
      },
    ],
  },
  {
    name: 'עמודים מיוחדים',
    id: uuidv4(),
    list: [
      {
        id: uuidv4(),
        title: 'עמוד הבית',
        isChecked: false,
        points: 0,
        shouldBeDisplayed: false,
      }
    ],
  },
  {
    name: 'תוספות נוספות',
    id: uuidv4(),
    list: [
      {
        id: uuidv4(),
        title: 'טופס השארת פרטים בכל עמוד, חיבור וואטצפ, מייל',
        isChecked: false,
        points: 0,
        shouldBeDisplayed: false,
      },
      {
        id: uuidv4(),
        title: 'עמוד שגיאה 404',
        isChecked: false,
        points: 0,
        shouldBeDisplayed: false,
      },
      {
        id: uuidv4(),
        title: 'חיבור לגוגל אנליטיקס',
        isChecked: false,
        points: 0,
        shouldBeDisplayed: false,
      },
      {
        id: uuidv4(),
        title: "חיבור לרשתות החברתיות",
        isChecked: false,
        points: 0,
        shouldBeDisplayed: false,
      },
     
    ],
  }
]
