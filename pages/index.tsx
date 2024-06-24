import * as React from "react";
import type { NextPage } from "next";
import { Container, Box, Stack } from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";

import { BackgroundGradient } from "components/gradients/background-gradient";
// import Services from "../components/services/Services.js";
// import About from "components/about/About";
import { Tsabout } from "components/about/tsabout";
import { TsContact } from "components/contact/tsContact";
import { TsServices } from "components/services/TsServices";

// import Contact from "../components/contact/Contact.js";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Startappss"
        description="We are team of talented developers making websites with Modernization"
      />
      <Box>
        <HeroSection />

        <AboutSection />

        <ServicesSectiion />

        <ContactSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="0">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="baseline">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                CREATING DIGITAL SOLUTIONS FOR YOUR BUSINESS
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                We are team of talented developers making websites with
                Modernization
              </FallInPlace>
            }
          ></Hero>
        </Stack>
      </Container>
    </Box>
  );
};

const AboutSection = () => {
  // return <About />;
  return <Tsabout />;
};

const ServicesSectiion = () => {
  return <TsServices />;
};

const ContactSection = () => {
  return <TsContact />;
  // return <Contact />;
};

export default Home;

// export async function getStaticProps() {
//   return {
//     props: {
//       announcement: {
//         title: "Support us by becoming a stargazer! 🚀 ",
//         description:
//           '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
//         href: "https://github.com/saas-js/saas-ui",
//         action: false,
//       },
//     },
//   };
// }
