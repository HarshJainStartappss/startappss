import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";

import { Header, HeaderProps } from "./header";
import {
  AnnouncementBanner,
  AnnouncementBannerProps,
} from "../announcement-banner";
// import Footer from "./NewFooter";
import { TsFooter } from "./footer";
import { motion, useScroll } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
  announcementProps: AnnouncementBannerProps;
  headerProps: HeaderProps;
  // footerProps: FooterProps
}

export const Layout: React.FC<LayoutProps> = (props) => {
  // const { children, announcementProps, headerProps, footerProps } = props
  const { children, announcementProps, headerProps } = props;
  const { scrollYProgress } = useScroll();

  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      <AnnouncementBanner {...announcementProps} />
      <Header {...headerProps} />
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      {/* <Footer {...footerProps} /> */}
      {/* <Footer /> */}
      <TsFooter />
      <motion.div
        className="progress-bar"
        style={{
          position: "fixed",
          top: 83,
          left: 0,
          right: 0,
          height: "4px",
          backgroundColor: "#29d",
          scaleX: scrollYProgress,
          transformOrigin: "0 0",
          zIndex: 100,
        }}
      />
    </Box>
  );
};
