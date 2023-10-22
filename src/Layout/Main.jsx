import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";


export default function Main() {
  return (
    <div>

        <Outlet/>
        <Footer/>
    </div>
  )
}
