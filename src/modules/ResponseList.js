import React from "react";

const ResponseList =(props) =>{

    
    return (    
      <div>
        {props.rows.map((item, index) => (
            <li key={index}>{item}</li>))
        }
        </div>
    );
}

export default ResponseList;