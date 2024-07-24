import React, { useState } from "react";
import { Section } from "components/section";
import aboutImg from "../../public/static/assets/img/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import boxOneImage from "../../public/static/assets/img/about-boxes-1.jpg";
import boxTwoImage from "../../public/static/assets/img/about-boxes-2.jpg";
import boxThreeImage from "../../public/static/assets/img/about-boxes-3.jpg";
import { Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import { TsHeading } from "components/heading/Heading";

import {
  faFaceSmile,
  faFile,
  faClock,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

export const Tsabout: React.FC = () => {
  const [boxOne, setBoxOne] = useState(false);
  const [boxTwo, setBoxTwo] = useState(false);
  const [boxThree, setBoxThree] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <Section
        id="about"
        pos="relative"
        innerWidth="90%"
        paddingTop="20px"
        paddingBottom="20px"
      >
        <div className="afterHead">
          {/* <HeadingSec title="About us" /> */}
          <TsHeading title="About us" />
        </div>
        <section className="about">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="row justify-content-center mb-4">
                  <div className="col-lg-3 col-md-5 col-12 d-md-flex align-items-md-stretch  mb-4">
                    <div className="count-box themeBg">
                      <div className="count-box-icon">
                        <FontAwesomeIcon
                          className="myIcon"
                          icon={faFaceSmile}
                        />
                      </div>
                      <div className="count-box-content">
                        <span>100</span>
                        <p>Happy Clients </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-12 d-md-flex align-items-md-stretch  mb-4">
                    <div className="count-box themeBg">
                      <div className="count-box-icon">
                        <FontAwesomeIcon className="myIcon" icon={faFile} />
                      </div>
                      <div className="count-box-content">
                        <span>150</span>
                        <p>Projects Delivered </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-12 d-md-flex align-items-md-stretch  mb-4">
                    <div className="count-box themeBg">
                      <div className="count-box-icon">
                        <FontAwesomeIcon className="myIcon" icon={faClock} />
                      </div>
                      <div className="count-box-content">
                        <span>13</span>
                        <p>Years of experience </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-12 d-md-flex align-items-md-stretch  mb-4">
                    <div className="count-box themeBg">
                      <div className="count-box-icon">
                        <FontAwesomeIcon className="myIcon" icon={faMedal} />
                      </div>
                      <div className="count-box-content">
                        <span>300 +</span>
                        <p>Certified developers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="backGroundDiv">
              <div
                className="col-lg-12 pt-3 pt-lg-0 content"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "15px",
                }}
              >
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

        {/* --- About Boxes ----- */}

        {/* xs, sm, md, lg, xl */}
        <div className="aboutBoxes marginBottom">
          {/* <Card.Img variant="top" src={boxOneImage} /> */}
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="count-box">
                <Card style={{ width: "18rem" }} className="themeBg">
                  <Image src={boxOneImage} alt="Box One Image" />
                  <Card.Body>
                    <Card.Title>Our Mission</Card.Title>
                    <Card.Text>
                      Our mission is to empower businesses through innovative
                      technology solutions and strategic consulting. We are{" "}
                      {boxOne ? (
                        <span>
                          dedicated to delivering exceptional value by
                          leveraging our expertise to solve complex challenges,
                          enhance operational efficiency, and drive sustainable
                          growth for our clients.
                          <button
                            className="showMoreBtn"
                            onClick={() => setBoxOne(!boxOne)}
                          >
                            {" "}
                            ..Show less
                          </button>
                        </span>
                      ) : (
                        <button
                          className="showMoreBtn"
                          onClick={() => setBoxOne(!boxOne)}
                        >
                          ...Show More
                        </button>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="count-box">
                <Card style={{ width: "18rem" }} className="themeBg">
                  <Image src={boxTwoImage} alt="Box One Image" />
                  <Card.Body>
                    <Card.Title>Our Vision</Card.Title>
                    <Card.Text>
                      Our vision for Hustle. We are on a journey to create a hub
                      for technological innovation, aiming to change the lives
                      of billions{" "}
                      {boxTwo ? (
                        <span>
                          for the greater good. We uphold our vision by our
                          guiding values.
                          <button
                            className="showMoreBtn"
                            onClick={() => setBoxTwo(!boxTwo)}
                          >
                            {" "}
                            ..Show less
                          </button>
                        </span>
                      ) : (
                        <button
                          className="showMoreBtn"
                          onClick={() => setBoxTwo(!boxTwo)}
                        >
                          ...Show More
                        </button>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="count-box">
                <Card style={{ width: "18rem" }} className="themeBg">
                  <Image src={boxThreeImage} alt="Box One Image" />
                  <Card.Body>
                    <Card.Title>Our Believe</Card.Title>
                    <Card.Text>
                      Startappss Believes every solution deserves a future
                      enability. We work with people to give back a solution
                      that is real-{" "}
                      {boxThree ? (
                        <span>
                          world implementable yet futuristic. Startappss is
                          organized yet wild with imaginations. We are always up
                          for new challanges and on toes to make things better.
                          We believe success always comes when we all walk
                          together.
                          <button
                            className="showMoreBtn"
                            onClick={() => setBoxThree(!boxThree)}
                          >
                            {" "}
                            ..Show less
                          </button>
                        </span>
                      ) : (
                        <button
                          className="showMoreBtn"
                          onClick={() => setBoxThree(!boxThree)}
                        >
                          ...Show More
                        </button>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Section>
    </>
  );
};
