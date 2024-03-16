import { useCategoriesQuery,useCategoryQuery } from "@/redux/service/club/clubApi";
import React, { useState, useEffect } from 'react';

export const useServiceCategory = ()=>{
    const [CategoryId,setCategoryId]= useState<string | null | string[] >(null)
    const { data:dataCategorie, error:errorCategorie, isLoading:isLoadingCategorie, refetch:refetchCategorie ,isSuccess:isSuccessCategorie } = useCategoriesQuery('');
    const { data:dataCategory, error:errorCategory, isLoading:isLoadingCategory, refetch:refetchCategory ,isSuccess:isSuccessCategory } = useCategoryQuery(CategoryId);

    return {
        dataCategorie,
        errorCategorie,
        refetchCategorie,
        isSuccessCategorie,
        refetchCategory,
        dataCategory,
        setCategoryId,
        isLoadingCategorie,
        isLoadingCategory
    }
}