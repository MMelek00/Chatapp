import React from "react";
import { Container, Content } from "native-base";
import HistoryCard from "../Components/HistoryCard";
class History extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Content style={{ paddingTop: 10 }}>
          <HistoryCard />
        </Content>
      </Container>
    );
  }
}

export default History;
