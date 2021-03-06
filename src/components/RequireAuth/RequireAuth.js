
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
const RequireAuth = ({ children }) => {

  const [user, loading] = useAuthState(auth)
  console.log(user)
  let location = useLocation();
  if (loading) {
    return
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children
}

export default RequireAuth;