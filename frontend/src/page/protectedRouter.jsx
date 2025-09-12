import { Navigate } from "react-router-dom"

function ProtectedRouter({children}){
   
   const Admin = localStorage.getItem("Admin")
    if(!Admin) { 
        return <Navigate to= "/form" />
    }
    
    return children
}

export default ProtectedRouter