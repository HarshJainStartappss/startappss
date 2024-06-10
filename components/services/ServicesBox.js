import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";

const ServicesBox = (props) => {
  const { iconName, head, para } = props;

  return (
    <>
      <Col xs={12} sm={12} md={6} lg={6} xl={6} className="mb-4">
        <div className="iconBox themeBg">
          <FontAwesomeIcon className="icon" icon={iconName} />
          <div className="servicesHead">
            <h4>{head}</h4>
            <p>{para}</p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ServicesBox;
