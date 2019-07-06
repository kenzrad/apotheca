//this page will be for listing all elements and finding out information about them
import React, { Component } from "react";
import API from "../../utils/API";
import Item from "../../components/Item";
import Wrapper from "../../components/Wrapper";

class Elements extends Component {
  state = {
    elements: []
  };
  // When this component mounts, get all element data
  componentDidMount() {
    console.log("1. i am in the componentDidMount Function")
    this.loadElements();
  }


  loadElements = () => {
    API.getElements()
      .then(res => {
        this.setState({ elements: res.data })
        console.log("3. i am in the loadElements function")
        console.log(res.data);
      }
      )

      .catch(err => console.log(err));
  };



  render() {
    return (
      //this will be a grid of images and text
      <Wrapper>
        {/* list of all the elements in the person profile. This view will have the elements name, picture, and a brief description. The user can click (or hover) to get more details */}
        <Item />
      </Wrapper>
    );
  }
}

export default Elements;