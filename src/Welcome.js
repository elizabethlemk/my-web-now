import React from "react";
import { Button, Container, Form, Header } from "semantic-ui-react";

const Welcome = () => {
  return (
    <React.Fragment>
      <Container textAlign="center" style={{ padding: "5em 0 " }}>
        <Header style={{ fontSize: "4em" }}>
          <span style={{ color: "white" }}>
            Get a website in <br />
            15 minutes{" "}
          </span>
          <span style={{ color: "#21ba45" }}>or less</span>
        </Header>
        <Form style={{ margin: "auto", width: "40%" }}>
          <Form.Group inline widths="equal">
            <Form.Input fluid placeholder="Write your domain name here..." />
            <Button
              positive
              style={{ padding: "1.5em 2em", borderRadius: "0.75rem" }}
            >
              Search
            </Button>
          </Form.Group>
        </Form>
      </Container>
      <Container textAlign="center" style={{ padding: "5em 0" }}>
        <Header
          style={{
            textTransform: "uppercase",
            color: "white",
            fontSize: "1em"
          }}
        >
          Learn how we can enhance your business
        </Header>
        <Button
          circular
          positive
          icon="arrow down"
          style={{ fontSize: "1.5rem" }}
        />
      </Container>
      <Container
        textAlign="center"
        style={{
          padding: "5% 25% 5em 25%",
          letterSpacing: ".1em",
          lineHeight: "1em"
        }}
      >
        nulla quid ipsum cillum fugiat noster nulla esse quem fore sunt illum
        elit noster quae noster enim culpa aliqua export tempor sint sint legam
        fugiat sunt velit duis nulla
        <br />
        <Button
          style={{ margin: "2em 0", background: "#7c64af", color: "white" }}
          className="roundbtn"
        >
          Create your account
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default Welcome;
