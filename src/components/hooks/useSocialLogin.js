
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import auth from "../firebase.init";


const useSocialLogin = () => {
    const navigate = useNavigate()
    
 const googleProvider = new GoogleAuthProvider()
 const githubProvider = new GithubAuthProvider()


// Google 
    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success('Thanks for SignUp ')
                navigate('/')
            })
            .catch(() => toast.error('Something went wrong'))
    }
// Github
    const signGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                toast.success('Thanks for SignUp ')
                navigate('/')
            })
            .catch((err) => {
                toast.error('Something went wrong')
                console.log(err)
            })
    }

    return {
        signInGoogle,
        signGithub,

    }
}
export default useSocialLogin;