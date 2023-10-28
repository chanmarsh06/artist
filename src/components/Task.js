import React from "react";
import "./task.css";
import { Route, Routes } from "react-router-dom";
import Drawing from "./Drawing";
import Painting from "./Painting";
import Sktech from "./Sktech";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import img1 from "../Assests/Image/PIG -logo.jpg";
// import Cart from "./Cart";
const Task = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <h2 className="text-primary">
              <img
                src={img1}
                className="d-inline-block "
                style={{ width: "40px" }}
                alt=""
              />
              Artist
            </h2>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/" className="fw-bold">
                Sktech
              </Nav.Link>
              {/* <Nav.Link href="#link">Services</Nav.Link> */}
              <Nav.Link href="/drawing" className="fw-bold">
                Drawing
              </Nav.Link>
              <Nav.Link href="/sktech" className="fw-bold">
                Painting
              </Nav.Link>

              {/* <Cart /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Sktech />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path="/sktech" element={<Painting />} />
      </Routes>
    </>
  );
};

export default Task;
