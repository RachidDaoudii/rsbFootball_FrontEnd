import Image from "next/image";
import { Inter } from "next/font/google";
import img from "@/styles/images/footer/logo.png";
import Header2 from "@/components/Header/2";

const inter = Inter({ subsets: ["latin"] });
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <div
        className="bg-local lazy bg-gray-400 bg-center bg-no-repeat bg-cover bg-blend-multiply bg-image"
        style={{
          width: "100%",
          height: "900px",
          backgroundImage: `url('images/home/home.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 1,
        }}
      >
        <Header2 />
        <div className="test text-white items-center mx-auto cart">
          <div className="row-header selider-header flex-header">
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
              className=" col-cup"
            >
              <div className="cup">New | Throne Cup</div>
              <div className="title-header">
                the Volcano is back with a great win From Eljadida
              </div>
              <p className="pragraphe">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                odit dicta sapiente assumenda distinctio facere molestias sunt
                fugit quidem eius, at temporibus aliquam, ad veritatis illo
                nostrum doloribus? Dignissimos, esse.
              </p>
              <div className="socail pt-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                <span className="fa-solid flex justify-center items-center">
                  <a href="#">
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </span>
                <span>
                  <a href="#">see video</a>
                </span>
                <span>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </span>
              </div>
            </motion.div>

            <div className="col-card">
              <div className="card">
                <div className="card-Match max-w-sm border-gray-700 rounded-lg media">
                  <div className="font-normal flex text-white title-card">
                    <i className="fa-regular fa-calendar"></i>
                    <span>calendar</span>
                  </div>
                  <div className="league">
                    <i className="fa-regular fa-futbol"></i>
                    <span>{"   "}name competition</span>
                    <span>{"   "}2023</span>
                  </div>
                  <div className="type-Match">New Match</div>
                  <div className="info-Match">
                    <div className="equipe1">
                      <Image className="logo-equipe lazy" src={img} alt="" />
                      <div className="title">RS.Berkane</div>
                    </div>
                    <div className="time">
                      <span className="date">12/12/2023</span>
                      <span className="hour">18:45</span>
                    </div>
                    <div className="equipe2">
                      <Image className="logo-equipe lazy" src={img} alt="" />
                      <div className="title">RS.Berkane</div>
                    </div>
                  </div>
                  <div className="ticket">
                    <button className="buy">
                      <i className="fa-regular fa-credit-card"></i> Buy Ticket
                    </button>
                  </div>
                  <div className="list-Match">
                    <div className="list-Match">
                      <div className="col-liste">
                        <ul>
                          <li>
                            <a href="#">
                              <span className="liste-icons">
                                <i className="fa-solid fa-clock"></i>
                              </span>
                              <span className="date">24 avril</span>
                              <span className="img-logo">
                                <Image width="20" src={img} alt="" />
                                <Image width="20" src={img} alt="" />
                              </span>
                              <span className="vs">RS.Berkane MC.Oujda</span>
                              <span className="hour">22:30 GMT</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="liste-icons">
                                <i className="fa-solid fa-clock"></i>
                              </span>
                              <span className="date">30 avril</span>
                              <span className="img-logo">
                                <Image width="20" src={img} alt="" />
                                <Image width="20" src={img} alt="" />
                              </span>
                              <span className="vs">MC.Oujda RS.Berkane</span>
                              <span className="hour">20:30 GMT</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-card">
                    <a href="#">all list Match</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-slider">
            <div
              id="indicators-carousel"
              className="relative"
              data-carousel="slide"
            >
              slider
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
