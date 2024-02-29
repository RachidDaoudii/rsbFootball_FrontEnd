import { useRouter } from "next/router";
import APIClient from "../api";
import { toast } from "react-toastify";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const RegisterApi = () => {
  const apiClient = new APIClient("/register");
  const queryClient = useQueryClient();
  const route = useRouter();

  const registerMutation = useMutation<Object, void>({
    mutationFn: (data) => {
      return apiClient.post(data);
    },
    onError: (error) => {
      toast.error("Login Failed");
    }, // Updated function signature
    onSuccess: (data: Object) => {
      // queryClient.setQueryData(["auth"], data);
      toast.success("Login Successfully");
      console.log("success");

      route.push("/auth/signin");
    },
  });

  return registerMutation;
};

export const LoginApi = () => {
  const apiClient = new APIClient("/login");
  const queryClient = useQueryClient();
  const route = useRouter();

  const loginMutation = useMutation<Object, void>({
    mutationFn: (data) => {
      return apiClient.post(data);
    },
    onError: (error) => {
      toast.error("Login Failed");
    }, // Updated function signature
    onSuccess: (data: Object) => {
      queryClient.setQueryData(["auth"], data);
      toast.success("Login Successfully");
      console.log("success");

      route.push("/dashboard");
    },
  });

  return loginMutation;
};
