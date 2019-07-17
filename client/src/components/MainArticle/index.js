import React from "react";
import './styles.css';

function MainArticle( props, {children} ) {
  return (
    <>
      <div>
        <img className="mainImage" alt="Main Article Image" src={props.image}></img>
        <h3 className="mainTitle">{props.title}</h3>
        <div className="mainText">
          <p className="mainFirstP">With innovative indie brands born daily, non-stop product drops and an endless stream of trends taking over social media, the beauty industry thrives on newness - but among all the buzz some movements are more significant than others. This year, conversations around sustainability in the beauty industry boomed, while commitments to greater diversity and inclusion were cemented. So what’s next? Here are the 13 biggest trends to have on your radar for 2019.</p>
          <h5>1. Expect further commitments to sustainability</h5>    
          <p>The beauty industry now seems united on reducing the impact of plastic pollution, with new thoughtful packaging strategies and refined formulations. Lush is pioneering the movement for zero packaging (‘naked’, as they call it) by making products in solid form, from shampoo to make-up, and in January 2019 the brand will open the first packaging free cosmetic shop in the UK.</p>
          <p>In addition to the #passonplastic campaign, comes the rise of #waterlessbeauty. As the industry’s most-used ingredient, there are concerns that demand for water could outstrip supply. Cosmetics giant L'Oréal has committed to a 60 per cent reduction in water consumption per finished product by 2020 (from a 2005 baseline), while Unilever is committing to halve the water associated with the consumer use of its products by 2020 (against a baseline of 2010).</p>
          <p className="mainLastP">In the new year, expect to see the launch of more ‘dry’ products (think powdered cleansers and dry sheet masks), as well as entirely waterless beauty brand launches.</p>
          <h5>2. Beauty regimes will streamline</h5>
          <p>If part of adopting a more sustainable lifestyle includes being more modest with your product habit, know that in 2019 skincare regimes are set for a streamlined makeover. Lisa Payne, senior beauty editor at global trends company Stylus, says that while Korea may have exported its (often misunderstood) ‘10-step’ routine to the UK, a more honed approach is on the horizon.</p>
          <p>“Much of the beauty innovation and product adoption we see in the West (UK and US) is influenced by Asia,” Payne confirms. “Korea specifically is a hotbed of ingredient innovation, new regimes and beauty tech, but it’s also renowned for its laborious, multi-step approach, and as such we’ve seen the UK follow suit.” The new year update? ‘Skip-care’, the latest Korean beauty trend which has already arrived here.</p>
          <p>“A return to a more minimalist approach to beauty, this skincare ‘diet’ is all about using fewer, but harder-working items that contain higher concentrations of effective ingredients. For instance, in Korea we’re seeing hybrid products that tone and hydrate in one, using hero ingredients such as green tea and vitamin E.” Consider it a more mindful, highly-personalised approach to your skincare usage.</p>
          <p className="mainLastP">Payne adds that this results-driven routine has both a genderless and ageless appeal, and, thankfully, “it doesn’t clutter up the bathroom” – or your recycling bin.</p>
          <h5>3. Diversity and inclusion conversations will further be heard</h5>
          <p>The last two years have seen the industry’s late move towards demonstrating greater diversity. While we hope that by this time next year it will seem unbelievable that mainstream cosmetic brands didn’t always cater for all, with extensive colour ranges and ethnicity/gender/age-inclusive marketing, there is still a lot to be done. 
            <a href="https://www.harpersbazaar.com/uk/beauty/skincare/a25568595/beauty-trends-2019/"> (read more)</a>
          </p>
          
          
          
        </div>
      </div>
    </>
  );
}

export default MainArticle;
