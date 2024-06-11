import React from "react";
import { Section } from "components/section";
import aboutImg from "../../assets/img/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Section id="about" pos="relative">
        <section className="about">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-end">
              <div className="col-lg-11">
                <div className="row justify-content-end">
                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-emoji-smile"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="10"
                        data-purecounter-duration="1"
                        className="purecounter"
                      ></span>
                      <p>Happy Clients</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-journal-richtext"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="15"
                        data-purecounter-duration="1"
                        className="purecounter"
                      ></span>
                      <p>Projects Delivered</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="3"
                        data-purecounter-duration="1"
                        className="purecounter"
                      ></span>
                      <p>Years of experience</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-award"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="300"
                        data-purecounter-duration="1"
                        className="purecounter"
                      ></span>
                      <p>Screens Coded</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col-lg-6 video-box align-self-baseline"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Image src={aboutImg} className="img-fluid" alt="" />
                {/* <img
                  src={aboutImg}
                  className="img-fluid"
                  alt=""
                /> */}
              </div>

              <div className="col-lg-6 pt-3 pt-lg-0 content">
                <br />
                <br />
                <h3>
                  We prioritize the provision of the most esteemed indulgences,
                  treating the pleasures of work with due regard and
                  consideration.
                </h3>
                <br />
                <p>
                  Startappss is a software engineering company for new-age
                  businesses. Our team works with organizations across the globe
                  to design and deliver exceptional digital experiences.
                </p>
                <br />
                <ul>
                  <li>
                    <i className="bx bx-check-double"></i> Full-Stack
                    Development Capabilities.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> DevOps and Agile
                    Approach to new Iterations.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Cloud, Data and
                    Automation Best Practies.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Improved Performance
                    and Scalability.
                  </li>
                </ul>
                <br />
                <p>
                  <b>
                    Reduce the burden of your Outdated Solution. Leverage the
                    Full Potenial of the Cloud. Get Ready for Digital
                    Transformation.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Section>
    </>
  );
};

export default About;
