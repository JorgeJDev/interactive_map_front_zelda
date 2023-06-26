
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context";

export const ProtectedRoute = ({ children }) => {

  const { user } = useContext(UserContext);
  
  if (user && user.role === "user" || !user ) return <Navigate to="/" />;

  return <>{children}</>;
  
};
