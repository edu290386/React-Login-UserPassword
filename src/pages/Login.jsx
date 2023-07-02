import { useContext, useState } from "react"
import { ContextProvider } from '../context/ContextApp' 

const Login = () => {
  const [dataLogin, setDataLogin] = useState({})
  const {localData, setUserData} = useContext(ContextProvider)

  const handleChange = (event) => {
    const { name, value } = event.target 
    setDataLogin({...dataLogin, [name]:value})
  }

  const userLogin = (e) => {
    e.preventDefault()
    const userFind = localData.find((user) => user.email == dataLogin.email && user.password == dataLogin.password)

    if (userFind) {
      setUserData(userFind)
    }

  }

  return (
    <div>
        <h1>Colocar sus credenciales</h1>
        <form onSubmit={userLogin} className='flex gap-4 items-end'>
            <label className='flex flex-col'>
                <span>Correo</span>
                <input onChange={handleChange} name="email" type="text" className='border-2 rounded-sm'/>
            </label>
            <label className="flex flex-col">
                <span>Password</span>
                <input onChange={handleChange} name="password" type="password" className='border-2 rounded-sm' />
            </label>
            <button className="bg-gray-200 rounded-sm px-2 py-0.5 w-max h-max">
                Registrar
            </button>
        </form>
    </div>
  )
}

export default Login