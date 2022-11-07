import React, { useContext, useEffect, useState } from 'react'

const GlobalContext = React.createContext()
export const GlobalProvider = ({ children }) => {

  const value = {}
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(GlobalContext)
}