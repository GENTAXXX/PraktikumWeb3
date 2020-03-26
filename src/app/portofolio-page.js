import React, { Component } from "react";
import PortofolioComponent from "../modules/portofolio-component";

class PortofolioPage extends Component {
  state = {
    visible: false
  };

  componentDidMount() {}

  render() {
    return (
      <PortofolioComponent
        initialData={this.state}
      />
    );
  }
}

export default PortofolioPage;
