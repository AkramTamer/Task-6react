import { NavLink } from "react-router"
const FoodSidebar = () => {
  return (
    <aside className=" h-full sticky left-0 top-0 bg-sky-500 p-3 min-w-50 ">
        <ul className="flex flex-col gap-5">
            <li>
                <NavLink to={"/food"} className={"bg-white block w-full p-2 rounded-lg text-center text-xl font-bold hover:bg-yellow-300"}>Burger</NavLink>
            </li>
            <li>
                <NavLink to={"pizza"} className={"bg-white block w-full p-2 rounded-lg text-center text-xl font-bold hover:bg-yellow-300"}>Pizza</NavLink>
            </li>
            <li>
                <NavLink to={"saled"} className={"bg-white block w-full p-2 rounded-lg text-center text-xl font-bold hover:bg-yellow-300"}>Saled</NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default FoodSidebar