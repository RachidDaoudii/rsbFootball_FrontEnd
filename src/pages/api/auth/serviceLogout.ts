
import { logout} from "@/redux/features/auth/authSlice"
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const serviceLogout = ()=>{
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = async () =>{
        await dipatch(logout())
        await router.push('/')
    }

    return {
        handleLogout
    }

}

export default serviceLogout