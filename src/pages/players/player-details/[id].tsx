import React, { useState, useEffect } from 'react';
import Image from "next/image";
import img from "@/styles/images/player/kevin-de-bruyne.webp";
import logo from "@/styles/images/footer/logo.png";
import Header from "@/components/Header/2";
import Footer from "@/components/footer";
import RadarChart from "@/components/charts/radar";
import { useRouter } from 'next/router';
import {useServicePlayer} from "@/pages/api/club/players/servicePlayer"
import {useServiceCategory} from "@/pages/api/club/categories/serviceCategory"
import Spinner from "@/components/spinner";
import { motion } from 'framer-motion';
import PlayerStaff from "@/components/players"

const Player = () => {
  const { 
    setPlayerId,
    dataPlayer,
    isLoadingPlayer,
    } = useServicePlayer()
    const {refetchCategory,dataCategory,setCategoryId,isLoadingCategory}=useServiceCategory()
  const router = useRouter();
  const { id } =  router.query;

  useEffect(()=>{
    if(id){
      setPlayerId(id)
    }

    if(dataPlayer?.category?.id){
      setCategoryId(dataPlayer?.category?.id)
    }
    
},[id,dataPlayer,dataPlayer?.category?.id])

if(isLoadingPlayer){
  return <Spinner/> 
} 

  return (
    <>
     <Header />
    <div className="grid_not_cabecera">
      <div className="master-layout neoplayer_layout">
        <div
          className="m_full_header_banner main_banner_row overflow with_video bg-stage"

        >
          <div className="m_player_bio_new ">
            <div className="section section_header flex">
              <div
                id="m_player_info_wrapper_new"
                className="m_player_info_wrapper_new"
                data-player-number="8"
              >
                <motion.div
                key={dataPlayer?.position}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 2, delay: 0.1 }}
                  viewport={{ once: true }} id="place" className="place">
                  {dataPlayer?.position}
                  
                </motion.div>
                <motion.div
                  key={dataPlayer?.lastname +" "+ dataPlayer?.firstname}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -20,
                    },

                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 2, delay: 0.1 }}
                  viewport={{ once: true }} id="name_player" className="name_player">
                  {dataPlayer?.lastname +" "+ dataPlayer?.firstname}
                </motion.div>
                <motion.div
                  key={dataPlayer?.number}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -20,
                    },

                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 2, delay: 0.1 }}
                  viewport={{ once: true }} id="number_player" className=" number">
                  {dataPlayer?.number}
                </motion.div>
              </div>
              <motion.div
                key={dataPlayer?.image}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }} className="photo_player">
                <img id="photo_player" className="" src={dataPlayer?.image} alt="" />
                <div>
                {/* <RadarChart/> */}
              </div>
              </motion.div>
             
            </div>
     
          </div>
        </div>
        <div className="section m_player_info_new max-w-screen" id="playerinfo">
          <div className="flex flex-wrap">
            <div className="w-1/2  p-8">
              <div className="biography">
                <h2 className="title">
                  <strong>Parcours</strong>
                </h2>
                <div className="content">
                  {
                    dataPlayer?.experience
                  }
                </div>
                
              </div>
              <div className="stats">
                <h2 className="title">
                  <strong>Statistiques</strong>
                </h2>
                <div
                  className="m_player_new_stats"
                  data-collapsable-content=""
                  data-stats-mode="highlights"
                  data-stats-noactual="Aucune statistique de la saison actuelle n’est disponible actuellement."
                  data-stats-highlights="0,1,2,3"
                >
                  <ul className="m_teams_stats_list m_player_ministats flex">
                    <li className="team_stats_column">
                      <p>
                        <span className="team_stats_number" data-stat-value="">
                          {
                            dataPlayer?.matches_played
                          }
                        </span>
                        <dfn className="team_stats_name" data-stat-title="">
                          Matchs joués
                        </dfn>
                      </p>
                    </li>
                    <li className="team_stats_column">
                      <p>
                        <span className="team_stats_number" data-stat-value="">
                          {
                            dataPlayer?.goals_scored
                          }
                        </span>
                        <dfn className="team_stats_name" data-stat-title="">
                          Buts marqués
                        </dfn>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-8">
              <div className="personal_data">
                <h2 className="title">
                  <strong>Données personnelles</strong>
                </h2>
                <div className="col-3-3">
                  <div className="data_info">
                    <h3>Prénom</h3>
                    <span className="name">{dataPlayer?.lastname +" "+ dataPlayer?.firstname}</span>
                  </div>
                </div>
                <div className="col-2-3">
                  <div className="data_info">
                    <h3>Lieu de naissance</h3>
                    <span>{dataPlayer?.nationality}</span>
                  </div>
                  <div className="data_info">
                    <h3>Date de naissance</h3>
                    <span>{dataPlayer?.Date_of_birth}</span>
                  </div>
                  <div className="data_info">
                    <h3>Poste</h3>
                    <span>{dataPlayer?.position}</span>
                  </div>
                </div>
                <div className="col-1-3">
                  <div className="data_info">
                    <h3>Poids</h3>
                    <span>{dataPlayer?.weight} kg</span>
                  </div>
                  <div className="data_info">
                    <h3>Taille</h3>
                    <span>{dataPlayer?.size} cm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PlayerStaff data={dataCategory?.player} type={"player"}/>
 
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Player;
