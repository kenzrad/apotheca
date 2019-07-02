//this page will be for listing all elements and finding out information about them
import React, { Component } from "react";
import API from "../../utils/API";

class Elements extends Component {
  state = {
    elements: []
  };
  // When this component mounts, get all element data
  componentDidMount() {
    this.loadElements();
  }


  loadElements = () => {
    API.getElements()
      .then(res =>
        this.setState({ elements: res.data })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      //this will be a grid of images and text
      <Wrapper>
        {/* list of all the elements in the person profile. This view will have the elements name, picture, and a brief description. The user can click (or hover) to get more details */}
        <Element />
      </Wrapper>
    );
  }
}

export default Elements;