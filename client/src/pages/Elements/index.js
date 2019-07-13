//this page will be for listing all elements and finding out information about them
import React, { Component } from "react";
import API from "../../utils/API";
import { Cards, Card } from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";


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
        <Wrapper>
        <Navbar />
          {/* list of all the elements in the person profile. This view will have the elements name, picture, and a brief description. The user can click (or hover) to get more details */}
          <Cards>
            {this.state.elements.map(element => (
              <Card 
                key={element._id} 
                name={element.name} 
                benefits={element.benefits} 
                category={element.category}
                image={element.image}
              />
            ))}
          </Cards>
        </Wrapper>
    );
  }
};

export default Elements;