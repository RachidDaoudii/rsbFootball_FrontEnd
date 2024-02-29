"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { LoginApi } from "@/pages/api/auth/query/query.auth";

export const useSignIn = () => {

  const loginMutation = LoginApi();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });



  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await loginMutation.mutate(user);
  };



  return { handleSubmit, handleInputChange };
};
