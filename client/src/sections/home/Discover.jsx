import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import MenuCardTitled from "../../components/MenuCardTitled";

const styles = {
  root: {
    minHeight: "80vh",
    backgroundColor: "#2A9DB8",
    color: "#FFFFFF",
  },
  row: {
    paddingTop: "96px",
  },
  h1: {
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
  },
  h3: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2A9DB8",
  },
  card: {
    border: "none",
    color: "#FFFFFF",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2A9DB8",
  },
  cardHeader: {
    backgroundColor: "#FD6801",
  },
  cardTitle: {
    backgroundColor: "#FD6801",
    fontWeight: "bold",
    fontSize: "24px",
  },
  cardBody: {
    textAlign: "left",
    padding: "2rem",
  },
  cardFooter: {
    backgroundColor: "#E02415",
    fontWeight: "bold",
    fontSize: "20px",
    height: "60px",
  },
};

// mock food menu
const food = {
  store: "Army Navy",
  address: "6095, 60 Hwy Rush, Kentucky 41168",
  name: "Balsamic Glazed Pork",
  image: "/images/balsamic-glazed-pork.png",
  price: "10.50",
};

const Discover = () => {
  return (
    <div id="discover-whats-near-you" style={styles.root}>
      <Container style={styles.row}>
        <h1 style={styles.h1}>Discover What's Near You</h1>
        <Row className="text-center">
          <Col className="my-5" xs={12} md={8}></Col>
          <Col className="my-5" xs={12} md={4}>
            <MenuCardTitled {...food} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discover;
