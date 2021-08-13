import React, { Component } from "react";
import CountCom from "./containers/CountCom"
import store from "./redux/store"
class App extends Component {

  render() {
    return (
      <div>
        <CountCom store={store}/>
      </div>
    )
  }
}
export default App;
