import React from "react";
import Image from "next/image";
import startappsImg from "../../public/static/assets/img/Startappss.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-solid-svg-icons";
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
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-10 align-items-center justify-content-end">
                <Image src={startappsImg} class="img-fluid" alt="" />
                {/* <img
                  //   src="./assets/img/Startappss.jpg"
                  class="img-fluid"
                  alt=""
                /> */}
                <a href="#"></a>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>Startappss Pvt. Ltd.</h3>
                  <p>
                    93 Heera Bag
                    <br />
                    Indore MP 452010, India
                    <br />
                    <br />
                    <strong>Phone:</strong> +91 92389 20590
                    <br />
                    <strong>Email:</strong> info@startappss.com
                    <br />
                  </p>
                  <div class="social-links mt-3">
                    <a href="https://twitter.com/Startappss111" class="twitter">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="1x"
                        color="#1DA1F2"
                        className="footerIcon"
                        // spin
                      />
                      {/* <i class="bx bxl-twitter"></i> */}
                    </a>

                    <a
                      href="https://www.instagram.com/startappss/"
                      class="instagram"
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
                      class="linkedin"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="1x"
                        color="#1DA1F2"
                        className="footerIcon"
                        // spin
                      />
                      {/* <i class="bx bxl-linkedin"></i> */}
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>
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
                    <i class="bx bx-chevron-right"></i>
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

              <div class="col-lg-4 col-md-6 footer-newsletter">
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

        <div class="container">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Startappss</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
