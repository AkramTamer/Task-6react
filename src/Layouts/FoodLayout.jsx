import FoodSidebar from "../assets/Components/FoodSidebar";
import { Outlet } from "react-router";
export default function FoodLayout() {
  return (
    <div className="flex items-start h-full">
        <FoodSidebar />
        <div className="bg-red-500 h-full grow overflow-auto">
        <Outlet />
    </div>
    </div>
  )
}
