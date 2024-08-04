import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function SideBar() {
    return (
        <div className="sidebar">
        <Container>
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="/" activeClassName="active">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tables" activeClassName="active">
              Tables
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile" activeClassName="active">
              Profile
            </Nav.Link>
            <Nav.Link as={NavLink} to="/analytics" activeClassName="active">
              Analytics
            </Nav.Link>
            <Nav.Link as={NavLink} to="/hero404" target="_blank" activeClassName="active">
              404 Page
            </Nav.Link>
          </Nav>
        </Container>
      </div>
    );
    };
      
export default SideBar;
      