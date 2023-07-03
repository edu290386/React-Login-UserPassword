import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ContextProvider = createContext()

const ContextApp = ({children}) => {
    const dbUsers = localStorage.getItem("dbUsers")
    const localData = dbUsers ? JSON.parse(dbUsers) : []
 
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (Object.values(userData).length > 0) {
            navigate('/dashboard', {state:{logged: true}, replace: true})
        }
        
    } , [userData] )

    console.log(userData)

  return (
    <ContextProvider.Provider value={{localData, setUserData}}>
        {children}
    </ContextProvider.Provider>
  )
}

export default ContextApp