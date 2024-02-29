import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const useForgetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");


  const handleInputChange = (event: any) => {
    const { value } = event.target;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  

  return { handleSubmit, handleInputChange };
};
