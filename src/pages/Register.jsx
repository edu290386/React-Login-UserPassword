import { useState } from 'react'

const Register = () => {
    const [dataRegister, setDataRegister] = useState({})

    const handleChange = (e) => {
        setDataRegister({...dataRegister, [e.target.name]: e.target.value
        })
        console.log(dataRegister)
    };

  return (
    <div>
        <h1>Bienvenido a mi pagina web</h1>
        <form className='flex gap-4 items-end'>
            <label className='flex flex-col'>
                <span>Correo</span>
                <input onChange={handleChange} value={dataRegister.email} name="email" type="email" className='border-2 rounded-sm'/>
            </label>
            <label className="flex flex-col">
                <span>Password</span>
                <input onChange={handleChange} value={dataRegister.password} name="password" type="password" className='border-2 rounded-sm' />
            </label>
            <button className="bg-gray-200 rounded-sm px-2 py-0.5 w-max h-max">
                Registrar
            </button>
        </form>
    </div>
  )
}

export default Register