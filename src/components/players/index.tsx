import Link from "next/link";

const PlayerStaff = ({ data, type }: { data: any[], type: string })=>{
    const shuffledData = data && data.slice(0, 15).sort(() => Math.random() - 0.5);
    return (
        <div className="jNEHsq">
        <div className="dMDQY">
            <div className="PlayersCategory__Container-sc-1eltik-0 gjiLmw">
                <h2 className="PlayersCategory__PlayerType-sc-1eltik-2 iFtPGp text-xl text-orange-600">Découvrir aussi</h2>
                <ul className="PlayersCategory__Items-sc-1eltik-1 buZoZa">
                   
                   {shuffledData && shuffledData.map((item,i)=>{
                    if(i<4){
                        return (<li className="Player__Container-xex65m-0 bCPMQZ">
                        <Link className="Player__ContainerLink-xex65m-1 klZRej" href={`/${type === "player" ? `players/player-details/${item.id}` : `players/staff-details/${item.id}`}`}>
                            <div className="Player__Text-xex65m-4 jydKUq">
                                
                                {
                                    type === 'player' ? <p className="Player__Number-xex65m-6 hKItNN">{item.number}</p> : null
                                }
                                <h3 className="Player__NoMarginH3-xex65m-5 Player__LastName-xex65m-8 font-bold">{ item.lastname + " "+ item?.firstname}</h3>
                                {
                                    type === 'staff' ? <p className="">{item.role}</p> : null
                                }
                            </div>
                            <div className="Player__Photo-xex65m-2 zZfmu">
                                <img src={item?.image} />
                            </div>
                            <div className="Player__Gradient-xex65m-3 bJKdaX"></div>
                        </Link>
                        </li>)
                    }
                   })}
                </ul>
            </div>
        </div>
    </div>
    )
}

export default PlayerStaff;



{/* <li className="Player__Container-xex65m-0 bCPMQZ">
<Link className="Player__ContainerLink-xex65m-1 klZRej" href={""}>
    <div className="Player__Text-xex65m-4 jydKUq">
        <p className="Player__Number-xex65m-6 hKItNN">88</p>
        <h3 className="Player__NoMarginH3-xex65m-5 Player__LastName-xex65m-8 eJMLuC">Rachid Daoudi</h3>
    </div>
    <div className="Player__Photo-xex65m-2 zZfmu">
        <img src="assets/img/kevin-de-bruyne.webp" />
    </div>
    <div className="Player__Gradient-xex65m-3 bJKdaX"></div>
</Link>
</li> */}