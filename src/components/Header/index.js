import { Box, Typography } from "@mui/material";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/Frame.png";
import number from "../../assets/images/number.svg";
export default function Header() {
  const style = {
    font: "13px",
  };
  return (
    <div>
      <Navbar expand="lg">
        <Container className="px-5 py-1">
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="70"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto  my-2 my-lg-0"
              style={{ maxHeight: "200px", opacity: "0.75" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-white mx-2">
                Products
              </Nav.Link>
              <Nav.Link className="text-white mx-2" href="#action2">
                About us
              </Nav.Link>
              <Nav.Link className="text-white mx-2" href="#action3">
                Blog
              </Nav.Link>
              <Nav.Link className="text-white mx-2" href="#action4">
                Contact
              </Nav.Link>
            </Nav>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <img
                src={number}
                width="35"
                height="42"
                className="d-inline-block align-top"
                alt="logo"
              />
              <Box>
                <Typography sx={{ fontSize: "12px", color: "#037B35" }}>
                  95-004-80-90
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#037B35" }}>
                  94-641-40-00
                </Typography>
              </Box>
            </Box>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
