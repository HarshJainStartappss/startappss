import React from "react";
import HeadingSec from "components/heading/HeadingSec";
import { Section } from "components/section";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faChartSimple,
  faInfinity,
  faLink,
  faCloud,
  faMobileScreenButton,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import ServicesBox from "./ServicesBox";
import ServicesSlider from "./ServicesSlider";
import ServicesTabs from "./ServicesTabs";
import ServicesProfiles from "./ServicesProfiles";

const Services = () => {
  return (
    <>
      <Section
        id="services"
        pos="relative"
        innerWidth="90%"
        paddingTop="20px"
        paddingBottom="20px"
      >
        <div className="afterHead">
          <HeadingSec title="Our Services" />
        </div>

        <div className="secDiff">
          <Row>
            <ServicesBox
              iconName={faLaptop}
              head={"Comprehensive IT Solutions"}
              para={"Software Development, Web Development, E-Commerce"}
            />

            <ServicesBox
              iconName={faLink}
              head={"Blockchain"}
              para={
                "Hybride Blockchain, Smart Contract, Crypto, Deployment & Security"
              }
            />

            <ServicesBox
              iconName={faInfinity}
              head={"DevOps"}
              para={
                "DevOps Architecture, Automation, Tech Architecture, Setup & Config, Cloud Engineering"
              }
            />

            <ServicesBox
              iconName={faCloud}
              head={"Cloud Infra & Services"}
              para={
                "System Architecture, Infra Setup & Config, Automation, Security, Optimisation"
              }
            />

            <ServicesBox
              iconName={faMobileScreenButton}
              head={"Mobile App Development"}
              para={
                "Android & iOS Application, React Native App, Flutter App, Progressive Web App"
              }
            />

            <ServicesBox
              iconName={faPlaneDeparture}
              head={"Strategic Consulting"}
              para={"IT Strategy Planning, Digital Transformation"}
            />
          </Row>
        </div>

        <div className="secDiff">
          <Row>
            <ServicesSlider />
          </Row>
        </div>

        <div className="secDiff">
          <Row>
            <ServicesTabs />
          </Row>
        </div>

        <div className="secDiff">
          <ServicesProfiles />
        </div>
      </Section>
    </>
  );
};

export default Services;
