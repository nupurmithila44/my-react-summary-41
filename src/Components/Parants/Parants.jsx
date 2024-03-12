import React from 'react';
import Child from '../Child/Child';


const Parants = ({property, grandChildValue}) => {
    
    return (
        <div>
           <div>
           <h3>Parants</h3>
           {/* <h4>property: {property}</h4> */}
           </div>
           <Child
           grandChildValue={grandChildValue}
           property={property}></Child>
        </div>
    );
};

export default Parants;