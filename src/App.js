import React from "react";
import Navbar from "./Components/navBar/navBar";
import ItemListContainer from "./Components/ItemListContainer/itemListContainer";
import "./Css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="grilla">
        <Navbar />
        <ItemListContainer greeting="Que onda anaconda" />
      </div>
    );
  }
}

export default App;
