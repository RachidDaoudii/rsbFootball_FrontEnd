
import { useBlogQuery,useGetOnePostQuery,useAddCommentMutation } from "@/redux/service/blog/blogApi";
import React, { useState, useEffect } from 'react';

export const useBlog = () => {
    const { data, error, isLoading, refetch ,isSuccess } = useBlogQuery('');

    return { data, error, isLoading, refetch,isSuccess }
}


 export const useComment = ()=>{

    const [saveComment,{data, error:errorComment, isLoading ,isSuccess:isSuccessComment , isError:isErrorComment}]=useAddCommentMutation()
    
    const [comment,setComment] = useState({
        content:"",
        postId:0
    })

    const handleChangeComment = (e:any) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
       

    };

    const handleSubmitComment = async (e:any)=>{
        e.preventDefault();
        await saveComment(comment)
    }


    return {
        comment,
        handleChangeComment,
        handleSubmitComment,
        errorComment,
        isErrorComment,
        isSuccessComment
    }
}

//  default useBlog;