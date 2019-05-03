import React from "react";
import { Button, Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu secondary stackable size="large" style={{ paddingTop: "1.5em" }}>
      <Menu.Item header>MyWebNow</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="home" to="#" as="a" />
        <Menu.Item name="why us" to="#" as="a" />
        <Menu.Item name="contact us" to="#" as="a" />
        <Menu.Item name="login" to="#" as="a" />
        <Menu.Item>
          <Button positive style={{ padding: "0.75em 2em" }}>
            Support
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
