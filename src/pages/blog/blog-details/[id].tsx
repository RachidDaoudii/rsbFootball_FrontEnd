"use client";
import Header from "@/components/Header/2";
import Footer from "@/components/footer";
import { useRouter } from 'next/router';
import {formatDate} from "@/components/dateTime/formatDate";
import { useGetOnePostQuery } from "@/redux/service/blog/blogApi";
import React, { useState, useEffect } from 'react';
import Comment from "@/components/comment"
import { toast } from "react-toastify";
import { useComment } from "@/pages/api/blog/serviceBlog";
import Spinner from "@/components/spinner";
import { Blog } from "@/types";
import { comment } from "@/types";


const SingleBlogPage =  () => {
   const router = useRouter();
   const { id } =  router.query;
   const { data, error, isLoading, refetch ,isSuccess } = useGetOnePostQuery(id);
   const {comment,handleChangeComment , handleSubmitComment ,errorComment,isErrorComment ,isSuccessComment}= useComment()
 
   const [blog,setBlog] = useState<Blog>()

   useEffect(() => {
    const fetchData = async () => {
      
      try {
        const refetchResult = await refetch();
        if (isErrorComment) {
          toast.error("Please login");
        }
  
        if (isSuccess) {
          comment.postId = data.id;
          await setBlog(data);
        }
  
        if ( isSuccessComment ) {
          await setBlog(data);
        }

        if (isSuccess || (refetchResult && refetchResult.isSuccess)) {
          const postData = refetchResult ? refetchResult.data : data;
          await setBlog(postData);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  
    fetchData(); 
  
  }, [id,isLoading,isSuccess, isErrorComment, errorComment, isSuccessComment]);
  
  if(isLoading){
    return(<Spinner/>)
  }
  

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
   <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
      <div className="mx-auto max-w-screen-md ">
         <div className="flex justify-center">
            <div className="flex gap-3">
               <a href="/category/technology">
               {blog && blog.categories &&  (
                  <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">
                    {blog.categories.name}
                  </span>
                )}
               </a>
            </div>
         </div>
         <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
         {blog?.title}
         </h1>
         <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
               <div className="relative h-10 w-10 flex-shrink-0">
                  <a href="/author/mario-sanchez">
                  <img
                  alt="Mario Sanchez"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="rounded-full object-cover"
                  sizes="40px"
                  srcSet="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
                  src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                 
                  style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                  }}
                  />
                  </a>
               </div>
               <div>
                  <p className="text-gray-800 dark:text-gray-400">
                     <a href="/author/mario-sanchez">{blog?.users?.lastName +" "+blog?.users?.firstName  }</a>
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                     <time
                        className="text-gray-500 dark:text-gray-400"
                        dateTime="2022-10-21T15:48:00.000Z"
                        >
                     {formatDate(blog?.createdAt)}
                     </time>
                     <span>· 8 min read</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
      <img
      alt="Thumbnail"
      loading="eager"
      decoding="async"
      data-nimg="fill"
      className="object-cover"
      sizes="100vw"
      src={blog?.image}
      style={{
      position: "absolute",
      height: "100%",
      width: "100%",
      inset: 0,
      color: "transparent"
      }}
      />
   </div>
   <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <article className="mx-auto max-w-screen-md ">
         <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            <p>
               {blog?.content}
            </p>
         </div>
        
      </article>
   </div>
</div>
<div className="mx-auto max-w-screen-md">
<div className="flex space-x-4 overflow-x-auto">
    <div className="avatar h-12 w-12">
      <img
        className="rounded-full"
        src="https://wac-cdn.atlassian.com/fr/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1472"
        alt="avatar"
      />
      <div
        className="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-info dark:border-navy-700"
      ></div>
    </div>
    <div
      className="w-full rounded-xl rounded-tl-none border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400"
    >
      <label className="block">
        <textarea
          name="content"
          placeholder="Write a comment"
          value={comment.content}
          onChange={handleChangeComment}
          className="form-textarea w-full resize-none bg-transparent p-3 pb-0 placeholder:text-slate-400/70 focus:outline-none hover:border-red-600"
        ></textarea>
      </label>
      <div className="flex justify-between p-2.5">
        <div className="flex items-end space-x-1">
          <button
            className="btn -ml-1 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
          <button
            className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </button>
          <button
            className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
        onClick={handleSubmitComment}
          className="btn rounded-md bg-orange-500 px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
          Comment
        </button>

      </div>
    </div>
  </div>
   
</div>

<div className="mx-auto max-w-screen-md">
<ol className="comment-list mt-5">
         { blog?.comments && blog.comments.length > 0 ?(
            blog.comments.map((comment :comment,i:number)=>(<Comment key={i} comment={comment}/>))
         ):(null)}
  </ol>
</div>

      <div>
        <Footer />
      </div>
     
    </>
  );
};

export default SingleBlogPage;
