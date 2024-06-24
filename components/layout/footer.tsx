import React from "react";
import Image from "next/image";
import startappsImg from "../../public/static/assets/img/Startappss.jpg";
// import startappsImg from "../../public/static/assets/img/Startappss.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const TsFooter: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-10 align-items-center justify-content-end">
              <Image src={startappsImg} className="img-fluid" alt="" />

              <a href="#"></a>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Startappss Pvt. Ltd.</h3>
                <p>
                  93 Heera Bag
                  <br />
                  Indore MP 452010, India
                  <br />
                  <strong>Phone:</strong> +91 92389 20590
                  <br />
                  <strong>Email:</strong> info@startappss.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://twitter.com/Startappss111"
                    className="twitter"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="1x"
                      color="#1DA1F2"
                      className="footerIcon"
                      // spin
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/startappss/"
                    className="instagram"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="1x"
                      color="#1DA1F2"
                      className="footerIcon"
                      // spin
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/startappss-system-india-pvt-ltd/"
                    className="linkedin"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="1x"
                      color="#1DA1F2"
                      className="footerIcon"
                      // spin
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a
                    id="terms"
                    href="#"
                    data-toggle="modal"
                    data-target="#termsOfService"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a
                    id="policy"
                    href="#"
                    data-toggle="modal"
                    data-target="#privacyPolicy"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our Newsletter for Tech Updates</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Startappss</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits"></div>
      </div>
    </footer>
  );
};

// import { v
//   Box,
//   BoxProps,
//   SimpleGrid,
//   Container,
//   Text,
//   Stack,
//   Flex,
//   HStack,
// } from "@chakra-ui/react";

// import { Link, LinkProps } from "@saas-ui/react";

// import siteConfig from "data/config";

// export interface FooterProps extends BoxProps {
//   columns?: number;
// }

// export const Footer: React.FC<FooterProps> = (props) => {
//   const { columns = 2, ...rest } = props;
//   return (
//     <Box bg="white" _dark={{ bg: "gray.900" }} {...rest}>
//       <Container maxW="container.2xl" px="8" py="8">
//         <SimpleGrid columns={columns}>
//           <Stack spacing="8">
//             <Stack alignItems="flex-start">
//               <Flex>
//                 <Box as={siteConfig.logo} flex="1" height="32px" />
//               </Flex>
//               <Text fontSize="md" color="muted">
//                 {siteConfig.seo.description}
//               </Text>
//             </Stack>
//             <Copyright>{siteConfig.footer.copyright}</Copyright>
//           </Stack>
//           <HStack justify="flex-end" spacing="4" alignSelf="flex-end">
//             {siteConfig.footer?.links?.map(({ href, label }) => (
//               <FooterLink key={href} href={href}>
//                 {label}
//               </FooterLink>
//             ))}
//           </HStack>
//         </SimpleGrid>
//       </Container>
//     </Box>
//   );
// };

// export interface CopyrightProps {
//   title?: React.ReactNode;
//   children: React.ReactNode;
// }

// export const Copyright: React.FC<CopyrightProps> = ({
//   title,
//   children,
// }: CopyrightProps) => {
//   let content;
//   if (title && !children) {
//     content = `&copy; ${new Date().getFullYear()} - ${title}`;
//   }
//   return (
//     <Text color="muted" fontSize="sm">
//       {content || children}
//     </Text>
//   );
// };

// export const FooterLink: React.FC<LinkProps> = (props) => {
//   const { children, ...rest } = props;
//   return (
//     <Link
//       color="muted"
//       fontSize="sm"
//       textDecoration="none"
//       _hover={{
//         color: "white",
//         transition: "color .2s ease-in",
//       }}
//       {...rest}
//     >
//       {children}
//     </Link>
//   );
// };
