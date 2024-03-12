import React, { useState } from 'react';

const GrandChild = ({property1, grandChildValue}) => {
    console.log(grandChildValue)
    const [sehba, setsehba] = useState(40)
    
    return (
        <div>
          <h3>Grand CHild</h3> 
          <h4>property1: {property1}</h4> 
          <button onClick={()=>grandChildValue(sehba)}> click</button>
        </div>
    );
};

export default GrandChild;