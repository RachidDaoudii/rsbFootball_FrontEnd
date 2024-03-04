import {createPost} from "@/pages/api/blog/query/query.blog";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const useCreatPost = () => {
    const createMutation = createPost();

    const [post, setPost] = useState({
        title: "",
        content: "",
        image: "",
        categoriesId:3,
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };


      const handleSubmit = async (event: any) => {
        event.preventDefault();
        await createMutation.mutate(post);
    };

    return { handleSubmit, handleInputChange ,post };
}