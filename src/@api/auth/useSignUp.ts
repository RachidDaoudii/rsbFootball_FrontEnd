"use client";
import { useRegisterMutation } from "@/redux/service/auth/authApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

export const useSignUp = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    urlClub: "clun12",
  });

  const [register, { isLoading, error, isSuccess, isError }] =
    useRegisterMutation();
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await register(user);
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/auth/signin");
      toast.success("Votre compte a été créé avec succès");
    }
  }, [error, isSuccess, isError]);

  return { handleSubmit, handleInputChange };
};
