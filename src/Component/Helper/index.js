import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const errorMessage=(msg)=>{
    toast.error(msg, {
        position: "top-center",
        theme: "colored",
        autoClose: 1000
      })

}
export const successMessage=(msg)=>{
    toast.success(msg, {
        position: "top-center",
        theme: "colored",
        autoClose: 1000
      })

}

