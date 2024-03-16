"use Client";
import LayoutDashboard from "../index" 
import { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
 import Tiptap from "@/components/layout/textEditor"
 import {
  UploadButton,
  UploadDropzone,
} from "@/components/utils/uploadthing/uploadthing";
// import {useCreatPost} from "@/@api/blog/post"
const AddBlog = ()=>{
  // const {handleSubmit, handleInputChange,post} = useCreatPost()



    return (
        <LayoutDashboard>
        <div>
        <div className="mt-4 mb-2 ">
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
                <a  className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                  Add
                </a>
              </li>
            </ol>
            </div>

          <div>
          <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mt-4">
      <div className="border-b border-slate-200 p-6 dark:border-navy-500 sm:px-5 flex justify-between align-center">
        <div className="flex items-center space-x-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/10 p-1 text-blue-600 dark:bg-accent-light/10 dark:text-accent-light">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <h4 className="text-lg font-medium text-slate-700 dark:text-navy-100">
            New Post
          </h4>
        </div>
        <div>
        <button
        // onClick={handleSubmit}
              className="btn w-full  font-medium text-white bg-orange-500 px-6 hover:bg-orange-700 focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 rounded-lg p-2"
            >
             Add
            </button>
        </div>
      </div>
      <div className="mx-8">
      <UploadDropzone
          endpoint="imageUploader"
          className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
          onClientUploadComplete={(res) => {
            // post.image = res[0].url;
            
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}

          
        />
      </div>
      
      <div className="grid grid-cols-1 gap-4  lg:grid-cols-2 mx-8 my-4">
        
        <div><label className="block">
        <span className="font-medium text-slate-600 dark:text-navy-100">Title</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10  focus:outline-none hover:border-red-600"
                  placeholder="Enter Title"
                  type="text"
                  name="title"
                  // onChange={handleInputChange}
                />
              </span>
            </label></div>
        <div>
        <label className="block">
          <span className="font-medium text-slate-600 dark:text-navy-100">Categories</span>
            <span className="relative mt-1.5 flex">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-red-600  focus:z-5 focus:outline-none"
                placeholder="Enter Category"
                type="text"
                name="email"
              />
            </span>
        </label>
        </div>
      </div>
      <div className="mx-8 mb-4">
        <label className="block">
          <span className="font-medium text-slate-600 dark:text-navy-100">Content</span>
            <span className="relative mt-1.5 flex">
              <textarea
                className="form-input peer w-full h-[150px] rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-red-600  focus:z-5 focus:outline-none"
                name="content"
                // onChange={handleInputChange}
              ></textarea>
            </span>
        </label>
        </div>
    </div>
    
          </div> 
         
 
        </div>
        </LayoutDashboard>

    )
}
export default AddBlog;