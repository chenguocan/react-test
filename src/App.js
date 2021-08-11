
import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Button } from "antd"
class App extends Component {

  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </div>
    )
  }
}
export default App;
