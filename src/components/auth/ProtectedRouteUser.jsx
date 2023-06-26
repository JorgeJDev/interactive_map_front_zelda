import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

export const ProtectedRouteUser = ({children}) => {

    const { user } = useContext(UserContext);
    
  
    if (!user) return <Navigate to="/" />;
   
    
    
    return <>{children}</>;
}
