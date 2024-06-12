import * as React from "react";
import { HStack } from "@chakra-ui/react";
import { useRef } from "react";
import { useRouter } from "next/router";

import siteConfig from "data/config";

import { NavLink } from "components/nav-link";

import { useScrollSpy } from "hooks/use-scrollspy";

import { MobileNavButton } from "components/mobile-nav";
import { MobileNavContent } from "components/mobile-nav";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Navigation: React.FC = () => {
  const [careerModal, setCareerModal] = React.useState(false);
  const mobileNav = useDisclosure();
  const router = useRouter();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  const handleClose = () => setCareerModal(false);
  const handleShow = () => setCareerModal(true);

  // console.log("router==>", router);

  return (
    <>
      <div className="careerModal">
        <Modal
          show={careerModal}
          onHide={handleClose}
          centered
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h2> Careers </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4> Oops, Currently We Are Not Hiring ! </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Ok</Button>
          </Modal.Footer>
        </Modal>
      </div>

      <HStack spacing="2" flexShrink={0}>
        {siteConfig.header.links.map(({ href, id, ...props }, i) => {
          return (
            <NavLink
              display={["none", null, "block"]}
              href={href || `/#${id}`}
              key={i}
              isActive={router.asPath === `/#${id}`}
              // isActive={
              //   !!(
              //     (id && activeId === id) ||
              //     (href && !!router.asPath.match(new RegExp(href)))
              //   )
              // }
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
          // key={i}
          isActive={router.asPath === `/#careers`}
          // isActive={
          //   !!(
          //     (id && activeId === id) ||
          //     (href && !!router.asPath.match(new RegExp(href)))
          //   )
          // }
          // {...props}
          className="myNav"
          onClick={handleShow}
          // onClick={}
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
