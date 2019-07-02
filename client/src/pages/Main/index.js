import React, { Component } from "react";
import API from "../../utils/API";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
          <Wrapper>
            <MainArticle class="mainArticle">
              {/* photograph here */}
              {/* main article text here */}
            </MainArticle>
            {/* lots of white space between these */}
            <SideArticle class="sideArticle">
              {/* photograph/article 1 */}
              {/* photograph/article 2 */}
              {/* photograph/article e */}
            </SideArticle>
          </Wrapper>
        <Footer />
      </>
    );
  }
}

export default Main;
