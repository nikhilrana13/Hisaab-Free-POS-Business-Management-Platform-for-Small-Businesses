import { SetUser } from '@/redux/AuthSlice';
import { api } from '@/services/api';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const useLogout = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = async()=>{
        try {
            const response = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`)
            if(response){
                toast.success(response?.message)
                localStorage.removeItem("token")
                dispatch(SetUser(null))
                router.replace("/")
            }
        } catch (error) {
            console.error("failed to logout",error)
            return toast.error(error?.response?.data?.message || "Internal server error")
        }
    }
  return {handleLogout}
}

export default useLogout;
