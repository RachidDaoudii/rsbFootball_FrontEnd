"use Client";
import LayoutDashboard from "../index" 
import React, { useState, useEffect } from 'react';

import Table from "@/components/Tables/users"
import { useBlogQuery,useAddblogMutation ,useCategoriesQuery,useUpdateblogMutation,
  useDeleteblogMutation } from "@/redux/service/blog/blogApi";
import {formatDate} from "@/components/dateTime/formatDate";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Textarea,
  Select, Option
} from "@material-tailwind/react";
  import Link from "next/link";
  import {uploadImageToS3} from "@/util/awsS3"
const BlogDashboard = ()=>{
  const [mode, setMode] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [enable, setEnable] = useState(false);
  const [post,setPost] = useState({
    id:0,
    image:"",
    title:"",
    content:"",
    categoriesId:0
})
const [selectedFile, setSelectedFile] = useState(null);
const handleOpen = () => setOpen((cur) => !cur);
  const { data, error, isLoading, refetch ,isSuccess } = useBlogQuery('');
  const { data:dataCategory, error:errorCategory, isLoading:isLoadingCategory, refetch:refetchCategory ,isSuccess:isSuccessCategory } = useCategoriesQuery('');
  const [AddPost,{ data :dataPost , error:errorPost, isError:isErrorPost,isLoading:isLoadingPost ,isSuccess:isSuccessPost }] = useAddblogMutation();
  const [PostDelete,{ data :dataPostDelete , error:errorPostDelete, isError:isErrorPostDelete,isLoading:isLoadingPostDelete ,isSuccess:isSuccessPostDelete }] = useDeleteblogMutation();
  const [PostUpdate,{ data :dataPostUpdate , error:errorPostUpdate, isError:isErrorPostUpdate,isLoading:isLoadingPostUpdate ,isSuccess:isSuccessPostUpdate }] = useUpdateblogMutation();



  const handleInputChange = (e:any)=>{
    setPost({...post,[e.target.name]:e.target.value})
}

const handleCategoryChange = (value:any) => {
  setPost({ ...post, categoriesId: value });
};

const handleFileChange = async (event:any) => {
    await setSelectedFile(event.target.files[0]);
    const url = await uploadImageToS3(event.target.files[0])
    if(url){
      await setEnable(true)
    }
    post.image = url
  };


  const handleSubmit = async ()=>{
    // if(post.image === ""){
    //   return toast.error("image is empty!!")
    // }
    await AddPost(post)
    await refetch()
    await handleOpen()
  }


  const handleEdit = async ()=>{
    await PostUpdate(post)
    await refetch()
    await handleOpen()
  }
return (
    <LayoutDashboard>
      <>
        <div>
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
              </li>
            </ol>
            </div>
            <div className="flex justify-end my-4">
            <Button 
            onClick={async()=>{
                await setMode(false)
                await setPost(
                    {
                       id:0,
                        image:"",
                        title:"",
                        content:"",
                        categoriesId:0
                    }
                )
                await handleOpen()
                await setEnable(false)
                await setMode(false)
                }} 
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Add Post
            </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {data && data.map((blog)=>(
                  <button className="cardBlog">
                  <img className="h-72 w-full rounded-lg object-cover object-center" src={blog?.image} alt="image"/>
                  <div className="absolute inset-0 flex h-full w-full flex-col justify-end">
                    <div className="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12">
                      <div className="line-clamp-2">
                        <a href="#" className="text-base font-medium text-white">
                          {blog?.title}
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-slate-200">
                          <p className="flex items-center space-x-1">
                            <svg xmlns="../www.w3.org/2000/svg.html" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="line-clamp-1 text-white">{blog?.categories?.name}</span>
                          </p>
                          <div className="mx-3 my-0.5 w-px self-stretch bg-white/20"></div>
                          <p className="shrink-0 text-tiny+ text-white">{formatDate(blog.createdAt)}</p>
                        </div>
                        <div className="-mr-1.5 flex">
                        <button onClick={ async ()=>{
                           await setMode(true)
                           await setPost(
                               {
                                  id:blog.id,
                                  image:blog.image,
                                  title:blog.title,
                                  content:blog.content
                               }
                           )
                           await handleOpen()
                          }}  className="btn h-7 w-7 rounded-full text-white p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                          <i className="fas fa-pencil-alt text-xs+" />
                          </button>
                          <button onClick={ async ()=>{
                            await PostDelete(blog.id)
                            await refetch()
                          }}  className="btn h-7 w-7 rounded-full text-white p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                          <i className="fa fa-trash text-xs+" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </button>
              ))}
            <Dialog
                size="md"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full">
                  <div className="p-4">
                    {mode === false ? (<label className="block tn07p dtjcu eass7 v7056 dark:text-neutral-200">
                          Add Post
                      </label>) : (<label className="block tn07p dtjcu eass7 v7056 dark:text-neutral-200">
                          Edit Post
                      </label>)}
                      <div className="space-y-5 flex justify-between">
                        <div className="mt-2 flex items-center gap-x-3">
                            <div className="mx-auto max-w-xs">
                            <label forHtml="example5" className="mb-1 block text-sm font-medium text-gray-700">image</label>
                            <label className={`flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed ${enable === false ? "border-red-600" : "border-green-600"} p-6 transition-all hover:border-primary-300`}>
                                <div className="space-y-1 text-center">
                                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-gray-500">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                      </svg>
                                  </div>
                                  <div className="text-gray-600"><a href="#" className="font-medium text-primary-500 hover:text-primary-700">Click to upload</a> or drag and drop</div>
                                  <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </div>
                                <input id="example5" type="file" name="image" className="sr-only w-full" onChange={handleFileChange} />
                            </label>
                            </div>
                          </div>
                          <div className="w-[45%]">
                          <div className="my-4 w-full">
                            <Input label="Title" size="lg" type="text" name="title" onChange={handleInputChange} value={post.title} crossOrigin={undefined}/>
                            </div>
                            <div className="my-4 w-full">
                            <div className="">
                              <Select label="Select Category" name="categoriesId" onChange={handleCategoryChange} crossOrigin={undefined}>
                              {dataCategory && dataCategory?.data.map((category:any)=>(
                                    <Option key={category.id} value={category.id}>{category.name}</Option>
                                ))}
                              </Select>
                            </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full my-4">
                        <Textarea label="Content" name="content" onChange={handleInputChange} value={post.title} value={post.content}  />
                        </div>
                  </div>
                  <CardFooter className="pt-0">
                        {mode === false ? (<Button variant="gradient" onClick={handleSubmit} fullWidth disabled={!enable}  rossOrigin={undefined}>
                            Save
                        </Button>): (<Button variant="gradient" onClick={handleEdit} fullWidth  rossOrigin={undefined}>
                            Update
                        </Button>)}
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
        </div>
        </>
    </LayoutDashboard>
)
}

export default BlogDashboard;