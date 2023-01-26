import React, {useState} from 'react'
import {categoryList} from './data/category-list'
import styles from './app.module.scss'
import {Questionnaire} from './pages/Questionnaire/Questionnaire'
import {NavLink, Routes, Route} from 'react-router-dom'
import {Summary} from './pages/Summary/Summary'
import {Welcome} from './pages/Welcome/Welcome'
import {SettingsComp} from './pages/Settings/Settings'
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
        <nav className={styles.navbar}>
          <li>
            <NavLink to="/" end>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/questionnaire">Make Price</NavLink>
          </li>
          <li>
            <NavLink to="/summary">Summary</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </nav>
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
