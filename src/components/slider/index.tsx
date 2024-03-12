"use client";
import React, { useState, useEffect } from 'react';
import { useBlog } from "@/pages/api/blog/serviceBlog";
import Link from "next/link";
import {formatDate} from "@/components/dateTime/formatDate";

const Slider = ()=>{

  const {data, error, isLoading, refetch,isSuccess } = useBlog()
  const [blogs,setBlogs] = useState([])
  
  
    useEffect(() => {
      if(isSuccess){
        setBlogs(data)
      }
    },[isSuccess])

    return (
        <>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-8 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">The Blog</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Preline.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {
              blogs && blogs.map((blog:any,i)=>{
                if(i<=1){
                  {/* <!-- Card --> */}
                    return (
                    <Link className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"  href={{
                      pathname: '/blog/blog-details/[id]',
                      query: { id: blog.id },
                    }}>
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                      <img className="size-full absolute top-0 start-0 object-cover" src={blog?.image} alt="Image Description"/>
                    </div>

                    <div className="absolute top-0 inset-x-0 z-10">
                      <div className="p-4 flex flex-col h-full sm:p-6">
                        {/* <!-- Avatar --> */}
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img className="size-[46px] border-2 border-white rounded-full" src="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75" alt="Image Description"/>
                          </div>
                          <div className="ms-2.5 sm:ms-4">
                            <h4 className="font-semibold text-white">
                            {blog.users.lastName +" "+blog.users.firstName  }
                            </h4>
                            <p className="text-xs text-white/[.8]">
                            {formatDate(blog.createdAt)}
                            </p>
                          </div>
                        </div>
                        {/* <!-- End Avatar --> */}
                      </div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 z-10">
                      <div className="flex flex-col h-full p-4 sm:p-6">
                        <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                        {blog.title}
                        </h3>
                        <p className="mt-2 text-white/[.8]">
                        {blog.categories.name}
                        </p>
                      </div>
                    </div>
                  </Link>)
          {/* <!-- End Card --> */}
                }
              })
            }
            

           
          </div>
        </div>
      </>
    )
}

export default Slider;