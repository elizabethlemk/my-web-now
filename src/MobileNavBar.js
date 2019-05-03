import React from "react";
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";

const MobileNavBar = ({ children, sidebar, handleToggle, handleHide }) => {
  return (
    <React.Fragment>
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleHide}
        vertical
        visible={sidebar}
      >
        <Menu.Item name="home" to="#" as="a" />
        <Menu.Item name="why us" to="#" as="a" />
        <Menu.Item name="contact us" to="#" as="a" />
        <Menu.Item name="login" to="#" as="a" />
        <Menu.Item>
          <Button positive style={{ padding: "0.75em 2em" }}>
            Support
          </Button>
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher dimmed={sidebar}>
        <Menu secondary size="large" style={{ paddingTop: "1.5em" }}>
          <Menu.Item onClick={handleToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Item header>MyWebNow</Menu.Item>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </React.Fragment>
  );
};

export default MobileNavBar;
