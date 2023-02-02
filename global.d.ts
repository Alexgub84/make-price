declare type Service = {
    id: string
    title: string
    isChecked: boolean
    shouldBeDisplayed: boolean
    points: number
  }
  
declare type ServiceList = Service[]

declare type Category = {
  id: string
  name: string
  list: ServiceList
}

declare type CategoryList = Category[]

declare type HandleServiceChange = (
  updatedService: Service
  // id: string,
  // keyName: string,
  // newValue: string | number | boolean
) => void

declare type HandleListChange = (name: string, newlist: ServiceList) => void
// export type HandleSettingChange = (updatedSetting: Record<K extends  string | number | symbol, T>={[P in K]: T}) => void
export type HandleSettingsChange = (updatedSettings: Settings) => void

export type Settings = {
  pointPrice: number
  imgUrl: string
}

declare type ClientDetails = {
  name: string
}
