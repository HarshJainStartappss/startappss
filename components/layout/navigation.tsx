import * as React from "react";
import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import siteConfig from "data/config";

import { NavLink } from "components/nav-link";

import { useScrollSpy } from "hooks/use-scrollspy";

import { MobileNavButton } from "components/mobile-nav";
import { MobileNavContent } from "components/mobile-nav";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";

import CareersModal from "../careers-modal/CareersModal.js";

const Navigation: React.FC = () => {
  const [careerModal, setCareerModal] = React.useState(false);
  const mobileNav = useDisclosure();
  const router = useRouter();
  // const activeId = useScrollSpy(
  //   siteConfig.header.links
  //     .filter(({ id }) => id)
  //     .map(({ id }) => `[id="${id}"]`),
  //   {
  //     threshold: 0.75,
  //   }
  // );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  const handleClose = () => setCareerModal(false);
  const handleShow = () => setCareerModal(true);

  return (
    <>
      <CareersModal careerModal={careerModal} handleClose={handleClose} />

      <HStack spacing="2" flexShrink={0}>
        {siteConfig.header.links.map(({ href, id, ...props }, i) => {
          return (
            <NavLink
              display={["none", null, "block"]}
              href={href || `/#${id}`}
              key={i}
              isActive={router.asPath === `/#${id}`}
              {...props}
              className="myNav"
            >
              {props.label}
            </NavLink>
          );
        })}

        <NavLink
          display={["none", null, "block"]}
          href={`/#careers`}
          isActive={router.asPath === `/#careers`}
          className="myNav"
          onClick={handleShow}
        >
          Careers
        </NavLink>

        {/* <ThemeToggle /> */}

        <MobileNavButton
          ref={mobileNavBtnRef}
          aria-label="Open Menu"
          onClick={mobileNav.onOpen}
        />

        <MobileNavContent
          isOpen={mobileNav.isOpen}
          onClose={mobileNav.onClose}
        />
      </HStack>
    </>
  );
};

export default Navigation;
