import Image from "next/image";
import img from "@/styles/images/footer/logo.png";
import Link from "next/link";

const header = () => {
  return (
    <div>
      <nav className="border-gray-200 dark:border-gray-600 dark:bg-gray-900 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 nav">
          <Link href="/" className="flex items-center">
            <Image
              width="30"
              src={img}
              className="mr-3 h-6 sm:h-9 lazy"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              rsbfootball
            </span>
          </Link>
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
                  className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="blog"
                  className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-white"
                  aria-current="page"
                >
                  Blogs
                </Link>
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
                    {/* @auth */}
                    <div>NAme</div>
                    <div className="font-medium truncate">email</div>
                  </div>
                  <div className="py-2">
                    {/* <!-- Authentication --> */}
                    <form method="POST" action="{{ route('logout') }}" x-data>
                      {/* @csrf */}
                      <button
                        type="submit"
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      >
                        <svg
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                        </svg>
                        <span>Log Out</span>
                      </button>
                    </form>
                  </div>
                  @else
                  <a
                    href="{{route('login')}}"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Login
                  </a>
                  @endauth
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
              //  style="background-image: url({{asset('img/Equipes/3.jpg')}})"
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
    </div>
  );
};

export default header;
