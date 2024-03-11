import React, { useState, useEffect } from 'react';
import Image from "next/image";
import img from "@/styles/images/player/kevin-de-bruyne.webp";
import logo from "@/styles/images/footer/logo.png";
import Header from "@/components/Header/2";
import Footer from "@/components/footer";
import RadarChart from "@/components/charts/radar";
import { useRouter } from 'next/router';
import {useServiceStaff} from "@/pages/api/club/players/servicePlayer"
import Spinner from "@/components/spinner";
import { motion } from 'framer-motion';

const Player = () => {
  const { 
    setStaffId,
        dataStaff,
        isLoadingStaff
    } = useServiceStaff()
  const router = useRouter();
  const { id } =  router.query;

  useEffect(()=>{
    if(id){
      setStaffId(id)
    }
    
},[id,dataStaff])

  if(isLoadingStaff){
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
                  viewport={{ once: true }} id="place" className="place">
                    {dataStaff?.role}
                </motion.div>
                <motion.div
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
                  viewport={{ once: true }} id="name_player" className=" name_player">
                  {dataStaff?.lastname +" "+ dataStaff?.firstname}
                </motion.div>
                <div id="number_player" className=" number">
                  {/* {dataStaff?.number} */}
                </div>
              </div>
              <motion.div
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
                viewport={{ once: true }}
                className="photo_player">
                <img id="photo_player" className="" src={dataStaff?.image} alt="" />
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
                    dataStaff?.experience
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
                    {/* <li className="team_stats_column">
                      <p>
                        <span className="team_stats_number" data-stat-value="">
                          {
                            dataStaff?.matches_played
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
                            dataStaff?.goals_scored
                          }
                        </span>
                        <dfn className="team_stats_name" data-stat-title="">
                          Buts marqués
                        </dfn>
                      </p>
                    </li> */}
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
                    <span className="name">{dataStaff?.lastname +" "+ dataStaff?.firstname}</span>
                  </div>
                </div>
                <div className="col-2-3">
                  <div className="data_info">
                    <h3>Lieu de naissance</h3>
                    <span>{dataStaff?.nationality}</span>
                  </div>
                  <div className="data_info">
                    <h3>Date de naissance</h3>
                    <span>{dataStaff?.Date_of_birth}</span>
                  </div>
                  <div className="data_info">
                    <h3>Poste</h3>
                    <span>{dataStaff?.position}</span>
                  </div>
                </div>
                <div className="col-1-3">
                  <div className="data_info">
                    <h3>Poids</h3>
                    <span>{dataStaff?.weight} kg</span>
                  </div>
                  <div className="data_info">
                    <h3>Taille</h3>
                    <span>{dataStaff?.size} cm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Player;
