//@ts-ignore
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";

import { Header, HeaderProps } from "./header";
import {
  AnnouncementBanner,
  AnnouncementBannerProps,
} from "../announcement-banner";
import Footer from "./NewFooter";
// import { Footer, FooterProps } from './footer'
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

interface LayoutProps {
  children: ReactNode;
  announcementProps: AnnouncementBannerProps;
  headerProps: HeaderProps;
  // footerProps: FooterProps
}

export const Layout: React.FC<LayoutProps> = (props) => {
  // const { children, announcementProps, headerProps, footerProps } = props
  const { children, announcementProps, headerProps } = props;

  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      <AnnouncementBanner {...announcementProps} />
      <Header {...headerProps} />
      <Box as="main">
        <SkipNavContent />
        {/* <AppRouterCacheProvider> */}
        {children}
        {/* </AppRouterCacheProvider> */}
      </Box>
      {/* <Footer {...footerProps} /> */}
      <Footer />
    </Box>
  );
};
