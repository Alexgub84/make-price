export type Service = {
  id: string
  title: string
  isChecked: boolean
  points: number
}

export type ServiceList = Service[]

export type Category = {
  [name: string]: ServiceList
}

export type CategoryList = Category[]

export type HandleServiceChange = (
  id: string,
  name: string,
  value: string | number | boolean
) => void

export type Settings = {
  pointPrice: number
}
