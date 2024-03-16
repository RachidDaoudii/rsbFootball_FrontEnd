"use client";
import Image from "next/image";
import image from "../../styles/images/logo.png";
import Link from "next/link";
// import { useForgetPassword } from "@/@api/auth";

export default function forgetPassword() {

  // const useforgetpassword = useForgetPassword()
  // const {handleInputChange,handleSubmit} = useforgetpassword;
  return (
    <div>
      <div className="grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            <Image className="mx-auto h-20 w-20" src={image} alt="logo" />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                Welcome Back
              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Please sign in to continue
              </p>
            </div>
          </div>
          <div className="card mt-5 rounded-lg p-5 lg:p-7">
            <label className="block">
              <span>Email:</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Email"
                  type="text"
                  name="email"
                  // value={statelogin.email}
                  // onChange={handleInputChange}
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </span>
            </label>

            <button
              // onClick={handleSubmit}
              className="btn mt-5 w-full bg-orange-600 font-medium text-white bg-violet-600 hover:bg-orange-focus focus:bg-orange-focus active:bg-orange-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 rounded-lg p-2"
            >
              Send Email
            </button>
            <div className="mt-4 text-center text-xs+">
              <p className="line-clamp-1 ">
                <span>Dont have Account?</span>
                <Link
                  href="signup"
                  className="text-orange-600 p-2 transition-colors hover:text-orange-focus dark:text-accent-light dark:hover:text-accent text-violet-600"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
