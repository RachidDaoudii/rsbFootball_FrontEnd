import { usePlayerQuery,useStaffQuery } from "@/redux/service/club/clubApi";
import React, { useState, useEffect } from 'react';

export const useServicePlayer = ()=>{
    const [PlayerId,setPlayerId]=useState<string | null | string[] >(null)
    // const [StaffId,setStaffId]=useState(null)
    const { data:dataPlayer, error:errorPlayer, isLoading:isLoadingPlayer, refetch:refetchPlayer ,isSuccess:isSuccessPlayer } = usePlayerQuery(PlayerId);
    // const { data:dataStaff, error:errorStaff, isLoading:isLoadingStaff, refetch:refetchStaff ,isSuccess:isSuccessStaff } = useStaffQuery(StaffId);

    return {
        setPlayerId,
        // setStaffId,
        dataPlayer,
        // dataStaff,
        isLoadingPlayer,
        // isLoadingStaff
    }
}

export const useServiceStaff = ()=>{
    const [StaffId,setStaffId]=useState<string | null | string[] >(null)
    const { data:dataStaff, error:errorStaff, isLoading:isLoadingStaff, refetch:refetchStaff ,isSuccess:isSuccessStaff } = useStaffQuery(StaffId);

    return {
        setStaffId,
        dataStaff,
        isLoadingStaff
    }
}
