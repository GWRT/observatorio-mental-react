import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TopBar from './components/TopBar'
import MainHome from './components/Home/MainHome'
import FooterPage from './components/Home/FooterPage'
import Graficas from './components/Graficas/Graficas'
import Noticias from './components/Noticias/Noticias'
import Suscribete from './components/Suscribete/Suscribete'

function App() {

  return (
    <>
      <BrowserRouter>
        <TopBar/>
          <Routes>
            <Route path='/' element={<MainHome />} />
            <Route path='/graficas' element={<Graficas />} />
            <Route path='/noticias' element={<Noticias/>} />
            <Route path='/suscribete' element={<Suscribete/>} />
          </Routes>
      </BrowserRouter>
      <FooterPage />
    </>
  )
}

export default App
