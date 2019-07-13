//this page will be the users profile page, where they can explore their libra bullshit
//I'm not sure how I want to style this for now...I think I will need to see how the data looks and get some ideas
import React, { Component } from "react";
import API from "../../utils/API";
import { Card, Cards } from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import Libra from "../../components/Libra";

class Profile extends Component {
    state = {
        userId: "",
        userProfile: ""
    };

    // NEED TO GET USER ID HERE
    componentDidMount() {
        this.loadUserProfile(this.state.userId);
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
                {this.state.userProfile.map(userDatum => (
                    <Libra
                        key={userDatum._id}
                        username={userDatum.username}
                        libra={userDatum.libra}
                    >
                    </Libra>
                ))}
                <Cards>
                    {this.state.userProfile.map(element => (
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
}

export default Profile;