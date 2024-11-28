//import component Bootstrap React
import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostIndex from "./pages/post/index";
import Humas from "./pages/divisi-folder/humas";
import Mikat from "./pages/divisi-folder/mikat";
import PDD from "./pages/divisi-folder/pdd";
import proker from "./pages/post/proker";
import visi_misi from "./pages/post/Visi-Misi";
import divisi from "./pages/post/divisi";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#000080",
          position: "fixed", // Menjadikan navbar tetap
          top: 0, // Posisi di atas
          width: "100%", // Mengambil lebar penuh
          zIndex: 1000, // Mengatur z-index agar tetap di atas konten lainnya
        }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">HIMATIF</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Router>
                <div style={{ justifyContent: "space-between" }}></div>
                <a href="/index" className="nav-link">
                  HOME
                </a>
                {/* <a href="/divisi" className="nav-link">
                DIVISI
              </a> */}
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="DIVISI"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/mikat">
                    Minat & Bakat
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/PDD">PDD</NavDropdown.Item>
                  <NavDropdown.Item href="/humas">Humas</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="#action/3.4">
                    Bendahara
                  </NavDropdown.Item> */}
                </NavDropdown>
                <a href="/proker" className="nav-link">
                  PROKER
                </a>
                <a href="/visi_misi" className="nav-link">
                  VISI MISI
                </a>
              </Router>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <div className="app-content">
            <Route path="/index" exact component={Home} />
            <Route path="/humas" exact component={Humas} />
            <Route path="/mikat" exact component={Mikat} />
            <Route path="/pdd" exact component={PDD} />
            <Route path="/PostIndex" exact component={PostIndex} />
            <Route path="/divisi" exact component={divisi} />
            <Route path="/proker" exact component={proker} />
            <Route path="/visi_misi" exact component={visi_misi} />
            {/* <Route path="/divisi" exact component={divisi}/> */}
          </div>
        </Switch>
      </Router>
      <div
        style={{ backgroundColor: "#000080", marginTop: "100px" }}
        className="text-white"
      >
        <footer className="text-white py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>Tentang Kami</h5>
                <p>
                  Himpunan Mahasiswa Teknik Informatika adalah organisasi yang
                  bertujuan untuk mengembangkan potensi akademik dan
                  non-akademik anggota melalui berbagai kegiatan dan program.
                </p>
              </div>
              <div className="col-md-4">
                <h5>Kontak</h5>
                <ul className="list-unstyled">
                  <li>Email: info@himatif.org</li>
                  <li>Telepon: +62 812-3456-7890</li>
                  <li>Alamat: Jl. Dakota No. 84, Bandung</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Ikuti Kami</h5>
                <ul className="list-unstyled d-flex">
                  <li className="me-3">
                    <a
                      href="https://facebook.com"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f">facebook</i>
                    </a>
                  </li>
                  <li className="me-3">
                    <a
                      href="https://twitter.com"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter">Twitter</i>
                    </a>
                  </li>
                  <li className="me-3">
                    <a
                      href="https://instagram.com"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram">Instagram</i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-4">
              <p>
                &copy; {new Date().getFullYear()} Himpunan Mahasiswa Teknik
                Informatika. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
