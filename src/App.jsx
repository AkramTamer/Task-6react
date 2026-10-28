import { Route,Routes } from "react-router";
import Home from "./assets/Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import FoodLayout from "./Layouts/FoodLayout";
import Burger from "./assets/Pages/Burger"
import Pizza from "./assets/Pages/Pizza"
import Saled from "./assets/Pages/Saled"
import DrinkLayout from "./Layouts/DrinkLayout";
import Guava from "./assets/Pages/Guava";
import Lemone from "./assets/Pages/Lemone";
import Mango from "./assets/Pages/Mango";
export default function App()  {
  return (
  <>
  
     <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path= "/food" element={<Food />} />
      <Route path= "/drinks" element={<Drink />} /> */}

      <Route path="/" element={<MainLayout />} >
      <Route index element={<Home />}/>

      <Route path="food" element={<FoodLayout />}>
      <Route index element={<Burger />} />
      <Route path="pizza"element={<Pizza />} />
      <Route path="saled"element={<Saled />} />
      </Route>
      <Route path="drinks" element={<DrinkLayout />}>
      <Route index element={<Guava />}/>
      <Route path="lemone" element={<Lemone />}/>
      <Route path="mango" element={<Mango />}/>
      </Route>
      </Route>
      </Routes> 
    </>
  );
  
}
