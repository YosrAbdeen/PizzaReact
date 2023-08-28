import React from "react";

function Text (){
    const client = "big";
    const title = {
        big: "city",
        small: "town"

    }
    
return(
      <p> Welcome to the best resturant in {client=="big" ? title.big : title.small} .The history of pizza begins in antiquity, as various ancient cultures produced basic flatbreads with several toppings. </p>
);
}
export default Text