import React, { Component } from "react";
import CountCom from "./containers/CountCom"
import store from "./redux/store"
import Person from "./containers/Person"
class App extends Component {

  render() {
    return (
      <div>
        <CountCom store={store}/>
        <Person></Person>
      </div>
    )
  }
}
export default App;
