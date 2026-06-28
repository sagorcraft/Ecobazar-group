import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Mainlayout from "./Layout/Mainlayout";

const App = () => {
  return (
    <>
   <Routes>

   <Route element={<Mainlayout/>}>
     <Route path="/" element={<Home/>}/>
   </Route>
   </Routes>
    </>
  )
}

export default App