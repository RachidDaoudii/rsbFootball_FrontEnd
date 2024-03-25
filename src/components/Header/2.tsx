"useclient"
import React, { useState, useEffect } from 'react';import Image from "next/image";
import { Inter } from "next/font/google";
import img from "@/styles/images/footer/logo.png";
import imgplayer from "@/styles/images/home/5.jpg";
import"@/components/PrelineScript";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from 'next/router';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement,clear} from '@/redux/features/cart/cartSlice';
import { Product } from "@/types";
import { setlogin} from "@/redux/features/auth/authSlice"

export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state?.cart?.shoppingCart);
  const auth = useSelector((state: any) => state?.auth);
  const router = useRouter();
  const {route} = router
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleIncrement = (id: number) => {
    dispatch(increment(id));
  };

  const handleDncrement = (id: number) => {
    dispatch(decrement(id));
  };

  const handleClear = (id: number)=>{
    dispatch(clear(id))
  }
  
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const getData = JSON.parse(localStorage.getItem("user"));
      
      dispatch(setlogin(getData));
    }
  }, []);


  const handleLogout = async()=>{
    const response = await fetch('http://localhost:4000/api/auth/logout', {
    method: 'POST',
    credentials: 'include'
    })

    if (response.ok) {
        localStorage.removeItem('user');
      dispatch(setlogin({
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        isAuth: false,
        roles:[]
      }));
        // router.push('/')
    } else {
    
    }
}
  return (
    <>
      <div className={`flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0 nav border-gray-200 dark:border-gray-600 dark:bg-gray-900 ${route === '/'? "":"bg-gray-800"}`}>
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
            <Image
              width="30"
              src={img}
              className="mr-3 h-6 sm:h-9 lazy"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              rsbfootball
            </span>
          </Link>
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                  <Link
                    className="font-medium text-white py-3 md:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                    aria-current="page"
                  >
                    Home
                  </Link>

                  <Link
                    className="font-medium text-white hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/blog"
                  >
                    Blogs
                  </Link>

                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                    <button
                      type="button"
                      className="flex items-center w-full text-white hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Club
                      <svg
                        className="flex-shrink-0 ms-2 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div className="absolute z-20 hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden top-full end-0 overflow-hidden bg-gray-700 md:shadow-2xl rounded-lg dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                      <div className="grid grid-cols-2 md:grid-cols-10">
                        <div className="md:col-span-3">
                          <div className="flex flex-col py-6 px-3 md:px-6">
                            <div className="space-y-4">
                              <span className="mb-2 text-xs font-semibold uppercase text-white dark:text-gray-200">
                                Playres
                              </span>

                              <Link
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="/categories"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                                <div className="grow">
                                  <p>Categories</p>
                                </div>
                              </Link>

                              <a
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect
                                    width="7"
                                    height="7"
                                    x="14"
                                    y="3"
                                    rx="1"
                                  />
                                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                                </svg>
                                <div className="grow">
                                  <p>Integrations</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1="16" x2="8" y1="13" y2="13" />
                                  <line x1="16" x2="8" y1="17" y2="17" />
                                  <line x1="10" x2="8" y1="9" y2="9" />
                                </svg>
                                <div className="grow">
                                  <p>Guides</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m7 11 2-2-2-2" />
                                  <path d="M11 13h4" />
                                  <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="3"
                                    rx="2"
                                    ry="2"
                                  />
                                </svg>
                                <div className="grow">
                                  <p>API Reference</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                                <div className="grow">
                                  <p>API Status</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-3">
                          <div className="flex flex-col py-6 px-3 md:px-6">
                            <div className="space-y-4">
                              <span className="mb-2 text-xs font-semibold uppercase text-white dark:text-gray-200">
                                Support
                              </span>

                              <a
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                  <path d="M12 17h.01" />
                                </svg>
                                <div className="grow">
                                  <p>Help Center</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="4" />
                                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                                </svg>
                                <div className="grow">
                                  <p>Developer Hub</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                  <circle cx="9" cy="7" r="4" />
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <div className="grow">
                                  <p>Community Forum</p>
                                </div>
                              </a>
                            </div>

                            <div className="mt-7 space-y-4">
                              <span className="mb-2 text-xs font-semibold uppercase text-white dark:text-gray-200">
                                Partners
                              </span>

                              <a
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                  <path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
                                </svg>
                                <div className="grow">
                                  <p>Become a Partner</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-white hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m15 5 4 4" />
                                  <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                                  <path d="m8 6 2-2" />
                                  <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
                                  <path d="m18 16 2-2" />
                                  <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                                </svg>
                                <div className="grow">
                                  <p>Build on Preline</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-full md:col-span-4">
                          <div className="flex flex-col bg-gray-50 p-6 dark:bg-gray-700">
                            <span className="text-xs font-semibold uppercase text-white dark:text-gray-200">
                              Customer stories
                            </span>

                            <a
                              className="mt-4 group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              href="#"
                            >
                              <div className="aspect-w-16 aspect-h-9">
                                <Image
                                  className="w-full object-cover rounded-lg"
                                  src={imgplayer}
                                  alt="Image Description"
                                />
                              </div>
                              <div className="mt-2">
                                <p className=" dark:text-gray-200">
                                  Preline Projects has proved to be most
                                  efficient cloud based project tracking and bug
                                  tracking tool.
                                </p>
                                <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                                  Learn more
                                  <svg
                                    className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="m9 18 6-6-6-6" />
                                  </svg>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    className="font-medium text-white hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href={'/marketplace'}
                  >
                    Marketplace <i className="fa-solid fa-shop"></i>
                  </Link>

                  <a
                    className="font-medium text-white hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    tickets
                  </a>
                  <a
                    className="font-medium text-white hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    contact
                  </a>
                  {auth?.email == undefined  ? (
                    <Link className="flex items-center gap-x-2 font-semibold text-white hover:text-orange-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-orange-500" href={'/auth/signin'}>
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Log in
                    </Link>
                    ):(
                      <div className="hs-dropdown relative inline-flex">
                  <button id="hs-dropdown-with-icons" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg   text-gray-800 shadow-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  {auth?.email == undefined  ? (
                    null
                    ):(
                      <div className="text-white">{auth?.firstName+" "+auth?.lastName}</div>
                    )
                  }
                    <svg className="hs-dropdown-open:rotate-180 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>

                  <div className=" z-10 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-icons">
                    <div className="py-2 first:pt-0 last:pb-0">
                      <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href={'/dashboard'}>
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                        Dashbord
                      </Link>
                      <button onClick={handleLogout} className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                        Logout
                      </button>
                    </div>
                  </div>
                  </div>
                    )
                  }
                  
                  
                  <button className="text-white" onClick={()=>setOpen(true) }>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <React.Fragment>
      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
      <Drawer open={open} onClose={closeDrawer} className="p-4 bg-gray-100" placement="right" placeholder={null}>
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" placeholder={null}>
            Items ({cart.length})
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer} placeholder={null}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="card mt-5 p-2" >
          <div className="flex flex-col space-y-3.5 bg-gray-200 rounded-md p-1"  style={{ overflowY: 'auto', maxHeight: '320px' }}>
            {
              cart.length >= 1 ? (cart.length >= 1 && cart.map((item:Product,i:number)=>{
                return(
                  <div className="group flex items-center justify-between space-x-3 border border-orange-200 p-2 rounded-md">
              <div className="flex items-center space-x-4">
                <div className="relative flex">
                  <img
                    src={item?.image}
                    className="mask is-star h-11 rounded-md bg-transparent"
                    alt="image"
                  />
                  <div className="absolute top-0 right-0 -m-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full border border-gray-300 bg-gray-300 px-1 text-tiny+ font-medium leading-none text-slate-800 dark:border-navy-700 dark:bg-navy-450 dark:text-white">
                    {item?.quantity}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center space-x-1">
                    <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                      {item?.name}
                    </p>
                  </div>
                  <div className="flex justify-center">
                  <button className="bg-gray-200 rounded-full p-2 mr-2 hover:bg-orange-300 focus:outline-none"
                  onClick={() => handleIncrement(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="bg-gray-200 rounded-full p-2 hover:bg-orange-300 focus:outline-none"
                  onClick={() => handleDncrement(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 10a1 1 0 010 2H5a1 1 0 010-2h10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                </div>
              </div>
              <div className="flex">
              <button onClick={() => handleClear(item.id)} className=" ms-6 bg-gray-200 rounded-full p-0.5 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="font-inter font-semibold">${item?.price}</p>
              </div>
            </div>
                )
              })) : (<div className="text-orange-600 mx-8">Not Found Products</div>)
              
            }
              
            {/* end */}
          </div>
    <div className="my-4 h-px bg-slate-200 dark:bg-navy-500" />
    <div className="space-y-2 font-inter">
      <div className="flex justify-between text-slate-600 dark:text-navy-100">
        <p>Subtotal</p>
        <p className="font-medium tracking-wide">30.00$</p>
      </div>
      <div className="flex justify-between text-xs+">
        <p>Tax</p>
        <p className="font-medium tracking-wide">5.00$</p>
      </div>
      <div className="flex justify-between text-base font-medium text-primary dark:text-accent-light">
        <p>Total</p>
        <p>{cart.reduce((total:number, product:any) => {
            return total + (product.price * product.quantity);
          }, 0+ 30.00 + 5.00)
          .toFixed(2) 
          }</p>
      </div>
    </div>
    <div className="mt-5 grid grid-cols-3 gap-4 text-center">
      <button className="rounded-lg border border-slate-200 p-3 dark:border-navy-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="mt-1 font-medium text-primary dark:text-accent-light">
          Cash
        </span>
      </button>
      <button className="rounded-lg border border-slate-200 p-3 dark:border-navy-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
        <span className="mt-1 font-medium text-primary dark:text-accent-light">
          Debit
        </span>
      </button>
      <button className="rounded-lg border border-slate-200 p-3 dark:border-navy-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
        <span className="mt-1 font-medium text-primary dark:text-accent-light">
          Scan
        </span>
      </button>
    </div>
    <div className="flex justify-center ">
    <Link href={"/marketplace/checkout"} className="rounded-lg p-2 mt-5 bg-orange-600 font-medium text-white hover:bg-orange-focus focus:bg-orange-focus active:bg-orange-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
      <span>Checkout</span>
      <span className="ms-2">${cart.reduce((total:number, product:any) => {
            return total + (product.price * product.quantity);
          }, 0+ 30.00 + 5.00)
          .toFixed(2) 
          }</span>
    </Link>
    </div>
    
  </div>
      </Drawer>
    </React.Fragment>
    </>
  );
}
