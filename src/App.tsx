import React, {useState} from 'react'
import styles from './app.module.scss'
import {Routes, Route} from 'react-router-dom'

import {categoryList} from './data/category-list'
import {Questionnaire} from './pages/Questionnaire/Questionnaire'
import {Summary} from './pages/Summary/Summary'
import {Welcome} from './pages/Welcome/Welcome'
import {SettingsComp} from './pages/Settings/Settings'
import {NavBar} from './components/NavBar/Navbar'

import {Service, ServiceList, Settings, HandleServiceChange, HandleSettingsChange} from './types'

function App() {
  const settingsData: Settings = {
    pointPrice: 20,
    imgUrl: 'http://www.sample.com',
  }

  const [list, setList] = useState(categoryList)
  const [settings, setSettings] = useState(settingsData)

  const handleServiceChange: HandleServiceChange = (updatedService): void => {
    const updatedList = list.map((category) => {
      const updatedServiceList = updateServiceList(category.list, updatedService)
      return {...category, list: updatedServiceList}
    })
    setList(updatedList)
  }

  const handleSettingsChange: HandleSettingsChange = (updatedSettings): void => {
    setSettings({...updatedSettings})
  }

  const updateServiceList = (serviceList: ServiceList, updatedService: Service): ServiceList =>
    serviceList.map((service) => (service.id === updatedService.id ? updatedService : service))

  const handleAddService = (service: Service, categoryId: string): void => {
    const updatedList = list.map((category) => {
      if (category.id === categoryId) {
        const updatedServiceList = [...category.list, service]
        return {...category, list: updatedServiceList}
      } else {
        return category
      }
    })
    setList(updatedList)
  }

  return (
    <div className="App">
      <header className={styles.header}>
        <NavBar />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/questionnaire"
            element={
              <Questionnaire
                list={list}
                handleServiceChange={handleServiceChange}
                handleAddService={handleAddService}
              />
            }
          />
          <Route path="/settings" element={<SettingsComp settings={settings} />} />
          <Route path="/summary" element={<Summary settings={settings} list={list} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
