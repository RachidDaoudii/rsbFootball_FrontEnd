import { useForgotPasswordMutation } from "@/redux/service/auth/authApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const useForgetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [forgotPassword, { isSuccess, isError, error, data }] =
    useForgotPasswordMutation();

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await forgotPassword({ email });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.user.message);
      router.push("/auth/signin");
    }

    if (isError) {
      toast.error(`${error?.data?.message[0]}`);
    }
  }, [isSuccess, isError, error, data]);

  return { handleSubmit, handleInputChange };
};
