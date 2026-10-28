import { Outlet } from "react-router"
import Navber from "../assets/Components/Navber"
export default function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
        <Navber />
    <div className=" grow overflow-auto">
      <Outlet />
    </div>
    </div>
  )
}
