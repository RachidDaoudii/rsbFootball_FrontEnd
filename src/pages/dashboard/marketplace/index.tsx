"use Client";
import React, { useState, useEffect } from 'react';
import LayoutDashboard from "../index" 
import Table from "@/components/Tables/users"
import { useOrdersQuery ,useDeliveredMutation } from "@/redux/service/marketplace/marketplaceApi";
import Spinner from "@/components/spinner";
import { Order } from "@/types";
import {formatDate} from "@/components/dateTime/formatDate";
import Link from "next/link";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton
  } from "@material-tailwind/react";
const Marketplace = ()=>{

    const { data, error, isLoading, refetch ,isSuccess } = useOrdersQuery("");
    const [delivered,{ data :dataDelivered , error:errorDelivered, isLoading:isLoadingDelivered ,isSuccess:isSuccessDelivered }] = useDeliveredMutation("");

    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);


    if(isLoading){
        return (<Spinner/>)
    }


    return (
        <LayoutDashboard>
            <>
            <div className="mt-4 mb-2">
            <ol className="flex items-center whitespace-nowrap p-2 border-y border-gray-200 dark:border-gray-700" aria-label="Breadcrumb">
              <li className="inline-flex items-center">
                <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                  <svg className="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Dashbord
                </a>
                <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </li>
              <li className="inline-flex items-center">
                <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                  <svg className="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
                  Marketplace
                </a>
              </li>
            </ol>
            </div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-4 mx-auto">
                {/* <!-- Card --> */}
                <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                        {/* <!-- Header --> */}
                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Orders
                            </h2>
                        </div>
            
                        
                        </div>
                        {/* <!-- End Header --> */}
            
                        {/* <!-- Table --> */}
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-slate-800">
                            <tr>
                            <th scope="col" className="ps-6 py-3 text-start">
                            </th>
            
                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                ORDER
                                </span>
                                </div>
                            </th>
            
                            <th scope="col" className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                DATE
                                </span>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                PRODUCTS
                                </span>
                                </div>
                            </th>
            
                            <th scope="col" className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                CUSTOMER
                                </span>
                                </div>
                            </th>
            
                            <th scope="col" className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                PAYMENT STATUS
                                </span>
                                </div>
                            </th>
            
                           
            
                            <th scope="col" className="px-6 py-3 text-end"></th>
                            </tr>
                        </thead>
            
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {/* start */}
                            {
                                data.map((order:Order)=> {
                                    return(<tr><td className="size-px whitespace-nowrap">
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="pe-6 py-2">
                                            <Link className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500" href="#">#35463</Link>
                                        </div>
                                        </td>
                                    <td className="h-px w-10 whitespace-nowrap">
                                        <span class="text-sm text-gray-600 dark:text-gray-400">{formatDate(order.createdAt)}</span>
                                            
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="block relative z-10" >
                                            <div className="px-6 py-2 flex -space-x-2">
                                                {order?.orderProducts.map((item)=>(
                                                    <Link className="hs-tooltip inline-flex" href={`/${item?.product?.id}`}>
                                                    <img className="hs-tooltip-toggle inline-block size-6 rounded-full ring-2 ring-white dark:ring-gray-800" src={item?.product.image} alt="Image Description"/>
                                                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                                                    David Harrison
                                                    </span>
                                                </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                        <div className="grow">
                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{order.customerFirstName+" "+order.customerLastName}</span>
                                            <span className="block text-sm text-gray-500">{order.customerEmail}</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            {
                                            order.isDelivered === false && order.isPaid === false ? 
                                            (<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                                </svg>
                                                Pending
                                            </span>)
                                             : 
                                             order.isDelivered === true && order.isPaid === false? 
                                             (<span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                                </svg>
                                                Delivered
                                            </span>):
                                            order.isDelivered === true && order.isPaid === true ? 
                                            (<span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                               <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                               </svg>
                                               Paid
                                           </span>)
                                            :null
                                            }
                                            
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="py-1.5 flex">
                                        <button type="button" className="block" data-hs-overlay="#hs-ai-invoice-modal" onClick={handleOpen} variant="gradient">
                                            <span className="px-1 py-1.5">
                                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                                </svg>
                                                View
                                            </span>
                                            </span>
                                        </button>
                                        <button type="button" onClick={async ()=>{
                                            await delivered(order.id)
                                            await refetch()
                                        }} className="block" data-hs-overlay="#hs-ai-invoice-modal">
                                            <span className="px-1 py-1.5">
                                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                               </svg>
                                                Delivered
                                            </span>
                                            </span>
                                        </button>
                                        </div>
                                        
                                    </td></tr>)
                                })
                            }
                            
            
                        </tbody>
                        </table>
                        {/* <!-- End Table --> */}
            
                        {/* <!-- Footer --> */}
                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{data.length}</span> results
                            </p>
                        </div>
            
                        <div>
                            <div className="inline-flex gap-x-2">
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                Prev
                            </button>
            
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Next
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                            </div>
                        </div>
                        </div>
                        {/* <!-- End Footer --> */}
                    </div>
                    </div>
                </div>
                </div>
                {/* <!-- End Card --> */}
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
                }}
                className="relative flex flex-col bg-white shadow-lg rounded-xl pointer-events-auto dark:bg-gray-800"
            >
                <div >
                    <div className="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl">
                    {/* Close Button */}
                    <div className="absolute top-2 end-2">
                    <IconButton
                            color="blue-gray"
                            size="sm"
                            variant="text"
                            onClick={handleOpen}
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
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
                    {/* End Close Button */}
                    {/* SVG Background Element */}
                    <figure className="absolute inset-x-0 bottom-0">
                        <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1920 100.1"
                        >
                        <path
                            fill="currentColor"
                            className="fill-white dark:fill-gray-800"
                            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                        />
                        </svg>
                    </figure>
                    {/* End SVG Background Element */}
                    </div>
                    <div className="relative z-10 -mt-12">
                    {/* Icon */}
                    <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                        <svg
                        className="size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        >
                        <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                        <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                    {/* End Icon */}
                    </div>
                    {/* Body */}
                    <div className="p-4 sm:p-7 overflow-y-auto">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Invoice from Preline
                        </h3>
                        <p className="text-sm text-gray-500">Invoice #3682303</p>
                    </div>
                    {/* Grid */}
                    <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
                        <div>
                        <span className="block text-xs uppercase text-gray-500">
                            Amount paid:
                        </span>
                        <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                            $316.8
                        </span>
                        </div>
                        {/* End Col */}
                        <div>
                        <span className="block text-xs uppercase text-gray-500">
                            Date paid:
                        </span>
                        <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                            April 22, 2020
                        </span>
                        </div>
                        {/* End Col */}
                        <div>
                        <span className="block text-xs uppercase text-gray-500">
                            Payment method:
                        </span>
                        <div className="flex items-center gap-x-2">
                            <svg
                            className="size-5"
                            width={400}
                            height={248}
                            viewBox="0 0 400 248"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <g clipPath="url(#clip0)">
                                <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00" />
                                <path
                                d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                                fill="#EB001B"
                                />
                                <path
                                d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                                fill="#F79E1B"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                <rect width={400} height="247.2" fill="white" />
                                </clipPath>
                            </defs>
                            </svg>
                            <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                            •••• 4242
                            </span>
                        </div>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Grid */}
                    <div className="mt-5 sm:mt-10">
                        <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
                        Summary
                        </h4>
                        <ul className="mt-3 flex flex-col">
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                            <div className="flex items-center justify-between w-full">
                            <span>Payment to Front</span>
                            <span>$264.00</span>
                            </div>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                            <div className="flex items-center justify-between w-full">
                            <span>Tax fee</span>
                            <span>$52.8</span>
                            </div>
                        </li>
                        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200">
                            <div className="flex items-center justify-between w-full">
                            <span>Amount paid</span>
                            <span>$316.8</span>
                            </div>
                        </li>
                        </ul>
                    </div>
                    {/* Button */}
                    <div className="mt-5 flex justify-end gap-x-2">
                        <a
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        href="#"
                        >
                        <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1={12} x2={12} y1={15} y2={3} />
                        </svg>
                        Invoice PDF
                        </a>
                        <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                        >
                        <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 9 6 2 18 2 18 9" />
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                            <rect width={12} height={8} x={6} y={14} />
                        </svg>
                        Print
                        </a>
                    </div>
                    {/* End Buttons */}
                    <div className="mt-5 sm:mt-10">
                        <p className="text-sm text-gray-500">
                        If you have any questions, please contact us at{" "}
                        <a
                            className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                            href="#"
                        >
                            example@site.com
                        </a>{" "}
                        or call at{" "}
                        <a
                            className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                            href="tel:+1898345492"
                        >
                            +1 898-34-5492
                        </a>
                        </p>
                    </div>
                    </div>
                    {/* End Body */}
                </div>
                {/* <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Confirm</span>
                </Button>
                </DialogFooter> */}
            </Dialog>
            </>
        </LayoutDashboard>
    )
}
export default Marketplace;