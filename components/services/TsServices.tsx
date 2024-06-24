// import HeadingSec from "components/heading/HeadingSec";
import { TsHeading } from "components/heading/Heading";
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
// import ServicesBox from "./ServicesBox";
import { TsServicesBox } from "./TsServicesBox";
// import ServicesProfiles from "./ServicesProfiles";
import { TsServicesProfile } from "./TsServicesProfile";

// import ServicesSlider from "./ServicesSlider";
import { TsServicesSider } from "./TsServicesSlider";
// import ServicesTabs from "./ServicesTabs";
import { TsServicesTabs } from "./TsServicesTabs";

export const TsServices: React.FC = () => {
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
          {/* <HeadingSec title="Our Services" /> */}
          <TsHeading title="Our Services" />
        </div>

        <div className="secDiff">
          <Row>
            <TsServicesBox
              iconName={faLaptop}
              head={"Comprehensive IT Solutions"}
              para={"Software Development, Web Development, E-Commerce"}
            />

            <TsServicesBox
              iconName={faLink}
              head={"Blockchain"}
              para={
                "Hybride Blockchain, Smart Contract, Crypto, Deployment & Security"
              }
            />

            <TsServicesBox
              iconName={faInfinity}
              head={"DevOps"}
              para={
                "DevOps Architecture, Automation, Tech Architecture, Setup & Config, Cloud Engineering"
              }
            />

            <TsServicesBox
              iconName={faCloud}
              head={"Cloud Infra & Services"}
              para={
                "System Architecture, Infra Setup & Config, Automation, Security, Optimisation"
              }
            />

            <TsServicesBox
              iconName={faMobileScreenButton}
              head={"Mobile App Development"}
              para={
                "Android & iOS Application, React Native App, Flutter App, Progressive Web App"
              }
            />

            <TsServicesBox
              iconName={faPlaneDeparture}
              head={"Strategic Consulting"}
              para={"IT Strategy Planning, Digital Transformation"}
            />
          </Row>
        </div>

        <div className="secDiff">
          <Row>
            <TsServicesSider />
          </Row>
        </div>

        <div className="secDiff">
          <Row>
            {/* <ServicesTabs /> */}
            <TsServicesTabs />
          </Row>
        </div>

        <div className="secDiff">
          <TsServicesProfile />
        </div>
      </Section>
    </>
  );
};
