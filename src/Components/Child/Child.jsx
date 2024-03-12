import React from 'react';
import GrandChild from '../GrandCHild/GrandChild';


const Child = ({property, grandChildValue}) => {
    console.log(grandChildValue)
    return (
        <div>
           <div>child</div> 
           <GrandChild
           grandChildValue={grandChildValue}
            property1 ={property}></GrandChild>
        </div>
    );
};

export default Child;