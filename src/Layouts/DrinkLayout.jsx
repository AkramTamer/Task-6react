import { Outlet } from "react-router"
import DrinkSidebar from "../assets/Components/DrinkSidebar"

export default function DrinkLayout() {
  return (
    <div className="flex items-start h-full">
       <DrinkSidebar /> 
       <div className="bg-green-500 h-full grow overflow-auto">
        <Outlet />
       </div>
    </div>
  )
}
