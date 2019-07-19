//this page will be for listing all elements and finding out information about them
import React, { Component } from "react";
import API from "../../utils/API";
import { RemedyCards, RemedyCard } from "../../components/RemedyCard";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";
import './style.css';

class Remedies extends Component {
  state = {
    remedies: []
  };
  // When this component mounts, get all element data
  componentDidMount() {
    this.loadRemedies();
  }


  loadRemedies = () => {
    API.getRemedies()
      .then(res => {
        this.setState({ remedies: res.data })
      }
      )

      .catch(err => console.log(err));
  };



  render() {
    return (
        <Wrapper>
        <Navbar />
          {/* list of all the elements in the person profile. This view will have the elements name, picture, and a brief description. The user can click (or hover) to get more details */}
          <RemedyCards>
            {this.state.remedies.map(remedy => (
              <RemedyCard 
                key={remedy._id} 
                title={remedy.title}
                ingredients={remedy.ingredients}
                instructions={remedy.instructions}
                time={remedy.time}
                consistency={remedy.consistency}
                works={remedy.works}
                source={remedy.source}
              />
            ))}
          </RemedyCards>
        </Wrapper>
    );
  }
};

export default Remedies;