"use Client";
import React, { useState, useEffect } from 'react';
import LayoutDashboard from "../../index"
import Link from "next/link";
import { useCategoriesQuery ,useAddcategoryMutation,useDeletecategoryMutation,useUpdatecategoryMutation } from "@/redux/service/blog/blogApi";
import Spinner from "@/components/spinner";
import {formatDate} from "@/components/dateTime/formatDate";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { toast } from "react-toastify";

const Categories = ()=>{
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const [category, setCategory] = useState({
    id:0,
    name:""
  });

 
  const handleOpen = () => setOpen(!open);
  const { data, error, isLoading, refetch ,isSuccess } = useCategoriesQuery("");
  const [Category,{ data :dataCategory , error:errorCategory, isError:isErrorCategory,isLoading:isLoadingCategory ,isSuccess:isSuccessCategory }] = useAddcategoryMutation();
  const [CategoryDelete,{ data :dataCategoryDelete , error:errorCategoryDelete, isError:isErrorCategoryDelete,isLoading:isLoadingCategoryDelete ,isSuccess:isSuccessCategoryDelete }] = useDeletecategoryMutation();
  const [CategoryUpdate,{ data :dataCategoryUpdate , error:errorCategoryUpdate, isError:isErrorCategoryUpdate,isLoading:isLoadingCategoryUpdate ,isSuccess:isSuccessCategoryUpdate }] = useUpdatecategoryMutation();


  const handleInputChange = (e:any)=>{
    setCategory({...category,[e.target.name]:e.target.value})
}


  
  // if(isLoading){
  //   return (<Spinner/>)
  // }

 


    return(
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
                  Blog
                </a>
                <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </li>
              <li className="inline-flex items-center">
                <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                  <svg className="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
                  Categories
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
                  Categories
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Add categories, edit and more.
                </p>
              </div>
  
              <div>
                <div className="inline-flex gap-x-2">
  
                  <Button onClick={async()=>{
                    
                    await setCategory({
                      id:0,
                      name:""
                    })
                    await handleOpen()
                    await setMode(false)
                  }} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Add Category
                  </Button>
                </div>
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
                        Name
                      </span>
                    </div>
                  </th>

  
  
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Created
                      </span>
                    </div>
                  </th>
  
                  <th scope="col" className="px-6 py-3 text-end"></th>
                </tr>
              </thead>
  
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data && data?.data.map((item:any)=>(
                  <tr>
                  <td className="size-px whitespace-nowrap">
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <div className="grow">
                          <span className="block text-sm text-gray-500">{item.name}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                      <span className="text-sm text-gray-500">{formatDate(item.createdAt)}</span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-1.5 flex">
                    <button type="button" onClick={async ()=>{
                       await handleOpen()
                       await setMode(true)
                       await setCategory({
                        id:item.id,
                        name:item.name
                       })
                      }} className="block" data-hs-overlay="#hs-ai-invoice-modal">
                          <span className="px-1 py-1.5">
                          <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                              </svg>
                              Edit
                          </span>
                          </span>
                      </button>
                      <button type="button" onClick={async ()=>{
                          await CategoryDelete(item.id)
                          await refetch()
                      }} className="block" data-hs-overlay="#hs-ai-invoice-modal">
                          <span className="px-1 py-1.5">
                          <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                              </svg>
                              Delete
                          </span>
                          </span>
                      </button>
                    </div>
                  </td>
                </tr>
                ))}
                

              </tbody>
            </table>
            {/* <!-- End Table --> */}
  
            {/* <!-- Footer --> */}
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{data && data.length}</span> results
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
  </div><Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
           
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          
          <div className="grid gap-6">
          { mode === false ? (<Input label="name" name="name" onChange={handleInputChange}  />) : (<Input label="name" name="name" onChange={handleInputChange} value={category.name} />)}
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={async()=> {
              await handleOpen()
              await setMode(false)
              await setCategory({
                id:0,
                name:""
              })
            }
            }>
            cancel
          </Button>
          {mode === false ? <Button variant="gradient" color="gray" onClick={async()=> {
            await Category(category)
            await refetch()
            await handleOpen()
          }}>
            save
          </Button> : <Button variant="gradient" color="gray" onClick={async()=> {
           
            await CategoryUpdate(category)
            await refetch()
            await handleOpen()
          }}>
            update
          </Button> }
          
        </DialogFooter>
      </Dialog>

            </>
        </LayoutDashboard>
    )
}
export default Categories