//this page will be the users profile page, where they can explore their libra bullshit
//I'm not sure how I want to style this for now...I think I will need to see how the data looks and get some ideas
import React, { Component } from "react";
import { withRouter } from "react-router";
import { RemedySmallCard, RemedySmallCards, RemedySectionTitle } from "../../components/RemedyCard"
// import API from "../../utils/API";
import { SmallCard, SmallCards } from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import { Libra, LibraSectionHeader } from "../../components/Libra";
import Navbar from "../../components/Navbar";
import "./style.css";

class Profile extends Component {

    userData = (sessionStorage.userData ? JSON.parse(sessionStorage.userData) : "no data");
    

    // NEED TO GET USER ID HERE
    componentDidMount() {
        if (!this.userData || this.userData === "no data") {
            this.props.history.push('/')
            window.location.reload();
        }
    }

    render() {
        return (
            <Wrapper>
                <Navbar />
                <Libra
                id={this.userData._id}
                username={this.userData.userName}
                name={this.userData.firstName}
                vegan={this.userData.vegan}
                hypoallergenic={this.userData.hypoallergenic}
                libra={this.userData.libra}
                />
                <div className="libraDashboard">
                    <div className="libraElements">
                    <LibraSectionHeader name={this.userData.firstName} sectionName="ELEMENTS"/>
                        <SmallCards>
                            {this.userData.elements.map(element => (
                                <SmallCard
                                    key={element._id}
                                    name={element.name}
                                    benefits={element.benefits}
                                    category={element.category}
                                    image={element.image}
                                    hypoallergenic={element.hypoallergenic}
                                    vegan={element.vegan}
                                />
                            ))}
                        </SmallCards>
                    </div>
                    <div className="libraRemedies">
                        <LibraSectionHeader name={this.userData.firstName} sectionName="HOME REMEDIES"/>
                        <RemedySmallCards>
                            {this.userData.remedies.map(remedy => (
                                <RemedySmallCard 
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
                        </RemedySmallCards>
                    </div>
                </div>
            </Wrapper>
        );
    }
}


export default withRouter(Profile);
