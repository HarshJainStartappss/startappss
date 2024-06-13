import {
  Box,
  BoxProps,
  Button,
  Center,
  CenterProps,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  IconButtonProps,
  LinkProps,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect,
} from "@chakra-ui/react";
import { AnimatePresence, motion, useElementScroll } from "framer-motion";
import useRouteChanged from "hooks/use-route-changed";
// import { getRoutes } from '@/layouts/mdx'
import NextLink from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RemoveScroll } from "react-remove-scroll";

import siteConfig from "data/config";
// import { Logo } from "components/layout/logo";
import { Link } from "@saas-ui/react";
import CareersModal from "components/careers-modal/CareersModal";
import Image from "next/image";
import logo from "../../public/static/assets/img/Creating Digital Solutions.jpg";

interface NavLinkProps extends LinkProps {
  label: string;
  href?: string;
  isActive?: boolean;
}

function NavLink({ href, children, isActive, ...rest }: NavLinkProps) {
  const { pathname } = useRouter();
  const bgActiveHoverColor = useColorModeValue("gray.100", "whiteAlpha.100");
  const router = useRouter();

  const [, group] = href?.split("/") || [];
  isActive = isActive ?? pathname.includes(group);

  return (
    <Link
      href={href}
      display="inline-flex"
      flex="1"
      minH="40px"
      px="8"
      py="3"
      transition="0.2s all"
      fontWeight={isActive ? "semibold" : "medium"}
      borderColor={isActive ? "purple.400" : undefined}
      borderBottomWidth="1px"
      color={isActive ? "white" : undefined}
      _hover={{
        bg: isActive ? "purple.500" : bgActiveHoverColor,
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}

interface MobileNavContentProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose = () => {} } = props;
  const [careerModal, setCareerModal] = React.useState(false);
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);
  const { pathname, asPath } = useRouter();
  const bgColor = useColorModeValue("whiteAlpha.900", "blackAlpha.900");

  useRouteChanged(onClose);

  /**
   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
   * Result: We'll close the menu
   */
  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false });

  React.useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose();
    }
  }, [showOnBreakpoint, onClose]);

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });
    }
  }, [isOpen]);

  const handleClose = () => setCareerModal(false);
  const handleShow = () => setCareerModal(true);
  function handleClk() {
    onClose();
    handleShow();
  }

  return (
    <>
      <CareersModal careerModal={careerModal} handleClose={handleClose} />
      <AnimatePresence>
        {isOpen && (
          <RemoveScroll forwardProps>
            <motion.div
              transition={{ duration: 0.08 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Flex
                direction="column"
                w="100%"
                bg={bgColor}
                h="100vh"
                overflow="auto"
                pos="absolute"
                top="0"
                left="0"
                zIndex="modal"
                pb="8"
                backdropFilter="blur(5px)"
              >
                <Box>
                  <Flex justify="space-between" px="8" pt="4" pb="4">
                    {/* <Logo /> */}

                    <Image
                      src={logo}
                      alt="logo"
                      height={40}
                      onClick={(e) => {
                        if (window.location.pathname === "/") {
                          e.preventDefault();
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="myLogo"
                    />

                    <HStack spacing="5">
                      <CloseButton ref={closeBtnRef} onClick={onClose} />
                    </HStack>
                  </Flex>
                  <Stack alignItems="stretch" spacing="0">
                    {siteConfig.header.links.map(
                      ({ href, id, label, ...props }, i) => {
                        return (
                          <NavLink
                            href={href || `/#${id}`}
                            key={i}
                            // isActive={asPath === `/#${id}`}
                            {...(props as any)}
                            className="myNav mobileNav"
                            onClick={onClose}
                          >
                            {label}
                          </NavLink>
                        );
                      }
                    )}

                    <NavLink
                      // href={href || `/#${id}`}
                      // key={i}
                      // isActive={asPath === `/#$careers`}
                      {...(props as any)}
                      className="myNav mobileNav"
                      onClick={() => handleClk()}
                    >
                      Careers
                    </NavLink>
                  </Stack>
                </Box>
              </Flex>
            </motion.div>
          </RemoveScroll>
        )}
      </AnimatePresence>
    </>
  );
}

export const MobileNavButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: "flex", md: "none" }}
        fontSize="20px"
        color={useColorModeValue("gray.800", "inherit")}
        variant="ghost"
        icon={<AiOutlineMenu />}
        {...props}
        aria-label="Open menu"
      />
    );
  }
);

MobileNavButton.displayName = "MobileNavButton";
