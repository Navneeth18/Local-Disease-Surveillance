import {Outlet} from "react-router-dom"

function RootLayout() {
  return (
    <div>
        
        {/* placeholder of dynamic component loading */}
        <div style={{minHeight:'90vh'}} className="container">
            <Outlet />
        </div>
        
    </div>
  )
}

export default RootLayout