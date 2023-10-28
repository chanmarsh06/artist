import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Painting() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="m-3">
              <Card.Img
                // variant="top"
                className="text-center"
                src={require("../Assests/Image/Screenshot_2023_1003_191914.jpg")}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="success text-white"
                  onClick={() => setModalShow(true)}
                >
                  Add To Basket
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-3">
              <Card.Img
                // variant="top"
                className="text-center"
                src={require("../Assests/Image/Screenshot_2023_1003_192133.jpg")}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="success text-white"
                  onClick={() => setModalShow(true)}
                >
                  Add To Basket
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-3">
              <Card.Img
                // variant="top"
                className="text-center"
                src={require("../Assests/Image/bg.jpg")}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="success text-white"
                  onClick={() => setModalShow(true)}
                >
                  Add To Basket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Painting;
