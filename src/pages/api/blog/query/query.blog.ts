import { useRouter } from "next/router";
import APIClient from "../api";
import { toast } from "react-toastify";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const createPost = () => {
  const apiClient = new APIClient("/post");
  const queryClient = useQueryClient();
  const route = useRouter();

  const createPostMutation = useMutation<Object, void>({
    mutationFn: (data) => {
      return apiClient.post(data);
    },
    onError: (error) => {
        console.log(error);
      toast.error("Login Failed");
    }, // Updated function signature
    onSuccess: (data: Object) => {
    //   // queryClient.setQueryData(["auth"], data);
    //   toast.success("Login Successfully");
    //   console.log("success");

    //   route.push("/auth/signin");
    },
  });

  return createPostMutation;
};


