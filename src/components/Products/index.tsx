import {useProductsQuery} from "@/redux/service/marketplace/marketplaceApi";
import React, { useState, useEffect } from 'react';
import {addOrderInCart} from '@/redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import Image from "next/image";
import { Product } from "@/types";
import Spinner from "@/components/spinner";

const SectionProducts = ()=>{
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch ,isSuccess } = useProductsQuery("");
  const handleAdd = (product: object) => {
    dispatch(addOrderInCart(product));
  };
    return (
    <div className=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-8 mx-auto rounded-lg pt-4 pb-1 bg-gray-200">
    <h2 className="px-4 text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 sm:px-5 lg:text-lg">
      Top Products
    </h2>
    <div className="scrollbar-sm mt-4 flex space-x-4 overflow-x-auto px-4 pb-4 sm:px-5">
    {
      isLoading ? <Spinner/>: null
    }
      {data && data.map((product:Product,i:number)=>(
        <div className="flex w-72 shrink-0 flex-col">
        <a href=''>
        <Image
          width={200}
          height={100}
          className="h-48 w-full rounded-2xl object-fill object-center"
          src={product?.image} alt="Image Description"
        />
        </a>
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white opacity-80">
          <div className="flex space-x-2">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800  text-white dark:bg-white/10 dark:text-white">{product?.Category?.name}</span>
          </div>
          <div className="mt-2">
            <div
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
             {product?.name}
            </div>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                ${product?.price}
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1" onClick={() => handleAdd(product)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      ))}
      
      
      
    </div>
  </div>
)
}


export default SectionProducts;