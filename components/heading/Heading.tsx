import React from "react";
import { Row, Col } from "react-bootstrap";
import { Heading } from "@chakra-ui/react";

interface HeadingProp {
  title: string;
}

export const TsHeading: React.FC<HeadingProp> = (props) => {
  const { title } = props;
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Heading as="h2" size="xl" className="titles">
            {title}
          </Heading>
        </Col>
      </Row>
    </>
  );
};
