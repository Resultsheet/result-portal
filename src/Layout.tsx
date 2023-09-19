import SideBar from "@/components/SideBar/SideBar"
import { Outlet } from 'react-router-dom'


function Layout() {

    return (
        <SideBar><Outlet /></SideBar>

    )
}

export default Layout