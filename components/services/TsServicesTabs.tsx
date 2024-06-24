import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import serviceFirstImg from "../../public/static/assets/img/7Elevenfinalwork.png";
import serviceSecondImg from "../../public/static/assets/img/daznwork.png";
import serviceThirdImg from "../../public/static/assets/img/iqviawork.png";
import serviceFourthImg from "../../public/static/assets/img/alfuttaimwork1.png";

interface ServicesTabProps {
  //   children: string;
  children?: React.ReactNode;
  value: number;
  index: number;
  [key: string]: any;
}

const TabPanel: React.FC<ServicesTabProps> = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={"div"}>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
};

function a11yProps(index: number): {} {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const TsServicesTabs: React.FC = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const them = createTheme({
    palette: {
      mode: "dark", // or 'dark'
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <div className="bgSecColor">
        <ThemeProvider theme={them}>
          <Box sx={{ width: "100%" }}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                // variant="fullWidth"
                // aria-label="full width tabs example"
                // className="myTabs"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab
                  label="7-Eleven ConfigSync Optimization"
                  {...a11yProps(0)}
                />
                <Tab
                  label="DAZN Multi-Country App Customization"
                  {...a11yProps(1)}
                />
                <Tab
                  label="IQVIA Content Moderation System"
                  {...a11yProps(2)}
                />
                <Tab
                  label="Al-Futtaim Automotive B2B Digital Platform"
                  {...a11yProps(4)}
                />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="serviceTxtBox">
                      <br />
                      <h5>
                        The project aimed to create a real-time configuration
                        update solution for 7-Eleven, streamlining the process
                        of updating store machine configuration while reducing
                        both time and costs
                      </h5>
                      <br />
                      <ul>
                        <li>
                          <i className="ri-check-double-line"></i> Name-
                          7-Eleven ConfigSync Optimization.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Task-
                          Realtime Configuration update Solution.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Benefits-
                          Reduced their configuration sync time by 93% and cost
                          by approx 80%.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Audience-
                          Store Managers, Regional Supervisors, IT Personnel,
                          Decision-Makers and Executives.
                        </li>
                      </ul>
                      <br />
                      <p className="fst-italic">
                        7-Eleven, Inc., a global convenience store chain with
                        operations in 19 countries, faced a significant
                        challenge in managing the configurations of their store
                        machines efficiently. They needed a hierarchical store
                        configuration system that could swiftly adapt to changes
                        in guidelines and parameters at various levels, from
                        regions to individual stores.
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="imgServicesTabs">
                      <Image src={serviceFirstImg} alt="services image one" />
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel value={value} index={1} dir={theme.direction}>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="serviceTxtBox">
                      <br />
                      <h5>
                        The project sought to address the need for
                        country-specific application versions and features
                        within the DAZN platform. This customization was crucial
                        to comply with varying streaming regulations across
                        different countries while maintaining operational
                        efficiency
                      </h5>
                      <br />
                      <ul>
                        <li>
                          <i className="ri-check-double-line"></i> Name- DAZN
                          Multi-Country App Customization.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Task-
                          Migrating existing architecture to micro frontend,
                          region specific feature flags.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Benefits-
                          Reduced their configuration sync time by 93% and cost
                          by approx 80%.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Audience-
                          Store Managers, Regional Supervisors, IT Personnel,
                          Decision-Makers and Executives.
                        </li>
                      </ul>
                      <br />
                      <p className="fst-italic">
                        The DAZN Group, a global sports streaming service, faced
                        a complex challenge in managing country-specific
                        streaming guidelines and regulations within a single
                        version of their mobile apps and website. The project
                        aimed to find a solution that would allow them to
                        customize their application and features to align with
                        the guidelines of each country while maintaining a
                        single version of the app.
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="imgServicesTabs">
                      <Image src={serviceSecondImg} alt="services image one" />
                    </div>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="serviceTxtBox">
                      <br />
                      <h5>
                        The project sought to address the need for a centralized
                        content moderation system that could streamline
                        IQVIA&#39s content management across multiple platforms,
                        ensuring consistency and efficiency
                      </h5>
                      <ul>
                        <br />
                        <li>
                          <i className="ri-check-double-line"></i> Name- IQVIA
                          Content Moderation System.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Task- Build
                          micro-service based common content moderation system.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Benefits-
                          Single application to moderate content across multiple
                          platform, consistency, efficiency.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Audience-
                          Content Moderators,Content Creators,Administrators and
                          IT Specialists.
                        </li>
                      </ul>
                      <br />
                      <p className="fst-italic">
                        IQVIA, a leading multinational company in the healthcare
                        and clinical research industries, faced a unique
                        challenge. They had multiple blogging websites across
                        various platforms but lacked a unified content
                        moderation system. The project aimed to provide them
                        with a comprehensive content moderation solution
                        accessible from a single application.
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div className="imgServicesTabs">
                        <Image src={serviceThirdImg} alt="services image one" />
                      </div>
                    </Col>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="serviceTxtBox">
                      <br />
                      <h5>
                        The project sought to address several critical
                        challenges faced by Al-Futtaim Automotive, including the
                        need to improve website performance, enhance parts
                        search and tracking capabilities, provide order
                        management features, and adapt to changes in
                        manufacturing and product availability.
                      </h5>
                      <br />
                      <ul>
                        <li>
                          <i className="ri-check-double-line"></i> Name-
                          Al-Futtaim Automotive Digital Trade Platform.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Task- B2B
                          purchasing by offering efficient ordering, parts
                          search, tracking, invoice management, and access to
                          offers for multiple brands.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Benefits-
                          Single application to moderate content across multiple
                          platform, consistency, efficiency.
                        </li>
                        <li>
                          <i className="ri-check-double-line"></i> Audience- B2B
                          dealers.
                        </li>
                      </ul>
                      <p className="fst-italic">
                        Al-Futtaim Automotive, a division of the Al-Futtaim
                        Group, launched an ambitious project to transform their
                        B2B operations with a cutting-edge digital platform. The
                        initiative aimed to provide B2B dealers with a
                        streamlined and innovative solution for purchasing
                        genuine spare parts, body parts, tires, batteries, and
                        lubricants. This platform, known as the Trade Point
                        portal, was designed to optimize the ordering and
                        purchasing process while providing a single access point
                        for multiple Al-Futtaim brands.
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="imgServicesTabs">
                      <Image src={serviceFourthImg} alt="services image one" />
                    </div>
                  </Col>
                </Row>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
};
