//this page will be the users profile page, where they can explore their libra bullshit
//I'm not sure how I want to style this for now...I think I will need to see how the data looks and get some ideas
import React, { Component } from "react";
import { withRouter } from "react-router";
import API from "../../utils/API";
import { Card, Cards } from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import Libra from "../../components/Libra";
import Navbar from "../../components/Navbar";

class Profile extends Component {

    userData = JSON.parse(sessionStorage.userData)

    // NEED TO GET USER ID HERE
    componentDidMount() {
        this.checkLoginStatus();
    }

    checkLoginStatus() {
        if (!this.userData) {
            console.log("I'm going to redirect your ass")
        }
        else {
            console.log (this.userData)
        }
    }

    loadUserProfile = (id) => {
        API.getUserProfile(id)
            .then(res =>
                this.setState({ userProfile: res.data })
            )
            .catch(err => console.log(err));
    };

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
                    >
                    </Libra>
                {/* <Cards>
                    {this.userData.map(element => (
                        <Card
                            key={element._id}
                            name={element.name}
                            benefits={element.benefits}
                            category={element.category}
                            image={element.image}
                        />
                    ))}
                </Cards> */}
            </Wrapper>
        );
    }
}


export default withRouter(Profile);
