import { Link,NavLink} from "react-router"
const Navber = () => {
  return (
    <nav className=" navber shadow-2xl py-5">
        <div className="container flex justify-between items-center">
    
    <Link to={"/"} className="text-4xl font-bold">EraaSoft</Link>
    <ul className="flex gap-3">
        <li>
            <NavLink className="text-xl font-bold hover:text-sky-500 duration-300" to= "/">Home</NavLink>
        </li>
        <li>
            <NavLink className="text-xl font-bold hover:text-sky-500 duration-300" to= "/food">Food</NavLink>
        </li>
        <li>
            <NavLink className="text-xl font-bold hover:text-sky-500 duration-300" to= "/drinks">Drink</NavLink>
        </li>
    </ul>
    
    </div>
    </nav>
   
  )
}

export default Navber