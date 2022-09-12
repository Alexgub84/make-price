import React, { useState } from 'react'
import { categoryList } from './data/category-list'
import styles from './app.module.scss'
import { Home } from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Summary } from './pages/Summary/Summary'
import { Welcome } from './pages/Welcome/Welcome'
import { SettingsComp } from './pages/Settings/Settings'
import {
  Service,
  ServiceList,
  Settings,
  HandleServiceChange,
  ClientDetails,
  HandleSettingsChange,
} from './types'

function App() {
  const settingsData: Settings = {
    pointPrice: 20,
    imgUrl: 'http://www.sample.com',
  }

  const clientDetails: ClientDetails = {
    name: 'name',
  }

  const [list, setList] = useState(categoryList)
  const [settings, setSettings] = useState(settingsData)

  const handleServiceChange: HandleServiceChange = (updatedService): void => {
    const updatedList = list.map((category) => {
      const updatedServiceList = updateServiceList(
        category.list,
        updatedService
      )
      return { name: category.name, list: updatedServiceList }
    })
    setList(updatedList)
  }

  const handleSettingsChange: HandleSettingsChange = (
    updatedSettings
  ): void => {
    setSettings({ ...updatedSettings })
  }

  const updateServiceList = (
    list: ServiceList,
    updatedService: Service
  ): ServiceList => {
    const updatedList = list.map((service) => {
      if (service.id === updatedService.id) {
        return updatedService
      } else {
        return service
      }
    })

    return updatedList
  }

  return (
    <div className="App">
      <header className={styles.header}>
        <nav></nav>
      </header>

      <Home list={categoryList} handleServiceChange={handleServiceChange} />

      <SettingsComp settings={settings} />

      <Summary settings={settings} list={categoryList} />
    </div>
  )
}

export default App
