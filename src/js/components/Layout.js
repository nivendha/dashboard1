import React from "react";

import Aside from "./Aside";
import TopNav from "./TopNav";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div class="layout_container">
        <div class='row'>
          <div class='col-md-3 wrapper'>
           <Aside/>
          </div>
          <div class='col-md-9 wrapper'>
          <TopNav/>
          </div>
        </div>
      </div>
    );
  }
}
