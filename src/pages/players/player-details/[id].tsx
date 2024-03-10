import Image from "next/image";
import img from "@/styles/images/player/kevin-de-bruyne.webp";
import logo from "@/styles/images/footer/logo.png";
import Header from "@/components/Header/2";
import Footer from "@/components/footer";
import RadarChart from "@/components/charts/radar";
import { useRouter } from 'next/router';

const Player = () => {
  const router = useRouter();
    const { id } =  router.query;
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
                <div id="place" className="place">
                  FORWARD
                </div>
                <h1 id="name_player" className=" name_player">
                  kevin de bruyne
                </h1>
                <div id="number_player" className=" number">
                  88
                </div>
              </div>
              <div className="photo_player">
                <Image id="photo_player" className="" src={img} alt="" />
                <div>
                <RadarChart/>
              </div>
              </div>
             
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, quidem sint. Voluptatum iure adipisci quasi veniam
                  odio? Vitae reiciendis, atque at quis, odio harum sunt eaque
                  quas, repellat est quibusdam.
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
                          30
                        </span>
                        <dfn className="team_stats_name" data-stat-title="">
                          Matchs joués
                        </dfn>
                      </p>
                    </li>
                    <li className="team_stats_column">
                      <p>
                        <span className="team_stats_number" data-stat-value="">
                          20
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
                    <span className="name">kevin-de-bruyne</span>
                  </div>
                </div>
                <div className="col-2-3">
                  <div className="data_info">
                    <h3>Lieu de naissance</h3>
                    <span>Mac</span>
                  </div>
                  <div className="data_info">
                    <h3>Date de naissance</h3>
                    <span>1996/04/19</span>
                  </div>
                  <div className="data_info">
                    <h3>Poste</h3>
                    <span>ATT</span>
                  </div>
                </div>
                <div className="col-1-3">
                  <div className="data_info">
                    <h3>Poids</h3>
                    <span>80 kg</span>
                  </div>
                  <div className="data_info">
                    <h3>Taille</h3>
                    <span>1.70 cm</span>
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
