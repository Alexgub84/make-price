export type Service = {
  id: string
  title: string
  isChecked: boolean
  shouldBeDisplayed: boolean
  points: number
}

export type ServiceList = Service[]

export type Category = {
  id: string
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
// export type HandleSettingChange = (updatedSetting: Record<K extends  string | number | symbol, T>={[P in K]: T}) => void
export type HandleSettingsChange = (updatedSettings: Settings) => void

export type Settings = {
  pointPrice: number
  imgUrl: string
}

export type ClientDetails = {
  name: string
}
