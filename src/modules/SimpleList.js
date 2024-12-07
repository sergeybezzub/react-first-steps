import React from "react";

const SimpleList =(props) =>{

    
    return (    
      <div>
        {props.rows.map((item, index) => (
            <li key={index}>{item.name}_{item.id}</li>))
        }
        </div>
    );
}

export default SimpleList;