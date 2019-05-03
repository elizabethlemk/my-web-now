import React from "react";
import {
  Button,
  Grid,
  Header,
  Icon,
  Placeholder,
  Segment
} from "semantic-ui-react";

const placeholder = {
  height: 100,
  width: 100,
  float: "left",
  marginRight: "1em"
};

const Services = () => {
  return (
    <React.Fragment>
      <Header textAlign="center">Our Services</Header>
      <Grid doubling columns={2} style={{ padding: "0 5em 5em 5em" }}>
        <Grid.Column>
          <Segment>
            <Placeholder style={placeholder}>
              <Placeholder.Image />
            </Placeholder>
            <div className="service-header">
              <a href="#">
                Web Hosting <Icon name="arrow right" />
              </a>
            </div>
            summis legam minim quae aliqua ipsum fore legam quid amet summis
            malis quem eram duis noster veniam tempor quid sunt
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Placeholder style={placeholder}>
              <Placeholder.Image />
            </Placeholder>
            <div className="service-header">
              <a href="#">
                Resellers <Icon name="arrow right" />
              </a>
            </div>
            summis legam minim quae aliqua ipsum fore legam quid amet summis
            malis quem eram duis noster veniam tempor quid sunt
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Placeholder style={placeholder}>
              <Placeholder.Image />
            </Placeholder>
            <div className="service-header">
              <a href="#">
                VPS Hosting <Icon name="arrow right" />
              </a>
            </div>
            summis legam minim quae aliqua ipsum fore legam quid amet summis
            malis quem eram duis noster veniam tempor quid sunt
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Placeholder style={placeholder}>
              <Placeholder.Image />
            </Placeholder>
            <div className="service-header">
              <a href="#">
                Cloud Hosting <Icon name="arrow right" />
              </a>
            </div>
            summis legam minim quae aliqua ipsum fore legam quid amet summis
            malis quem eram duis noster veniam tempor quid sunt
          </Segment>
        </Grid.Column>
        <Grid.Row style={{ marginTop: "2em" }}>
          <Grid.Column floated="left" style={{ fontSize: "1.5rem" }}>
            {" "}
            <span style={{ color: "#916ae4" }}>Are you ready?</span> <br />
            <span style={{ color: "#2f1567" }}>
              Create an account, or contact us.
            </span>
          </Grid.Column>
          <Grid.Column floated="right" textAlign="right">
            <Button
              color="violet"
              className="roundbtn"
              style={{ margin: "0 1em", background: "#7c64af", color: "white" }}
            >
              Create your account
            </Button>
            <Button
              className="roundbtn"
              style={{
                background: "white",
                boxShadow: "5px 8px 10px rgba(135, 135, 135, 0.59)"
              }}
            >
              Contact Us
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default Services;
