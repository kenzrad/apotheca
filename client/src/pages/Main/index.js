import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import MainArticle from "../../components/MainArticle";
import SideArticle from "../../components/SideArticle";

class Main extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Main;
