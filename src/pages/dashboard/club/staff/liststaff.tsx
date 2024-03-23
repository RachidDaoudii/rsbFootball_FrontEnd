"use Client";
import React, { useState, useEffect } from 'react';
import LayoutDashboard from "../../index" 
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

  import { toast } from "react-toastify";
  import { useStaffsQuery ,useCategoriesQuery ,useAddstaffMutation ,useDeletestaffMutation ,useUpdatestaffMutation } from "@/redux/service/club/clubApi";
  import {uploadImageToS3} from "@/util/awsS3"

const Club = ()=>{
    const [mode, setMode] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [enable, setEnable] = useState(false);
    const [staff,setStaff] = useState({
        id:0,
        lastname:"",
        firstname:"",
        image:"",
        experience:"",
        nationality:"",
        Date_of_birth:"",
        role:"",
        weight:0,
        size:0,
        category:0
    })
    const [selectedFile, setSelectedFile] = useState(null);
    const handleOpen = () => setOpen((cur) => !cur);
    const { data, error, isLoading, refetch ,isSuccess } = useStaffsQuery("");
    const { data:dataCategory, error:errorCategory, isLoading:loadingCategory, refetch:refetchCategory ,isSuccess:SuccessCategory } = useCategoriesQuery("");
  const [AddStaff,{ data :dataStaff , error:errorStaff, isError:isErrorStaff,isLoading:isLoadingStaff ,isSuccess:isSuccessStaff }] = useAddstaffMutation();
  const [Delete,{ data :dataDelete , error:errorDelete, isError:isErrorDelete,isLoading:isLoadingDelete ,isSuccess:isSuccessDelete }] = useDeletestaffMutation();
  const [Update,{ data :dataUpdate , error:errorUpdate, isError:isErrorUpdate,isLoading:isLoadingUpdate ,isSuccess:isSuccessUpdate }] = useUpdatestaffMutation();


    const handleInputChange = (e:any)=>{
        setStaff({...staff,[e.target.name]:e.target.value})
    }

    const handleCategoryChange = (value:any) => {
        setStaff({ ...staff, category: value });
    };

    const handleRoleChange = (value:any) => {
        setStaff({ ...staff, role: value });
    };

    const handleFileChange = async (event:any) => {
        await setSelectedFile(event.target.files[0]);
        const url = await uploadImageToS3(event.target.files[0])
        if(url){
          await setEnable(true)
        }
        staff.image = url
      };


      const handleSubmit = async ()=>{
        if(staff.image == ""){
          return toast.error("image is empty!!")
        }
        await AddStaff(staff)
        await refetch()
        await handleOpen()
      }


      const handleEdit = async ()=>{
        await Update(staff)
        await refetch()
        await handleOpen()
      }



      
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
                  Club
                </a>
              </li>
            </ol>
            </div>
            
            <div className="flex justify-end my-4">
            <Button onClick={async()=>{
                await setMode(false)
                await setStaff(
                    {
                        id:0,
                        lastname:"",
                        firstname:"",
                        image:"",
                        experience:"",
                        nationality:"",
                        Date_of_birth:"",
                        role:"",
                        weight:0,
                        size:0,
                        category:0,
                    }
                )
                await handleOpen()
                await setEnable(false)
                // await setMode(false)
                }} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Add Staff
            </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 pb-8">
                {
                    data && data.map((staff:any)=>(
                        <div className="card shadow-lg shadow-gray-500 " >
                            <div className="h-24 rounded-t-lg bg-primary dark:bg-accent">
                                <img
                                className="h-full w-full rounded-t-lg object-cover object-center"
                                src="https://images.pexels.com/photos/61143/pexels-photo-61143.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="image"
                                />
                            </div>
                            <div className={`px-4 py-2 sm:px-5 ${staff?.category?.name === "équipe première" ? "bg-orange-400" : staff?.category?.name === "Cadets" ? "bg-blue-400" : staff?.category?.name === "junior" ? "bg-red-500" :  staff?.category?.name === "femmes" ? "bg-red-100" :  null}`}>
                                <div className="flex justify-between space-x-4">
                                <div className="avatar -mt-12 h-20 w-20">
                                    <img
                                    className="rounded-full border-2 border-gray-200 dark:border-navy-700  w-20 h-20 object-contain"
                                    
                                    src={staff.image}
                                    alt="avatar"
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <Link href={'1'}  className="btn h-7 w-7 text-center rounded-full bg-gray-200 p-0 text-primary hover:bg-gray-300 focus:bg-gray-300 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                                        <i className="fab fa-twitter text-blue-400 " />
                                    </Link >
                                    <Link href={'2'} className="btn h-7 w-7 text-center rounded-full bg-gray-200 p-0 text-primary hover:bg-gray-300 focus:bg-gray-300 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                                        <i className="fab fa-instagram text-red-800" />
                                    </Link >
                                    <Link href={'3'} className="btn h-7 w-7 text-center rounded-full bg-gray-200 p-0 text-primary hover:bg-gray-300 focus:bg-gray-300 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                                        <i className="fab fa-facebook-f text-blue-900" />
                                    </Link >
                                </div>
                                </div>
                                <h3 className="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100">
                                {staff.lastname+" "+staff.firstname}
                                </h3>
                                <p className="text-xs">{staff.nationality}</p>
                                <div className="flex items-center space-x-4 pt-2">
                                <div className="w-9/12">
                                
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-medium text-slate-700 dark:text-navy-100">
                                    </p>
                                    <p className="text-xs w-[100px]">{staff.role}</p>
                                </div>
                                </div>
                                <div className="flex justify-center space-x-3 py-3">
                                <button onClick={async ()=>{
                                    await Delete(staff.id)
                                    await refetch()
                                }} className="btn h-9 w-9 rounded-full bg-gray-100 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90">
                                    <i className="fa fa-trash text-xs+" />
                                </button>
                                <button onClick={async ()=>{
                                    await setMode(true)
                                    await setStaff(
                                        {
                                            id:staff.id,
                                            lastname:staff.lastname,
                                            firstname:staff.firstname,
                                            image:staff.image,
                                            experience:staff.experience,
                                            nationality:staff.nationality,
                                            Date_of_birth:staff.Date_of_birth,
                                            role:staff.role,
                                            weight:staff.weight,
                                            size:staff.size,
                                            category:staff.category,
                                        }
                                    )
                                    await handleOpen()
                                }} className="btn h-9 w-9 rounded-full bg-gray-100 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90">
                                    <i className="fas fa-pencil-alt text-xs+" />
                                </button>
                                </div>
                            </div>
                            </div>
                    ))
                }
                
                {/*  */}
                </div>
                <Dialog
                    size="md"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent shadow-none"
                >
                    <Card className="mx-auto w-full">
                    <div className="p-4">
                    {mode === false ? (<label className="block tn07p dtjcu eass7 v7056 dark:text-neutral-200">
                        Add Player
                    </label>) : (<label className="block tn07p dtjcu eass7 v7056 dark:text-neutral-200">
                        Edit Player
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
                            <div className="my-4">
                            <Input label="Weight" size="lg" type="number" name="weight" onChange={handleInputChange} value={staff.weight} crossOrigin={undefined}/>
                            </div>
                            <div className="my-4">
                            <Input label="Size" size="lg" type="number" name="size" onChange={handleInputChange} value={staff.size} crossOrigin={undefined} />
                            </div>
                            <div className="my-4">
                            <Select label="Select Category" name="category" onChange={handleCategoryChange} crossOrigin={undefined}>
                                {dataCategory && dataCategory.map((category:any)=>(
                                    <Option key={category.id} value={category.id}>{category.name}</Option>
                                ))}
                            </Select>
                            </div>
                            </div>
                        </div>
                        <div className="w-[45%]">
                            <div className="my-3 w-full">
                                <Input label="First Name" size="lg" name="firstname" onChange={handleInputChange} value={staff.firstname}  crossOrigin={undefined} />
                            </div>
                            <div className="my-4 w-full">
                                <Input label="Last Name" size="lg" name="lastname" onChange={handleInputChange} value={staff.lastname}  crossOrigin={undefined}/>
                            </div>
                            <div className="my-4 w-full">
                            <Select label="Select Role" name="role" onChange={handleRoleChange} crossOrigin={undefined}>
                                <Option key={"head-coach"} value={"head-coach"}>head-coach</Option>
                                <Option key={"assistant-coach"} value={"assistant-coach"}>assistant-coach</Option>
                                <Option key={"physio"} value={"physio"}>physio</Option>
                                <Option key={"analyst"} value={"analyst"}>analyst</Option>
                                <Option key={"doctor"} value={"doctor"}>doctor</Option>
                                <Option key={"scout"} value={"scout"}>scout</Option>
                                <Option key={"coach"} value={"coach"}>coach</Option>
                            </Select>
                            </div>
                            <div className="my-4 w-full">
                                <Input label="Date of birth" size="lg" type="date" name="Date_of_birth" onChange={handleInputChange} value={staff.Date_of_birth}  crossOrigin={undefined}/>
                            </div>
                            <div className="my-4">
                            <Input label="Nationality" size="lg" name="nationality" onChange={handleInputChange} value={staff.nationality} crossOrigin={undefined}/>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="w-full">
                    <Textarea label="Experience" name="experience" onChange={handleInputChange} value={staff.experience} />
                    </div>
                    </div>
                    <CardFooter className="pt-0">
                        {mode === false ? (<Button variant="gradient" onClick={handleSubmit} fullWidth disabled={!enable} rossOrigin={undefined}>
                            Save
                        </Button>): (<Button variant="gradient" onClick={handleEdit} fullWidth  rossOrigin={undefined}>
                            Update
                        </Button>)}
                    </CardFooter>
                    </Card>
                </Dialog>
            </>
        </LayoutDashboard>
    )
}

export default Club;