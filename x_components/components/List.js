import React from "react";
import ListItem from "./ListItem";

function List(){
     return(
        <ul className="list-group">

           <ListItem 
             p={{
                type: 'Dine in',
                id:'Dine in' ,
               img:'https://images.unsplash.com/photo-1528696353932-be229661fd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=60'
             }}
              
              />

           <ListItem
           p={{
             type:'Delivery',
              id:'Delivery',
              img:'https://images.unsplash.com/photo-1590905666454-d24131c16f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80'
           }}
               
              />
        </ul>
     ); 
     

}
export default List