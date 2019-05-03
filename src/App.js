import React from "react";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Services from "./Services";
import Footer from "./Footer";
import "./App.css";

import { Container, Responsive, Sidebar } from "semantic-ui-react";

class App extends React.Component {
  state = { sidebar: false };

  handleHide = () => this.setState({ sidebar: false });
  handleToggle = () => this.setState({ sidebar: true });

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div id="bg" />
        <Responsive minWidth={769}>
          <Container>
            <NavBar />
            <Welcome />
            <Services />
          </Container>
          <Footer />
        </Responsive>
        <Responsive maxWidth={768} as={Sidebar.Pushable}>
          <MobileNavBar
            sidebar={this.state.sidebar}
            handleToggle={this.handleToggle}
            handleHide={this.handleHide}
            children={
              <React.Fragment>
                <Container>
                  <Welcome />
                  <Services />
                </Container>
                <Footer />
              </React.Fragment>
            }
          />
        </Responsive>
      </React.Fragment>
    );
  }
}

export default App;
