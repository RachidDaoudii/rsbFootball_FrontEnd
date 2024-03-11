import Header from "@/components/Header/2";
import Footer from "@/components/footer";
const Marketplace = () =>{
    return (
    <>
      <Header/>
       <div className="mx-auto container px-6 xl:px-0 py-4">
        <div className="flex flex-col">
        <section className="py-10 dark:bg-dark">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 lg:w-8/12">
                <div className="relative mb-8 h-[370px] md:h-[480px]">
                  <img
                    src="https://www.thesoccerstore.co.uk/media/Home/Footballs_1920x1080.jpg"
                    alt="product"
                    className="object-cover object-center w-full h-full rounded-xl"
                  />
                  <div className="absolute top-0 left-0 flex items-center w-full h-full px-8 md:px-12">
                    <div className="max-w-[420px]">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="block mb-5 text-2xl font-bold hover:text-primary text-white sm:text-4xl"
                        >
                          Mega Sale Up To 50% Off For All
                        </a>
                      </h3>
                      <p className="text-base text-body-color mb-9 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ornare vestibulum mollis. Nam vitae augue purus.
                        Integer ac accumsan nunc.
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="bg-primary inline-flex items-center justify-center rounded-md py-[13px] px-7 text-center text-base font-medium text-white hover:bg-blue-dark"
                      >
                        Grab The Offer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2 lg:w-full">
                    <div className="relative mb-8 h-[223px]">
                      <img
                        src="https://www.thesoccerstore.co.uk/media/Home/Speed_Ladder_1920x1080.jpg"
                        alt="product"
                        className="object-cover object-center w-full h-full rounded-xl"
                      />
                      <div className="absolute top-0 left-0 flex items-end justify-end w-full h-full p-6 sm:p-9">
                        <div className="max-w-[180px] text-right">
                          <h3>
                            <a
                              href="javascript:void(0)"
                              className="block mb-3 text-xl font-bold hover:text-primary text-white xl:text-2xl"
                            >
                              Summer Travel Collection
                            </a>
                          </h3>
                          <a
                            href="javascript:void(0)"
                            className="text-base font-medium hover:text-primary text-white"
                          >
                            Discover Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 lg:w-full">
                    <div className="relative mb-8 h-[223px]">
                      <img
                        src="https://www.thesoccerstore.co.uk/media/Home/Football_Nets_3_1920x1080.jpg"
                        alt="product"
                        className="object-cover object-center w-full h-full rounded-xl"
                      />
                      <div className="absolute top-0 left-0 flex items-end justify-end w-full h-full p-6 sm:p-9">
                        <div className="max-w-[180px] text-right">
                          <h3>
                            <a
                              href="javascript:void(0)"
                              className="block mb-3 text-xl font-bold hover:text-primary text-white xl:text-2xl"
                            >
                              Get 30% Off On iPhone
                            </a>
                          </h3>
                          <a
                            href="javascript:void(0)"
                            className="text-base font-medium hover:text-primary text-white"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
            <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
              <img
                className="group-hover:opacity-60 transition duration-500"
                src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
                alt="sofa-2"
              />
              <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                    Sectional Sofa
                  </p>
                </div>
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white">
                    $78900
                  </p>
                </div>
              </div>
              <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
              </div>
              <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg"
                    alt="add"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1dark.svg"
                    alt="add"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg"
                    alt="view"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg"
                    alt="view"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3.svg"
                    alt="like"
                  />
                  <img
                    className="hidden dark:block"
                    src="
    https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3dark.svg"
                    alt="like"
                  />
                </button>
              </div>
            </div>
            <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
              <img
                className="group-hover:opacity-60 transition duration-500"
                src="https://i.ibb.co/3BbZvtQ/pexels-andrea-piacquadio-3757055-removebg-preview-1.png"
                alt="sofa-3"
              />
              <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                    Two Seater Sofa
                  </p>
                </div>
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white">
                    $2900
                  </p>
                </div>
              </div>
              <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
              </div>
              <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg"
                    alt="add"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1dark.svg

    "
                    alt="add"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg"
                    alt="view"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg"
                    alt="view"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3.svg"
                    alt="like"
                  />
                  <img
                    className="hidden dark:block"
                    src="
                          https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3dark.svg"
                    alt="like"
                  />
                </button>
              </div>
            </div>
            <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
              <img
                className="group-hover:opacity-60 transition duration-500"
                src="https://i.ibb.co/DgFfGcm/paul-weaver-n-Wid-MEQsn-AQ-unsplash-removebg-preview-1.png"
                alt="sofa-4"
              />
              <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                    Sectional Sofa
                  </p>
                </div>
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white">
                    $78900
                  </p>
                </div>
              </div>
              <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
              </div>
              <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg"
                    alt="add"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1dark.svg"
                    alt="add"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg"
                    alt="view"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg"
                    alt="view"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3.svg"
                    alt="like"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3dark.svg"
                    alt="like"
                  />
                </button>
              </div>
            </div>
            <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
              <img
                className="group-hover:opacity-60 transition duration-500"
                src="https://i.ibb.co/K6PL38P/pexels-pixabay-276566-removebg-preview-1.png"
                alt="sofa-5"
              />
              <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                    Sectional Sofa
                  </p>
                </div>
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white">
                    $78900
                  </p>
                </div>
              </div>
              <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
              </div>
              <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg"
                    alt="add"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1dark.svg

    "
                    alt="add"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg"
                    alt="view"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg"
                    alt="view"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3.svg"
                    alt="like"
                  />
                  <img
                    className="hidden dark:block"
                    src="
    https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3dark.svg"
                    alt="like"
                  />
                </button>
              </div>
              <div className="absolute top-4 right-6">
                <p className="text-base leading-4 pb-0.5 text-gray-600 dark:text-white border-b-2 border-gray-600">
                  New
                </p>
              </div>
            </div>
            <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
              <img
                className="group-hover:opacity-60 transition duration-500"
                src="https://i.ibb.co/zP9sWqP/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-1-removebg-preview-1.png"
                alt="sofa-6"
              />
              <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                    Sectional Sofa
                  </p>
                </div>
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white">
                    $78900
                  </p>
                </div>
              </div>
              <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
              </div>
              <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg"
                    alt="add"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1dark.svg

    "
                    alt="add"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg"
                    alt="view"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg"
                    alt="view"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3.svg"
                    alt="like"
                  />
                  <img
                    className="hidden dark:block"
                    src="
    https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3dark.svg"
                    alt="like"
                  />
                </button>
              </div>
            </div>
            <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
              <img
                className="group-hover:opacity-60 transition duration-500"
                src="https://i.ibb.co/SPyYgjw/pexels-martin-p-chy-1866149-removebg-preview-1.png"
                alt="sofa-7"
              />
              <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                    Sectional Sofa
                  </p>
                </div>
                <div>
                  <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white">
                    $78900
                  </p>
                </div>
              </div>
              <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
              </div>
              <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg"
                    alt="add"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1dark.svg

    "
                    alt="add"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg"
                    alt="view"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg"
                    alt="view"
                  />
                </button>
                <button>
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3.svg"
                    alt="like"
                  />
                  <img
                    className="hidden dark:block"
                    src="
    https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3dark.svg"
                    alt="like"
                  />
                </button>
              </div>
            </div>
          </div>
         
        </div>
      </div>  
      <div className="relative">
        <div className="inset-x-0 bottom-0">
          <Footer/>
        </div>
      </div>  
    </>
  )
}

export default Marketplace;
