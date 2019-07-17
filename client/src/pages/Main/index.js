import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import MainArticle from "../../components/MainArticle";
import SideArticle from "../../components/SideArticle";
import Navbar from "../../components/Navbar";
import './style.css';

class Main extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Navbar />
          <div className="articlesDiv">
            <MainArticle 
              className="mainArticle"
              image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beauty-shot-1544696992.jpg"
              title="13 big beauty trends for 2019"
            />
            {/* lots of white space between these */}
            <aside class="sideArticles">
              <SideArticle 
                image="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1080,h_675/https://www.naomiwhittel.com/wp-content/uploads/2019/07/Five-Ways-to-Detox-Your-Skin.jpg"
                title="Five Ways to Detox Your Skin"
                synopsis="Throughout the day, your skin takes center stage all the time. You see your skin every time you look in the mirror. Your skin makes up such a large part of your outer beauty and serves as a proxy for your inner health as well."
                alt="Side Article 1"
                link="https://www.nytimes.com/2018/10/10/t-magazine/yael-alkalay-red-flower-holistic-beauty.html"
              />
              <SideArticle 
                image="https://static01.nyt.com/images/2018/09/25/t-magazine/25tmag-red-flower-slide-P09X/25tmag-red-flower-slide-P09X-jumbo.jpg"
                title="Ingredient Hunting With a Holistic Skin-Care Expert"
                synopsis="Once a year, Yael Alkalay of the brand Red Flower heads to the southern coast of Massachusetts to get her hands dirty and dream up new elixirs."
                alt="Side Article 2"
                link="https://www.naomiwhittel.com/category/natural-beauty/"
              />
              <SideArticle 
                image="https://cdn.shopify.com/s/files/1/0627/9101/files/beauty2_large.png"
                title="Why You Should Make a Switch to a Natural Beauty Routine (and 4 Products We Love)"
                synopsis="Is your beauty routine based in love or fear? That may sound like a strange question at first, but seriously—think about it. For so many of us, the measures we take to look great are driven more by a fear that we don’t look very good at all"
                alt="Side Article 3"
                link="https://www.hyperbiotics.com/blogs/recent-articles/why-you-should-make-a-switch-to-a-natural-beauty-routine-and-4-products-we-love"
              />
                            
            </aside>
          </div>
        </Wrapper>
      </>
    );
  }
}

export default Main
