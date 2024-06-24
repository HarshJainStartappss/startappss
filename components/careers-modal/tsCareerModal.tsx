import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export interface CareerModalProp {
  careerModal: boolean;
  handleClose: () => void;
}

export const TsCareerModal: React.FC<CareerModalProp> = (props) => {
  const { careerModal, handleClose } = props;
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
    </>
  );
};
