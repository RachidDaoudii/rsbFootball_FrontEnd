import Image from "next/image";
import img from "@/styles/images/footer/logo.png";

const Footer = () => {
  return (
    <>
      <footer
        className="dNjvpa"
        // style="background-color:#e18523;margin-top: 70px;"
        style={{ backgroundColor: "#e18523", marginTop: 70 }}
      >
        <div className="hkpNyh"></div>
        <div className="QbmKc">
          <div className="eiHAmf">
            <a href="#">
              <Image
                width="150"
                src={img}
                className="joyijI wp-post-image lazy"
                alt=""
                decoding="async"
                loading="lazy"
                sizes=""
              />
            </a>
          </div>
          <div className="cQbEtB">
            <h2
              className="dIusPf"
              // style="font-family: monospace;"
              style={{ fontFamily: "monospace" }}
            >
              rsbfootball sur les médias sociaux
            </h2>
            <ul className="hBgujN">
              <li className="LYRAf">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="LYRAf">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="LYRAf">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li className="LYRAf">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="fFtjEU"></div>
          <div className="ZDPfv mt-8">
            <div className="dAJknb">
              <p>
                Copyright © 2023 rsbfootball Tous droits réservés
                <a className="dAJknb" href="" target="_blank"></a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
