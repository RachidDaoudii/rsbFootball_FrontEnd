"use Client";
import Header from "@/components/layout/dashboard/Header";
import Sidebar from "@/components/layout/dashboard/Sidebar";
import type { AppProps } from "next/app";
import { ReactNode, useState,useEffect } from "react";
import { isAuthenticated } from '@/middleware/auth';
import { useRouter } from 'next/router'
import Page404 from "../404"
import Table from "@/components/Tables/users"

const Dashboard =  ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const [isAuthenticatedState, setIsAuthenticatedState] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const authenticated = await isAuthenticated();
        setIsAuthenticatedState(authenticated);
      } catch (error) {
        setIsAuthenticatedState(false);
      }
    };

    checkAuthentication();
  }, []);

  if (!isAuthenticatedState) {
    return <Page404/>;
  }
  
  
  return (
    <div>
      <div className=" dark:bg-white">
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
                  <svg className="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Dashbord
                </a>
              </li>
              {/* <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">
                Application
              </li> */}
            </ol>
            </div>
            <div>
            
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div>
            <div className="grid grid-cols-1 gap-4  lg:grid-cols-2">
            <div className="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
    <div className="flex justify-between">
      <div>
        <span className="text-2xl font-medium text-slate-700 dark:text-navy-100">393</span>
        <span className="text-xs">Mb</span>
      </div>
      <p className="text-xs+">HTTP Traffic</p>
    </div>
    <div className="progress mt-3 h-1.5 bg-slate-150 bg-gray-200">
      <div className="is-active relative w-8/12 h-full overflow-hidden rounded-full bg-red-600"></div>
    </div>
    <div className="mt-2 flex justify-between text-xs text-slate-400 dark:text-navy-300">
      <p>Monthly target</p>
      <p>17%</p>
    </div>
  </div>

  <div className="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
    <div className="flex justify-between">
      <div>
        <span className="text-2xl font-medium text-slate-700 dark:text-navy-100">393</span>
        <span className="text-xs">Mb</span>
      </div>
      <p className="text-xs+">HTTP Traffic</p>
    </div>
    <div className="progress mt-3 h-1.5 bg-slate-150 bg-gray-200">
      <div className="is-active relative w-8/12 h-full overflow-hidden rounded-full bg-red-600"></div>
    </div>
    <div className="mt-2 flex justify-between text-xs text-slate-400 dark:text-navy-300">
      <p>Monthly target</p>
      <p>17%</p>
    </div>
  </div>
  
  <div className="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
    <div className="flex justify-between">
      <div>
        <span className="text-2xl font-medium text-slate-700 dark:text-navy-100">393</span>
        <span className="text-xs">Mb</span>
      </div>
      <p className="text-xs+">HTTP Traffic</p>
    </div>
    <div className="progress mt-3 h-1.5 bg-slate-150 bg-gray-200">
      <div className="is-active relative w-8/12 h-full overflow-hidden rounded-full bg-red-600"></div>
    </div>
    <div className="mt-2 flex justify-between text-xs text-slate-400 dark:text-navy-300">
      <p>Monthly target</p>
      <p>17%</p>
    </div>
  </div>
  <div className="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
    <div className="flex justify-between">
      <div>
        <span className="text-2xl font-medium text-slate-700 dark:text-navy-100">393</span>
        <span className="text-xs">Mb</span>
      </div>
      <p className="text-xs+">HTTP Traffic</p>
    </div>
    <div className="progress mt-3 h-1.5 bg-slate-150 bg-gray-200">
      <div className="is-active relative w-8/12 h-full overflow-hidden rounded-full bg-red-600"></div>
    </div>
    <div className="mt-2 flex justify-between text-xs text-slate-400 dark:text-navy-300">
      <p>Monthly target</p>
      <p>17%</p>
    </div>
  </div>
            </div>
          </div>
           </div>

           {/* <!-- Table Section --> */}
<Table/>
          {/* <!-- End Table Section --> */}
         
        </div>
            
          </div>
             
        ):children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

