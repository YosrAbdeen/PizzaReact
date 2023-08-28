import React, {Component} from "react";
import Product from "./Product";
import info from "./info";

class Products extends Component {
  constructor(){
    super()
    this.state = {info: info  ,
                  members :[],
                  counter: 0,
    }
    this.clickHandler=this.clickHandler.bind(this)
  }
    
  clickHandler(){
   if(this.state.counter < this.state.info.length){
    this.state.members.push(this.state.info[this.state.counter]);
    this.setState(function(prevState){
      return{counter: prevState.counter +1 }

    });

    this.newMembers=this.state.members.map(member => {
      return <Product
      key={member.id} img={member.img} name={member.name} ingredients={member.ingredients} price={member.price} />;

    }
    )
   }
  }
  
/*  
mapping(x){
 const members = x.map( member => <Product
             key={member.id} img={member.img} name={member.name} ingredients={member.ingredients} price={member.price} />);
     return members
    }

*/
render(){
return(
    <div className="row">
       <button className="btn btn-primary btn-lg btn-black " onClick={this.clickHandler}>Click me</button>
   {this.newMembers}
   
    </div>
)
}}
export default Products