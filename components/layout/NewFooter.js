import React from "react";
import Image from "next/image";
import startappsImg from "../../public/static/assets/img/Startappss.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-10 align-items-center justify-content-end">
                <Image src={startappsImg} className="img-fluid" alt="" />

                <a href="#"></a>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Startappss Pvt. Ltd.</h3>
                  <p>
                    93 Heera Bag
                    <br />
                    Indore MP 452010, India
                    <br />
                    <strong>Phone:</strong> +91 92389 20590
                    <br />
                    <strong>Email:</strong> info@startappss.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a
                      href="https://twitter.com/Startappss111"
                      className="twitter"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="1x"
                        color="#1DA1F2"
                        className="footerIcon"
                        // spin
                      />
                    </a>

                    <a
                      href="https://www.instagram.com/startappss/"
                      className="instagram"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="1x"
                        color="#1DA1F2"
                        className="footerIcon"
                        // spin
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/startappss-system-india-pvt-ltd/"
                      className="linkedin"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="1x"
                        color="#1DA1F2"
                        className="footerIcon"
                        // spin
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a
                      id="terms"
                      href="#"
                      data-toggle="modal"
                      data-target="#termsOfService"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a
                      id="policy"
                      href="#"
                      data-toggle="modal"
                      data-target="#privacyPolicy"
                    >
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Subscribe to our Newsletter for Tech Updates</p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Startappss</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
