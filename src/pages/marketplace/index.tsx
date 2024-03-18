import Header from "@/components/Header/2";
import Footer from "@/components/footer";
import Sponsors from "@/components/sponsor"
import {useProductsQuery} from "@/redux/service/marketplace/marketplaceApi";
import React, { useState, useEffect } from 'react';
import {addOrderInCart} from '@/redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import Image from "next/image";
import Link from "next/link";
import Spinner from "@/components/spinner";
import { Product } from "@/types";

const Marketplace = () =>{
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch ,isSuccess } = useProductsQuery("");
  const handleAdd = (product: object) => {
    dispatch(addOrderInCart(product));
  };

  if(isLoading){
    return (<Spinner/>)
}
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
          <div className="mt-10 grid lg:grid-cols-3 gap-x-8 gap-y-8 items-center">
          {data && data.slice(0, 40).sort(() => Math.random() - 0.5).map((product:Product,i:number)=>(
            <div className="group rounded-xl group-hover:bg-opacity-85 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
            <img
              className="group-hover:opacity-85 transition duration-500 object-contain h-[130px]"
              src={product?.image}
              alt="sofa-2"
            />
            
            <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
              <div>
                <p className="group-hover:opacity-85 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                {product?.name}
                </p>
              </div>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800  text-white dark:bg-white/10 dark:text-white">{product?.Category?.name}</span>
              <div>
                <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white">
                  ${product?.price}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
              <button>
                <img
                  onClick={() => handleAdd(product)}
                  className="dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg"
                  alt="add"
                />
              </button>
              <Link href={{
                  pathname: '/marketplace/product-detail/[id]',
                  query: { id: product.id },

                }}>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#1F2937" />
                    <path
                        d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z"
                        fill="#1F2937"
                    />
                </svg>
            </Link >
            </div>
          </div>
          ))}
            
            

  {/* end */}
          </div>
         
        </div>
      </div>  

      <div>
          <Sponsors/>
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
