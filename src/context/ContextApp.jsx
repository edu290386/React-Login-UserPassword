import { createContext, useState, useEffect } from "react"

export const ContextProvider = createContext()

const ContextApp = ({children}) => {
    const dbUsers = localStorage.getItem("dbUsers")
    const localData = dbUsers ? JSON.parse(dbUsers) : []
 
    const [userData, setUserData] = useState({})

    useEffect(() => {
        console.log("logged")
    } , [userData] )

    console.log(userData)
    
  return (
    <ContextProvider.Provider value={{localData, setUserData}}>
        {children}
    </ContextProvider.Provider>
  )
}

export default ContextApp