"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { RegisterApi } from "@/pages/api/auth/query/query.auth";

export const useSignUp = () => {
  const registerMutation = RegisterApi();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    urlClub: "clun12",
  });

 
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await registerMutation.mutate(user);
  };

  

  return { handleSubmit, handleInputChange };
};
