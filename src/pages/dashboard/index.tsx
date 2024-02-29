"use Client";
import {
  UploadButton,
  UploadDropzone,
} from "@/components/utils/uploadthing/uploadthing";
import Header from "@/components/layout/dashboard/Header";
import Sidebar from "@/components/layout/dashboard/Sidebar";
import type { AppProps } from "next/app";
import { ReactNode, useState } from "react";

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" dark:bg-slate-900">
        <Header/>
        <Sidebar/>

        {/* <!-- Content --> */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:ps-72 h-[660px]">
        {children === undefined ?(
           <div>
            <div className="mt-4 mb-2">
            <ol className="flex items-center whitespace-nowrap p-2 border-y border-gray-200 dark:border-gray-700" aria-label="Breadcrumb">
              <li className="inline-flex items-center">
                <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                  <svg className="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Dashbord
                </a>
              </li>
              {/* <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">
                Application
              </li> */}
            </ol>
            </div>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
               <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                 <div className="p-4 md:p-5 flex gap-x-4">
                   <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
                     <svg className="flex-shrink-0 size-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                   </div>
           
                   <div className="grow">
                     <div className="flex items-center gap-x-2">
                       <p className="text-xs uppercase tracking-wide text-gray-500">
                         Total users
                       </p>
                       <div className="hs-tooltip">
                         <div className="hs-tooltip-toggle">
                           <svg className="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                           <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                             The number of daily users
                           </span>
                         </div>
                       </div>
                     </div>
                     <div className="mt-1 flex items-center gap-x-2">
                       <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                         72,540
                       </h3>
                       <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
                         <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                         <span className="inline-block text-xs font-medium">
                           12.5%
                         </span>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                 <div className="p-4 md:p-5 flex gap-x-4">
                   <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
                     <svg className="flex-shrink-0 size-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
                   </div>
           
                   <div className="grow">
                     <div className="flex items-center gap-x-2">
                       <p className="text-xs uppercase tracking-wide text-gray-500">
                       Active users
                       </p>
                     </div>
                     <div className="mt-1 flex items-center gap-x-2">
                       <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                         29.4%
                       </h3>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                 <div className="p-4 md:p-5 flex gap-x-4">
                   <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
                     <svg className="flex-shrink-0 size-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="m12 12 4 10 1.7-4.3L22 16Z"/></svg>
                   </div>
           
                   <div className="grow">
                     <div className="flex items-center gap-x-2">
                       <p className="text-xs uppercase tracking-wide text-gray-500">
                         Avg. Click Rate
                       </p>
                     </div>
                     <div className="mt-1 flex items-center gap-x-2">
                       <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                         56.8%
                       </h3>
                       <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100">
                         <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
                         <span className="inline-block text-xs font-medium">
                           1.7%
                         </span>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                 <div className="p-4 md:p-5 flex gap-x-4">
                   <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
                     <svg className="flex-shrink-0 size-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/></svg>
                   </div>
           
                   <div className="grow">
                     <div className="flex items-center gap-x-2">
                       <p className="text-xs uppercase tracking-wide text-gray-500">
                         Pageviews
                       </p>
                       <div className="hs-tooltip">
                         <div className="hs-tooltip-toggle">
                           <svg className="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                           <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                             The average pageviews
                           </span>
                         </div>
                       </div>
                     </div>
                     <div className="mt-1 flex items-center gap-x-2">
                       <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                         92,913
                       </h3>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              </div>
             </div>
             
        ):children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
{/* <UploadButton
  endpoint="imageUploader"
  className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
  onClientUploadComplete={(res) => {
    console.log(res[0].url);
  }}
  onUploadError={(error: Error) => {
    // Do something with the error.
    alert(`ERROR! ${error.message}`);
  }}
/> */}