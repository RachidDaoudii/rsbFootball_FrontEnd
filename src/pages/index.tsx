import Image from "next/image";
import { Inter } from "next/font/google";
import img from "@/styles/images/footer/logo.png";
import imgHome from "@/styles/images/home/home.jpg";
// import"@/components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <!-- ========== HEADER ========== --> */}
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-gray-800  text-sm py-3 md:py-0 dark:bg-gray-800">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <a
                className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
                aria-label="Brand"
              >
                rsbfootball
              </a>
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                  <a
                    className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                    aria-current="page"
                  >
                    Landing
                  </a>

                  <a
                    className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Company
                  </a>

                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                    <button
                      type="button"
                      className="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Resources
                      <svg
                        className="flex-shrink-0 ms-2 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                      <div className="grid grid-cols-2 md:grid-cols-10">
                        <div className="md:col-span-3">
                          <div className="flex flex-col py-6 px-3 md:px-6">
                            <div className="space-y-4">
                              <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
                                About us
                              </span>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                                <div className="grow">
                                  <p>Support Docs</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <rect
                                    width="7"
                                    height="7"
                                    x="14"
                                    y="3"
                                    rx="1"
                                  />
                                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                                </svg>
                                <div className="grow">
                                  <p>Integrations</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1="16" x2="8" y1="13" y2="13" />
                                  <line x1="16" x2="8" y1="17" y2="17" />
                                  <line x1="10" x2="8" y1="9" y2="9" />
                                </svg>
                                <div className="grow">
                                  <p>Guides</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="m7 11 2-2-2-2" />
                                  <path d="M11 13h4" />
                                  <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="3"
                                    rx="2"
                                    ry="2"
                                  />
                                </svg>
                                <div className="grow">
                                  <p>API Reference</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                                <div className="grow">
                                  <p>API Status</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-3">
                          <div className="flex flex-col py-6 px-3 md:px-6">
                            <div className="space-y-4">
                              <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
                                Support
                              </span>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                  <path d="M12 17h.01" />
                                </svg>
                                <div className="grow">
                                  <p>Help Center</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <circle cx="12" cy="12" r="4" />
                                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                                </svg>
                                <div className="grow">
                                  <p>Developer Hub</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                  <circle cx="9" cy="7" r="4" />
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <div className="grow">
                                  <p>Community Forum</p>
                                </div>
                              </a>
                            </div>

                            <div className="mt-7 space-y-4">
                              <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
                                Partners
                              </span>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                  <path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
                                </svg>
                                <div className="grow">
                                  <p>Become a Partner</p>
                                </div>
                              </a>

                              <a
                                className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="m15 5 4 4" />
                                  <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                                  <path d="m8 6 2-2" />
                                  <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
                                  <path d="m18 16 2-2" />
                                  <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                                </svg>
                                <div className="grow">
                                  <p>Build on Preline</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-full md:col-span-4">
                          <div className="flex flex-col bg-gray-50 p-6 dark:bg-gray-700">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
                              Customer stories
                            </span>

                            <a
                              className="mt-4 group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              href="#"
                            >
                              <div className="aspect-w-16 aspect-h-9">
                                <img
                                  className="w-full object-cover rounded-lg"
                                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                  alt="Image Description"
                                />
                              </div>
                              <div className="mt-2">
                                <p className="text-gray-800 dark:text-gray-200">
                                  Preline Projects has proved to be most
                                  efficient cloud based project tracking and bug
                                  tracking tool.
                                </p>
                                <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                                  Learn more
                                  <svg
                                    className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="m9 18 6-6-6-6" />
                                  </svg>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Join us{" "}
                    <span className="py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600">
                      4
                    </span>
                  </a>

                  <div className="pt-3 md:pt-0">
                    <a
                      className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Request demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
      <div
        className="bg-local lazy bg-gray-400 bg-center bg-no-repeat bg-cover bg-blend-multiply bg-image"
        style={{
          width: "100%",
          height: "900px",
          backgroundImage: `url('images/home/home.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 1,
        }}
      >
        {/* <!-- nav --> */}
        <nav className="border-gray-200 dark:border-gray-600 dark:bg-gray-900 bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 nav">
            <a href="index.html" className="flex items-center">
              <Image
                src={img}
                width={30}
                className="mr-3 h-6 sm:h-9 lazy"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                rsbfootball
              </span>
            </a>
            <button
              id="mega-menu-full-image-button"
              data-collapse-toggle="mega-menu-full-image"
              type="button"
              className="mega inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 met focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-full-image"
              aria-expanded="false"
            >
              <span className="mega sr-only">Open main menu</span>
              <svg
                className="mega w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="mega"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="mega-menu-full-image"
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 z-10"
            >
              <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <a
                    href="{{route('page.home')}}"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="{{route('page.blogs')}}"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                    aria-current="page"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="{{route('page.equipes')}}"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                    aria-current="page"
                  >
                    Club
                  </a>
                </li>
                <li>
                  <a
                    href="{{route('page.products')}}"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                  >
                    Marketplace <i className="fa-solid fa-shop"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="{{route('page.tickets')}}"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                  >
                    tickets
                  </a>
                </li>
                <li>
                  <a
                    href="{{route('page.contact')}}"
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:text-blue-700 text-white"
                    id="dropdownInformationButton"
                    data-dropdown-toggle="dropdownInformation"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </a>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdownInformation"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      test
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    className="flex items-center md:hover:text-blue-700 text-white"
                    href="{{route('page.checkOut')}}"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="absolute flex ml-4 -mt-5">
                      <span className="h-3 w-3 animate-ping absolute inline-flex rounded-full bg-pink-500 opacity-75"></span>
                      <span className="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="mega-menu-full-image-dropdown"
            className="mt-1 border-gray-200 z-30 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 hidden mega-menu"
          >
            <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-sm text-orange-500 dark:text-gray-400 md:grid-cols-3 md:px-6 font-normal">
              <ul
                className="hidden mb-4 space-y-4 md:mb-0 md:block"
                aria-labelledby="mega-menu-full-image-button"
              >
                <li>
                  <a
                    href="{{route('page.equipes')}}"
                    className="hover:underline hover:text-white dark:hover:text-white menbar"
                  >
                    Equipes
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:underline hover:text-white dark:hover:text-white menbar"
                  >
                    Equipe Première
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white dark:hover:text-white menbar"
                  >
                    Espoir
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white dark:hover:text-white menbar"
                  >
                    Juniors
                  </a>
                </li>
              </ul>
              <ul className="mb-4 space-y-4 md:mb-0">
                <li>
                  <a
                    href="blogs.html"
                    className="hover:underline hover:text-white dark:hover:text-white menbar"
                  >
                    Cadets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white dark:hover:text-white menbar"
                  >
                    Minimes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white dark:hover:text-white menbar"
                  >
                    License
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:text-white dark:hover:text-white menbar"
                  >
                    Resources
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
              >
                <p className="mb-5 max-w-xl font-extrabold tracking-tight leading-tight text-white">
                  Preview the new Flowbite dashboard navigation.
                </p>
                <button
                  type="button"
                  className="menbar inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                >
                  Get started
                  <svg
                    className="ml-1 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </nav>
        {/* <!-- nav --> */}
        <div className="test text-white items-center mx-auto cart">
          <div className="row-header selider-header flex-header">
            <div className=" col-cup">
              <div className="cup">New | Throne Cup</div>
              <div className="title-header">
                the Volcano is back with a great win From Eljadida
              </div>
              <p className="pragraphe">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                odit dicta sapiente assumenda distinctio facere molestias sunt
                fugit quidem eius, at temporibus aliquam, ad veritatis illo
                nostrum doloribus? Dignissimos, esse.
              </p>
              <p className="pragraphe">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                odit dicta sapiente assumenda distinctio facere molestias sunt
                fugit quidem eius, at temporibus aliquam, ad veritatis illo
                nostrum doloribus? Dignissimos, esse.
              </p>
            </div>
            <div className="col-card">
              <div className="card">
                <div className="card-Match max-w-sm border-gray-700 rounded-lg media">
                  <div className="font-normal flex text-white title-card">
                    <i className="fa-regular fa-calendar"></i>
                    <span>calendar</span>
                  </div>
                  <div className="league">
                    league
                    {/* {{-- <i className="fa-regular fa-futbol"></i> <span>
                                  @if ($match->competition === null) --}}
                                    vide
                                {{-- @else --}}
                                {{-- {{$match->competition->name}} --}}
                                {{-- @endif</span> <span>2023</span> --}} */}
                  </div>
                  <div className="type-Match">New Match</div>
                  <div className="info-Match">
                    <div className="equipe1">
                      <img className="logo-equipe lazy" data-src="" alt="" />
                      <div className="title">name_Equipe</div>
                    </div>
                    <div className="time">
                      <span className="date">date</span>
                      <span className="hour">time</span>
                    </div>
                    <div className="equipe2">
                      <img
                        className="logo-equipe lazy"
                        data-src="{{asset('frontEndStyle/img/logo.png')}}"
                        alt=""
                      />
                      <div className="title">RS.Berkane</div>
                    </div>
                  </div>
                  <div className="ticket">
                    <button className="buy">
                      <i className="fa-regular fa-credit-card"></i> Buy Ticket
                    </button>
                  </div>
                  <div className="list-Match">
                    <div className="col-liste">
                      <ul>
                        {/* @foreach ($listMatchs as $match)
                                        @if( $match->date >= Carbon\Carbon::now() )
                                        <li>
                                            <a href="#">
                                                <span className="liste-icons"><i className="fa-solid fa-clock"></i></span>
                                                <span className="date">{{ Carbon\Carbon::parse($match->date)->format('Y-m-d') }}</span>
                                                <span className="img-logo">
                                                    <img className="lazy" width="20px" data-src="{{asset('frontEndStyle/img/logo.png')}}" alt="">
                                                    <img className="lazy" width="20px" data-src="{{$match->equipe->image}}" alt="">
                                                </span>
                                                <span className="vs" style="width: 138px;">{{'RS.Berkane '.$match->equipe->name}}</span>
                                                <span className="hour">{{ Carbon\Carbon::parse($match->date)->format('H:i') }}</span>
                                            </a>
                                        </li>
                                        @endif
                                        @endforeach */}
                      </ul>
                    </div>
                  </div>
                  <div className="footer-card">
                    <a href="#">all list Match</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // <!-- </div> -->
            // <!-- slider --> */}
          <div className="card-slider">
            <div
              id="indicators-carousel"
              className="relative"
              data-carousel="slide"
            >
              {/* // <!-- Carousel wrapper --> */}
              <div className="relative overflow-hidden rounded-lg height-slider">
                {/* // <!-- Item 1 --> */}
                <div
                  className="hidden duration-700 ease-in-out component-slider"
                  data-carousel-item="active"
                >
                  <div className="component">
                    <div className="slider-img">
                      <img
                        className="lazy"
                        data-src="{{asset('img/Equipes/1.jpg')}}"
                        width="200px"
                        alt=""
                      />
                    </div>
                    <div className="slider-paragraphe">
                      <h6 className="news">News</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="fa-solid flex justify-center items-center">
                        <a href="post.html">
                          <i className="fa-solid fa-plus "></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="component">
                    <div className="slider-img">
                      <img
                        className="lazy"
                        data-src="{{asset('img/Equipes/2.jpg')}}"
                        width="200px"
                        alt=""
                      />
                    </div>
                    <div className="slider-paragraphe">
                      <h6 className="news">News</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="fa-solid flex justify-center items-center">
                        <a href="post.html">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="component">
                    <div className="slider-img">
                      <img
                        className="lazy"
                        data-src="{{asset('img/Equipes/3.jpg')}}"
                        width="200px"
                        alt=""
                      />
                    </div>
                    <div className="slider-paragraphe">
                      <h6 className="news">News</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="fa-solid flex justify-center items-center">
                        <a href="post.html">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* // <!-- Item 2 --> */}
                <div
                  className="hidden duration-700 ease-in-out component-slider"
                  data-carousel-item
                >
                  <div className="component">
                    <div className="slider-img">
                      <img
                        className="lazy"
                        data-src="{{asset('img/Equipes/4.jpg')}}"
                        width="200px"
                        alt=""
                      />
                    </div>
                    <div className="slider-paragraphe">
                      <h6 className="news">News</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="fa-solid flex justify-center items-center">
                        <a href="post.html">
                          <i className="fa-solid fa-plus "></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="component">
                    <div className="slider-img">
                      <img
                        className="lazy"
                        data-src="{{asset('img/Equipes/5.jpg')}}"
                        width="200px"
                        alt=""
                      />
                    </div>
                    <div className="slider-paragraphe">
                      <h6 className="news">News</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="fa-solid flex justify-center items-center">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="component">
                    <div className="slider-img">
                      <img
                        className="lazy"
                        data-src="{{asset('img/Equipes/6.jpg')}}"
                        width="200px"
                        alt=""
                      />
                    </div>
                    <div className="slider-paragraphe">
                      <h6 className="news">News</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="fa-solid flex justify-center items-center">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="hidden duration-700 ease-in-out component-slider"
                  data-carousel-item
                >
                  <div className="component">
                    <div className="slider-img">
                      <img
                        className="lazy"
                        data-src="{{asset('img/Equipes/7.jpg')}}"
                        width="200px"
                        alt=""
                      />
                    </div>
                    <div className="slider-paragraphe">
                      <h6 className="news">News</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="fa-solid flex justify-center items-center">
                        <a href="#">
                          <i className="fa-solid fa-plus "></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="component">
                    <div className="slider-img">
                      <img
                        className="lazy"
                        data-src="{{asset('img/Equipes/8.jpg')}}"
                        width="200px"
                        alt=""
                      />
                    </div>
                    <div className="slider-paragraphe">
                      <h6 className="news">News</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="fa-solid flex justify-center items-center">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="component">
                    <div className="slider-img">
                      <img
                        className="lazy"
                        data-src="{{asset('img/Equipes/9.jpg')}}"
                        width="200px"
                        alt=""
                      />
                    </div>
                    <div className="slider-paragraphe">
                      <h6 className="news">News</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="fa-solid flex justify-center items-center">
                        <a href="#">
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* // <!-- Slider indicators --> */}
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
              </div>
              {/* // <!-- Slider controls --> */}
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
          {/* // <!-- slider --> */}
        </div>
      </div>
    </>
  );
}
