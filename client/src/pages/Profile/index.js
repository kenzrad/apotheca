//this page will be the users profile page, where they can explore their libra bullshit
//I'm not sure how I want to style this for now...I think I will need to see how the data looks and get some ideas
import React, { Component } from "react";
import API from "../../utils/API";
import Item from "../../components/Item";
import Wrapper from "../../components/Wrapper";

class Profile extends Component {
  state = {
    elemprofileents: [],
    userDate: {}
  };
  // When this component mounts, get all element data
  componentDidMount() {
    this.loadElements();
    this.loadUserProfile();
  }


  loadElements = () => {
    API.getElements()
      .then(res =>
        this.setState({ elements: res.data })
      )
      .catch(err => console.log(err));
  };

  loadUserProfile = () => {
    API.getUserProfile()
      .then(res =>
        this.setState({ userProfile: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      //this will be a grid of images
      //70% width
      <Wrapper>
        {/* the libra componenet will be a title (like ELAVA!) and some sort of symbol doo-dad */}
        {/* <Libra /> */}
        {/* list of all the elements in the person profile. This view will have the elements name, picture, and a brief description. The user can click (or hover) to get more details */}
        <Item />
        {/* we will later add remedies here, but that will be next gen */}
      </Wrapper>
    );
  }
}

export default Profile;