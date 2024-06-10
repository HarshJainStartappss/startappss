import React from "react";
import { Row, Col } from "react-bootstrap";
import { Heading } from "@chakra-ui/react";

const HeadingSec = (props) => {
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

export default HeadingSec;
