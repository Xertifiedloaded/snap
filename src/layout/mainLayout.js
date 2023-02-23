import React from 'react'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react'
import Header from '../component/Ui/header/header'
import Footer from '../component/Ui/footer/footer'
const userContext = createContext()
const MainLayout = () => {
  return (
      <>
          <userContext.Provider value={null}>
              <Header />
              <Outlet />
              {/* <Footer/> */}
        </userContext.Provider>
      </>
  )
}

export default MainLayout