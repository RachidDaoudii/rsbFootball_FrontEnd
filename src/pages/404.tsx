import Image from "next/image";
import { useRouter } from 'next/router';

const Page404 = ()=>{
    const router = useRouter();
    return (
        <div className="min-h-100vh flex grow bg-slate-50">
        <div className="grid w-full grow grid-cols-1 place-items-center">
        <div class="max-w-md p-6 text-center">
          <div class="w-full">
            <img
              class="w-full"
              src="../../../images/404/error-401.svg"
              alt="image"
            //   width={50}
            //   height={50}
            />
          </div>
          <p class="pt-4 text-7xl font-bold text-[#3730a3] dark:text-accent">
            401
          </p>
          <p
            class="pt-4 text-xl font-semibold text-slate-800 dark:text-navy-50"
          >
            You are not authorized
          </p>
          <p class="pt-2 text-slate-500 dark:text-navy-200">
            You are missing the required rights to be able to access this page
          </p>

          <button
          onClick={()=>{
            router.push('/')
          }}
            class="btn mt-8 bg-[#3730a3] p-2 rounded-md text-base font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-[#3730a3] focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Back To Home
          </button>
        </div>
        </div>
        </div>
    )
}

export default Page404