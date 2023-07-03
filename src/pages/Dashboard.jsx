import DashboardNavbar from "../components/DashboardNavbar"
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <DashboardNavbar />
        <Outlet />
    </div>
    
  )
}

export default Dashboard