import {Outlet} from "react-router-dom"
import Navbar from "./Navbar"

function RootLayout() {
  return (
    <div>
        <Navbar/>

        {/* placeholder of dynamic component loading */}
        <div style={{minHeight:'90vh'}} className="container">
            <Outlet />
        </div>
        
    </div>
  )
}

export default RootLayout