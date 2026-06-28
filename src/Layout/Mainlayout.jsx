import { Outlet } from "react-router"
import Topbar from "../Components/Topbar"


const Mainlayout = () => {
  return (
   <>
   <Topbar/>
   <Outlet/>

   </>
  )
}

export default Mainlayout