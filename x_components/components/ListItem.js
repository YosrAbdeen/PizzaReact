import React from "react";

function ListItem(props){

    return( 
        <li className= "list-group-item">
            <img src={props.p.img} alt=''/>
           <input type="checkbox" id={props.p.id}/>
           <label htmlFor={props.p.id}>{props.p.type}</label>
        </li>

    )

}

export default ListItem