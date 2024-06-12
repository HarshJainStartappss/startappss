import React from "react";
import { Section } from "components/section";
import HeadingSec from "components/heading/HeadingSec";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Section id="contact" pos="relative" innerWidth="80%">
        <div className="afterHead">
          <HeadingSec title="Contact Us" />
        </div>

        <div className="secDiff">
          <section id="contact" className="contact">
            {/* <div className="container" data-aos="fade-up">
              <div className=" section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </div>
            </div> */}

            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box themeBg">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <h3>Our Address</h3>
                      <p>93 Heera Bag, Indore, MP 452010</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4 themeBg">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <h3>Email Us</h3>
                      <p>info@startappss.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4 themeBg">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      <h3>Call Us</h3>
                      <p>+91 92389 20590</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="myContactForm themeBg"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="3"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  {/* <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div> */}
                  <div className="text-center mt-4">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </Section>
    </>
  );
};

export default Contact;
