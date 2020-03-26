import React, { Component } from "react";
// import react merupakan bawaan dari react itu sendiri
import LandingComponent from "../modules/landing-component";

{
  /*import landingcomponent merupakan child dari parent landingpage, di
file landingpage, kita butuh sebuah componen yang akan digunakan untuk menampilkan halamannya
oleh karena itu kita membutuhkan landing component yang ada di folder modules. */
}

class LandingPage extends Component {
  state = {
    visible: false
  };

  componentDidMount() {}

  render() {
    return (
      <LandingComponent
        initialData={this.state}
      />
    );
  }
}

export default LandingPage;
