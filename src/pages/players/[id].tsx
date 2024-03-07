import Header from "@/components/Header/2";
import Footer from "@/components/footer";
import img from "@/styles/images/player/kevin-de-bruyne.webp";
import Image from "next/image";
import {useServiceCategory} from "@/pages/api/club/categories/serviceCategory"
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Players = () =>{
    const router = useRouter();
    const { id } =  router.query;
    const {refetchCategory,dataCategory,setCategoryId}=useServiceCategory()
    useEffect(()=>{
        if(id){
            setCategoryId(id)
        }
        
    },[id,dataCategory])

    console.log(dataCategory)

    const Positions = [
       'goalkeeper',
       'defender',
        'midfielder',
        'striker',
    ]

return(
    <>
    <Header/>

    <div className="">
    <div className="jNEHsq max-w-screen" >
                    <div className="dMDQY" >
                        <h1 className="jRnZxP my-4">{dataCategory?.name}</h1>

                       {
                            Positions.map((p) => (
                                <div className="PlayersCategory__Container-sc-1eltik-0 gjiLmw">
                            <h2 className="PlayersCategory__PlayerType-sc-1eltik-2 title">{p}</h2>
                            <ul className="PlayersCategory__Items-sc-1eltik-1 buZoZa">
                                {dataCategory?.player.map((player) => {
                                    if(p === player.position[0]){
                                        return (<li className="Player__Container-xex65m-0 bCPMQZ">
                                        <Link className="Player__ContainerLink-xex65m-1 klZRej" href={`player-details/${player.id}`}>
                                            <div className="Player__Text-xex65m-4 jydKUq">
                                                <p className="Player__Number-xex65m-6 hKItNN">88</p>
                                                <h3 className="Player__NoMarginH3-xex65m-5 Player__LastName-xex65m-8 eJMLuC">Rachid Daoudi</h3>
                                            </div>
                                            <div className="Player__Photo-xex65m-2 zZfmu">
                                                <Image src={img} alt="" />
                                            </div>
                                            <div className="Player__Gradient-xex65m-3 bJKdaX"></div>
                                        </Link>
                                    </li>)
                                    }
                                })}
                            </ul>
                        </div>
                            ))}
                        
                        <div className="PlayersCategory__Container-sc-1eltik-0 gjiLmw">
                            <h2 className="PlayersCategory__PlayerType-sc-1eltik-2 title">Staff</h2>
                            <ul className="PlayersCategory__Items-sc-1eltik-1 buZoZa">
                                {
                                    dataCategory?.staff.map((player) => (
                                        <li className="Player__Container-xex65m-0 bCPMQZ">
                                            <Link className="Player__ContainerLink-xex65m-1 klZRej" href="">
                                                <div className="Player__Text-xex65m-4 jydKUq">
                                                    <p className="Player__Number-xex65m-6 hKItNN">88</p>
                                                    <h3 className="Player__NoMarginH3-xex65m-5 Player__LastName-xex65m-8 eJMLuC">Rachid Daoudi</h3>
                                                </div>
                                                <div className="Player__Photo-xex65m-2 zZfmu">
                                                    <Image src={img} alt="" />
                                                </div>
                                                <div className="Player__Gradient-xex65m-3 bJKdaX"></div>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div style="clear: both;"></div> */}
            </div>

    <div className="relative">
        <div className="inset-x-0 bottom-0">
            <Footer/>
        </div>
    </div>
    </>
)
}
export default Players;