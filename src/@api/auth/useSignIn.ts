"use client";
import { useLoginMutation } from "@/redux/service/auth/authApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const useSignIn = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [login, { isLoading, error, isSuccess, isError, data }] =
    useLoginMutation();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await login(user);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      if (data.data) {
        router.push("/dashboard");
      }
      if(isError){
        toast.error(error);
      }
    }
  }, [error, isSuccess, isError]);

  return { handleSubmit, handleInputChange };
};
