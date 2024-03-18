import { useLoginMutation ,useRegisterMutation } from "@/redux/service/auth/authApi";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { toast } from "react-toastify";
import { setlogin} from "@/redux/features/auth/authSlice"
import { useDispatch } from 'react-redux';

const usesignin = ()=>{
    const dispatch = useDispatch()
    const router = useRouter()
    const [user,setUser] = useState({email:"",password:""});


    const [login, { data, error, isLoading,isSuccess,isError }] = useLoginMutation();


    const handleInputChange = (e:any)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        login(user);
    }

    useEffect(()=>{
        if(isSuccess){
            toast.success("login successfully");
              dispatch(setlogin(data))
            router.push('/')
        }
        if(isError){
            toast.error("User Not Found", {
            });
        }
    },[isSuccess,isError])


    return {handleInputChange,handleSubmit}
}


const usesignup = ()=>{
    const [user,setUser] = useState({
        lastName:"",
        firstName:"",
        email:"",
        password:""});

    const [register, { data:registerData, error:registerError, isLoading:registerLoading }] = useRegisterMutation();

    const handleInputChange = (e:any)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        register(user);
    }


    return {handleInputChange,handleSubmit}
}


export {usesignin,usesignup}