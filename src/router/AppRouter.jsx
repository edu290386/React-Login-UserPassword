import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import HomeRouter from '../pages/HomeRouter'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import Dashboard from '../pages/Dashboard'
import HomeProducts from '../pages/HomeProducts'
import Cart from '../pages/Cart'
import DetailProduct from '../pages/DetailProduct'
import HomeDashboard from '../pages/HomeDashboard'

const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element={<HomeRouter/>}>
                <Route index element={<Home/>} />
                <Route path="register" element={<Register/>} />
                <Route path="login" element={<Login/>} />
            </Route>
            <Route path="/dashboard" element={<PrivateRouter><Dashboard/></PrivateRouter>}>
                <Route index element={<HomeDashboard />} />
                <Route path="products" element={<HomeProducts />}>
                    <Route path=':idProduct' element={<DetailProduct />}/>
                </Route>
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
  )
}

export default AppRouter