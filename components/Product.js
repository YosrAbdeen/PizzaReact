import React, { Component } from "react";



class Product extends Component{
    render(){
return(
    <div className="col-md-4 col-sm-6">
      <div className="card" >
        <div className="card-header">
         <img style={{maxWidth: '100%'}}src={this.props.img}/></div>

    <div className="card-body">
       <h2>{this.props.name}</h2>
      
       <h5>{this.props.ingredients}</h5>
       <h6>{this.props.price}</h6>
    
       
   
        </div>
      </div>
 </div>
);
}
}
export default Product