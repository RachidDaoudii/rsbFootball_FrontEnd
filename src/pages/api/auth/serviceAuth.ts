import { useLoginMutation ,useRegisterMutation } from "@/redux/service/auth/authApi";
import React, { useState, useEffect } from 'react';



const usesignin = ()=>{
    const [user,setUser] = useState({email:"",password:""});


    const [login, { data, error, isLoading }] = useLoginMutation();


    const handleInputChange = (e:any)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        console.log(user)
        login(user);
    }


    return {handleInputChange,handleSubmit,}
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