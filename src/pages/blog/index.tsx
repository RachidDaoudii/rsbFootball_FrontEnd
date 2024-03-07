"use client";
import React, { useState, useEffect } from 'react';
import CardTwoItem from "@/components/Blog/CardTwoItem";
import CardItem from "@/components/Blog/CardItem";
// import { Metadata } from "next";
import Header from "@/components/Header/2";
import Footer from "@/components/footer";
import type { NextPage } from "next";
// import useBlog from '../api/blog/serviceBlog';
import { useBlog } from "@/pages/api/blog/serviceBlog";
import Link from "next/link";
import {formatDate} from "@/components/dateTime/formatDate";

const LigthMode: NextPage = () => {
  const {data, error, isLoading, refetch,isSuccess } = useBlog()
const [blogs,setBlogs] = useState([])


  useEffect(() => {
    if(isSuccess){
      setBlogs(data)
    }
  },[isSuccess])

  return (
    <>
     <Header />
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
    <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
      {/* two */}

      {blogs && blogs.map((blog,i)=>{
        if(i<=1){
          return (
          <div className="group cursor-pointer">
          <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
            <Link
              className="relative block aspect-video"
              href={{
                pathname: '/blog/blog-details/[id]',
                query: { id: blog.id },
              }}
            >
              <img
                alt="Graphics"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-all"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent"
                }}
                sizes="(max-width: 768px) 30vw, 33vw"
                src={blog?.image}
                // src="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </Link>
          </div>
          <div className="">
            <div>
              <div className="flex gap-3">
                <a href="/category/lifestyle">
                  <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
                  {blog.categories.name}
                  </span>
                </a>
              </div>
              <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                <Link href={{
          pathname: '/blog/blog-details/[id]',
          query: { id: blog.id },
        }}>
                  <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  {blog.title}
                  </span>
                </Link>
              </h2>
              <div className="hidden">
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <a href="/post/5-effective-brain-recharging-activities-no-one-is-talking-about">
                    No wonder mental health issues are at an all-time high. As my
                    friend John called it, we’re already in the third world war —
                    and the battlegrounds are our heads.
                  </a>
                </p>
              </div>
              <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                <a href="/author/joshua-wood">
                  <div className="flex items-center gap-3">
                    <div className="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Joshua Wood"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="rounded-full object-cover"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent"
                        }}
                        sizes="20px"
                        srcSet="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=3840&q=75"
                      />
                    </div>
                    <span className="truncate text-sm">{blog.users.lastName +" "+blog.users.firstName  }</span>
                  </div>
                </a>
                <span className="text-xs text-gray-300 dark:text-gray-600">
                  •
                </span>
                <time className="truncate text-sm">{formatDate(blog.createdAt)}</time>
              </div>
            </div>
          </div>
        </div> )
        }
      })}
      
  
      {/* two */}

    </div>
    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
      {/* card item */}
      {
        blogs && blogs.map((blog,i)=>{
          if(i>1){
            return (
              <CardItem blog={blog}/>
            )
          }
        })
      }

      {/* card item */}
    </div>
    <div className="mt-10 flex justify-center">
      <a
        className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
        href="/archive"
      >
        <span>View all Posts</span>
      </a>
    </div>
  </div>
  <div>
    <Footer/>
  </div>
  </>
  );
};

export default LigthMode;
