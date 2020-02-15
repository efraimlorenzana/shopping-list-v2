import React, { useState } from "react";
import "./App.css";
import HeaderElement from "./components/Header";
import ItemList from "./components/ItemList";
import { Container, Segment } from "semantic-ui-react";
import AddItem from "./feature/forms/add";

function App() {
  const [ListData, setListData] = useState([
    "Apple",
    "Orange",
    "Banana",
    "Grapes"
  ]);

  return (
    <div className="App">
      <Container style={{ marginTop: "7em" }}>
        <HeaderElement desc="Manage your Shopping cart" />
        <AddItem arrList={ListData} addToList={setListData} />
        <Segment>
          <ItemList RemoveToList={setListData} list={ListData} />
        </Segment>
      </Container>
    </div>
  );
}

export default App;
