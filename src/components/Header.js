import React from "react";
import {
  Fa,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarNav,
  NavItem
} from "mdbreact";

const Header = () => {
  return (
    <div>
      <Navbar color="indigo" dark expand="md" scrolling>
        <NavbarBrand href="">
          <Fa icon="bars" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="angle-left" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="home" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="microchip" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="cube" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="film" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="flask" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="database" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="crop" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="compass" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="angle-right" />
        </NavbarBrand>
        <NavbarBrand>
          <input type="text" />
        </NavbarBrand>
        <NavbarBrand href="">Project</NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="glass" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="gavel" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="gears" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="film" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="ellipsis-v" />
        </NavbarBrand>
        <NavbarBrand href="">
          <Fa icon="user-circle" />
        </NavbarBrand>
        <NavbarToggler />
        {/* <div className="collapse navbar-collapse" id="reactNavbar">
          <NavbarNav className="ml-auto">
            <NavItem>
              <Fa icon="user-circle" />
            </NavItem>
          </NavbarNav>
        </div> */}
      </Navbar>
    </div>
  );
};

export default Header;