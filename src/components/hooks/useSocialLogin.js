
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import {useLocation, useNavigate} from "react-router-dom"
import auth from "../firebase.init";


const useSocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
 const googleProvider = new GoogleAuthProvider()


// Google 
    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success('Thanks for SignUp ')
                navigate(from, { replace: true });
            })
            .catch(() => toast.error('Something went wrong'))
    }

    return {
        signInGoogle,
       

    }
}
export default useSocialLogin;