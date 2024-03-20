"use Client";
import React, { useState, useEffect } from 'react';
import LayoutDashboard from "../../index"
import { useProductsQuery,useCategoriesQuery,useAddproductsMutation ,useDeleteproductMutation ,useUpdateproductMutation} from "@/redux/service/marketplace/marketplaceApi";
import Spinner from "@/components/spinner";
import {formatDate} from "@/components/dateTime/formatDate";
import { toast } from "react-toastify";
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
import {uploadImageToS3} from "@/util/awsS3"
const Products = ()=>{
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const [enable, setEnable] = useState(false);
  const [product, setProduct] = useState({
    id:0,
    name:"",
    image:"",
    description:"",
    price:0,
    stock:0,
    Category:""
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const handleOpen = () => setOpen((cur) => !cur);
  const { data, error, isLoading, refetch ,isSuccess } = useProductsQuery("");
  const { data:dataCategory, error:errorCategory, isLoading:loadingCategory, refetch:refetchCategory ,isSuccess:successCategory } = useCategoriesQuery("");
  const [AddProduct,{ data :dataAddProduct , error:errorAddProduct, isError:isErrorAddProduct,isLoading:isLoadingAddProduct ,isSuccess:isSuccessAddProduct }] = useAddproductsMutation();
  const [ProductDelete,{ data :dataProductDelete , error:errorProductDelete, isError:isErrorProductDelete,isLoading:isLoadingProductDelete ,isSuccess:isSuccessProductDelete }] = useDeleteproductMutation();
  const [ProductUpdate,{ data :dataProductUpdate , error:errorProductUpdate, isError:isErrorProductUpdate,isLoading:isLoadingProductUpdate ,isSuccess:isSuccessProductUpdate }] = useUpdateproductMutation();

  const handleInputChange = (e:any)=>{
    setProduct({...product,[e.target.name]:e.target.value})
  }
  const handleCategoryChange = (value:any) => {
    setProduct({ ...product, Category: value });
   
  };

  const handleFileChange = async (event:any) => {
    await setSelectedFile(event.target.files[0]);
    const url = await uploadImageToS3(event.target.files[0])
    if(url){
      await setEnable(true)
    }
    product.image = url
  };

  const handleSubmit = async ()=>{
    if(product.image == ""){
      return toast.error("image is empty!!")
    }
    await AddProduct(product)
    await refetch()
    await handleOpen()
  }


  const handleEdit = async ()=>{
    await ProductUpdate(product)
    await refetch()
    await handleOpen()
  }

  useEffect(()=>{
    if(isErrorAddProduct){
      return toast.error(errorAddProduct.data.message)
    }
    if(isSuccessAddProduct){
      return toast.success("Products send successfully");
    }
    if(isSuccessProductDelete){
      return toast.success("Products deleted successfully");
    }
  },[isErrorAddProduct,isSuccessAddProduct,isSuccessProductDelete])
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
                  Marketplace
                </a>
                <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </li>
              <li className="inline-flex items-center">
                <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="#">
                  <svg className="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
                  Product
                </a>
              </li>
            </ol>
            </div>
            <div className="max-w-[85rem] py-10 sm:px-2 mx-auto">
      {/* Card */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                {/* Input */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="hs-as-table-product-review-search"
                    className="sr-only"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-as-table-product-review-search"
                      name="hs-as-table-product-review-search"
                      className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Search"
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                      <svg
                        className="size-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </div>
                  </div>
                  
                </div>
                <div className="inline-flex gap-x-2">
                  <Button onClick={async()=>{
                    await setEnable(false)
                    await setMode(false)
                    await setProduct(
                      {
                        id:0,
                        name:"",
                        image:"",
                        description:"",
                        price:0,
                        stock:0,
                        Category:""
                      }
                    )
                    await handleOpen()
                  }} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Add Product
                  </Button>
                </div>
                {/* End Input */}
              </div>
              {/* End Header */}
              {/* Table */}
              <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Product
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Category
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Description
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Date
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Status
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Actions
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {
                    data && data.map((product)=>(
                      <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                    <td className="size-px whitespace-nowrap align-top">
                      <a className="block p-6" href="#">
                        <div className="flex items-center gap-x-4">
                          <img
                            className="flex-shrink-0 size-[38px] rounded-lg"
                            src={product.image}
                            alt="Image Description"
                          />
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            {product.name}
                            </span>
                          </div>
                        </div>
                      </a>
                    </td>
                    <td className="size-px whitespace-nowrap align-top">
                      <a className="block p-6" href="#">
                        <div className="flex items-center gap-x-3">
                          <div className="grow">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                              {product.Category.name}
                            </span>
                          </div>
                        </div>
                      </a>
                    </td>
                    <td className="h-px w-72 min-w-72 align-top">
                      <a className="block p-6" href="#">
                        <span className="block text-sm text-gray-500">
                          {product.description}
                        </span>
                      </a>
                    </td>
                    <td className="size-px whitespace-nowrap align-top">
                      <a className="block p-6" href="#">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(product.createdAt)}
                        </span>
                      </a>
                    </td>
                    <td className="size-px whitespace-nowrap align-top">
                      <a className="block p-6" href="#">
                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                          <svg
                            className="size-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                          Published
                        </span>
                      </a>
                    </td>
                    <td className="size-px whitespace-nowrap align-top">
                    <button className="block p-4" onClick={async ()=>{
                      await setMode(true)
                      await setProduct(
                        {
                          id:product.id,
                          name:product.name,
                          image:"",
                          description:product.description,
                          price:product.price,
                          stock:product.stock,
                          Category:""
                        }
                      )
                       await handleOpen()
                      }}  >
                        <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                              </svg>
                              Edit
                          </span>
                      </button>
                      <button className="block p-4"onClick={async ()=>{
                          await ProductDelete(product.id)
                          await refetch()
                      }}  >
                        <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                              </svg>
                              Delete
                          </span>
                      </button>
                    </td>
                  </tr>
                    ))
                  }
                  
                  
                </tbody>
              </table>
              {/* End Table */}
              {/* Footer */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                <div className="max-w-sm space-y-3">
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Next
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* End Footer */}
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div>
    <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
           {mode === false ? (<Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
               
            <Typography variant="h4" color="blue-gray">
              Add Product
            </Typography>
            <Input label="name" name="name" onChange={handleInputChange} size="lg" />
            <Input label="image" name="image" type="file" size="lg" onChange={handleFileChange} />
            <Textarea label="description" name="description" onChange={handleInputChange} type="text" size="lg" />
            <Input label="price" name="price" type="number" onChange={handleInputChange} size="lg" />
            <Input label="stock" name="stock" type="number" onChange={handleInputChange} size="lg" />
            <div className="w-full">
              <Select label="Select Category" name="Category" onChange={handleCategoryChange}>
                {dataCategory && dataCategory.map((category:any)=>(<Option key={category.id} value={category.id}>{category.name}</Option>))}
              </Select>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth disabled={!enable}>
              Save
            </Button>
          </CardFooter>
        </Card>) : (
        <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
             
          <Typography variant="h4" color="blue-gray">
            Edit Product
          </Typography>
          <Input label="name" name="name" onChange={handleInputChange} size="lg" value={product?.name} />
          <Input label="image" name="image" type="file" size="lg" onChange={handleFileChange} />
          <Textarea label="description" name="description" onChange={handleInputChange} type="text" size="lg" value={product?.description}/>
          <Input label="price" name="price" type="number" onChange={handleInputChange} size="lg" value={product?.price}/>
          <Input label="stock" name="stock" type="number" onChange={handleInputChange} size="lg"  value={product?.stock}/>
          <div className="w-full">
            <Select label="Select Category" name="Category" onChange={handleCategoryChange}>
              {dataCategory && dataCategory.map((category:any)=>(<Option key={category.id} value={category.id}>{category.name}</Option>))}
            </Select>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleEdit} fullWidth >
            Edit
          </Button>
        </CardFooter>
      </Card>)}
        
      </Dialog>
            </>
        </LayoutDashboard>
    )
}
export default Products