import { useState, useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const { localData } = useContext(ContextProvider)
    const [dataRegister, setDataRegister] = useState({})
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setDataRegister({...dataRegister, [e.target.name]: e.target.value
        })
    };

    const userRegister = (event) => {
        event.preventDefault()
        const sendedData = JSON.stringify([...localData, dataRegister])
        localStorage.setItem("dbUsers", sendedData)
        navigate('/login')
    };

  return (
    <div>
        <h1>Bienvenido a mi pagina web</h1>
        <form onSubmit={userRegister} className='flex gap-4 items-end'>
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

export default Register