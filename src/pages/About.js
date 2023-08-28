import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
    <div
      className="aboutTop"
      style={{ backgroundImage: `url(${MultiplePizzas})` }}
    ></div>
    <div className="aboutBottom">
      <h1> Welcome to Nona's Pizza</h1>
      <p>Our story began with a vision to redefine the art of pizza-making, blending traditional techniques with modern
         culinary expertise. Our talented team of chefs meticulously crafts each pizza using the finest, hand-selected
          ingredients. From our signature thin-crust masterpieces to our deep-dish delights, every bite is a harmonious
           symphony of flavors that will transport you to a world of gastronomic delight.

       We take pride in our diverse menu, offering an array of mouthwatering options to cater to every taste and 
       preference. Whether you're a fan of classic Margherita, a meat lover craving a loaded combination of savory
        toppings, or a vegetarian seeking a deliciously fresh and vibrant option, we have something to satisfy every 
        craving. Our commitment to quality means that we use only the freshest produce, locally sourced 
        whenever possible, ensuring that every bite is bursting with freshness and goodness.
       
      </p>
    </div>
  </div>
);
  
}

export default About
