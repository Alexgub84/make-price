export type Service = {
  id: string
  title: string
  isChecked: boolean
  points: number
}

export type ServiceList = Service[]

export type Category = {
  name: string
  list: ServiceList
}

export type CategoryList = Category[]

export type HandleServiceChange = (
  updatedService: Service
  // id: string,
  // keyName: string,
  // newValue: string | number | boolean
) => void

export type HandleListChange = (name: string, newlist: ServiceList) => void

export type Settings = {
  pointPrice: number
}
