import React from "react";
import { Container, Grid, Header, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div
      style={{
        padding: "5em 10em",
        background: "#7c64af 100vw"
      }}
    >
      <Grid stackable columns={5} textAlign="center">
        <Grid.Column tablet={5} computer={3} className="contact">
          <Container>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Icon name="phone" />
                  </td>
                  <td>+1 800 WEBSITE</td>
                </tr>
                <tr>
                  <td>
                    <Icon name="mail" />
                  </td>
                  <td>
                    <a href="#">hello@mywebnow.com</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Icon name="map marker" />
                  </td>
                  <td>
                    1 Main St, Floor 6 <br />
                    New York, NY 10005
                  </td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Grid.Column>
        <Grid.Column computer={2} tablet={3} className="company">
          <Header>Company</Header>
          <Grid.Row>
            <a href="#">About Us</a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">News</a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">FAQs</a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">Contact Us</a>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column computer={2} tablet={3} className="services">
          <Header>Services</Header>
          <Grid.Row>
            <a href="#">Web Hosting</a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">Cloud Hosting</a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">VPS Servers</a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">Domain Names</a>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column computer={2} tablet={3} className="others">
          <Header>Others</Header>
          <Grid.Row>
            <a href="#">Transfer Domains</a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">Customer Portal</a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">Support Portal</a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">Video Tutorials</a>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column computer={2} className="social">
          <Grid.Row>
            <a href="#">
              <Icon size="large" name="facebook" />
            </a>
          </Grid.Row>
          <Grid.Row>
            <a href="#">
              <Icon size="large" name="youtube" />
            </a>{" "}
          </Grid.Row>
          <Grid.Row>
            <a href="#">
              <Icon size="large" name="twitter" />
            </a>{" "}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Footer;
