import { NavLink } from "react-router"
export default function DrinkSidebar() {
  return (
    <aside className="h-full sticky left-0 top-0 bg-blue-700 p-3 min-w-50">
        <ul className="flex flex-col gap-5" >
               <li>
                <NavLink to={"/drink"} className={"bg-white block w-full p-2 rounded-lg text-center text-xl font-bold hover:bg-yellow-300"}>Guava</NavLink>
            </li>
            <li>
                <NavLink to={"lemone"} className={"bg-white block w-full p-2 rounded-lg text-center text-xl font-bold hover:bg-yellow-300"}>Lemone</NavLink>
            </li>
            <li>
                <NavLink to={"mango"} className={"bg-white block w-full p-2 rounded-lg text-center text-xl font-bold hover:bg-yellow-300"}>Mango</NavLink>
            </li>
        </ul>
    </aside>
  )
}
