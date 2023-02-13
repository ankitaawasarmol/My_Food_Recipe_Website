// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'

// function About() {
//   return (
//     <>
//     <div>
//     <Navbar/>
//       <h1>about us</h1>
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default About

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

// import { images } from "../../constants";
// import "./AboutUs.css";

const About = () => (
  <>
  <Navbar/>
  <div
    className="app__aboutus"
    id="about">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <br/>
        <div className="spoon__img">
        <img src="https://cdn.loveandlemons.com/wp-content/uploads/2019/09/dinner-ideas-2.jpg" alt="about_spoon" />
        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2022-03/5/0/asset/6201713e5c7e/sub-buzz-1009-1646440684-8.jpg" alt="about_spoon" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR803-hLcvorZT_bnfuoXGI5CiIrmcCX3ER9w&usqp=CAU" alt="about_spoon" />
        <img src="https://www.allrecipes.com/thmb/2duAVFC7mZZxqmkztw0lth3ea6Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7177_Bread-Pudding-II_TTV78_5941077_original-1x1-1-4fba991763564223bc624bf04f4c2276.jpg" alt="about_spoon" />
        <img src="https://www.thecookierookie.com/wp-content/uploads/2022/12/square-bread-pudding-recipe.jpg" alt="about_spoon" />
        <img src="https://pipingpotcurry.com/wp-content/uploads/2021/07/Black-eyed-peas-curry.-Rongi-Piping-Pot-Curry-copy.jpg" alt="about_spoon" />
        </div>
        <p className="p__opensans">
        Ankita Recipes is here to help you cook delicious meals with less stress and more joy.
         We offer recipes and cooking advice for home cooks, by home cooks. 
        Helping create “kitchen wins” is what we’re all about.
         Ankita Recipes was founded in 2003 by Elise Bauer as a home cooking blog to record her favorite family recipes. 
         Today, Ankita Recipes has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides,
         and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a diverse group of 
         recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.</p>
        <br/>
          
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <br/>
        <img src="https://cdn.shopify.com/s/files/1/0560/0198/6604/products/20220929_124646_6e282688-01ff-4afa-987a-f67def34f2b3_720x.jpg?v=1671796026" alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Elise Bauer was a busy Silicon Valley executive when she became sick with a flu that wouldn’t 
        go away in 2001. In 2003, Elise moved home with her parents and lived with them for several 
        years, recovering from chronic fatigue and documenting her parents’ cooking on Ankita Recipes. 
       Over the years, what started as a small blog grew to reach millions of readers every month! In 2020,
        Ankita Recipes was acquired by Dotdash Meredith, a New York-based media company.
        </p>
    </div>
  </div>
  <Footer/>
  </>
);

export default About;
