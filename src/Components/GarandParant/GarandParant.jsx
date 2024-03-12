import React, { useEffect, useState } from 'react';
import './GrandParant.css'
import Parants from '../Parants/Parants';

const GarandParant = () => {
    const [ property, setProperty]=useState(100);
    const [sehbaformGrand, setSehbaformgran]=useState(0)
    console.log(sehbaformGrand)
     
   const grandChildValue =(sehba)=>{
  setSehbaformgran(sehba)
    
   }
   useEffect ( ()=>{ console.log(sehbaformGrand)}, [sehbaformGrand])
    return (
        <div>
          <div  className='grand-parant'>
          <h3>Grand parant</h3> 
          </div>
           <Parants
           grandChildValue={grandChildValue}
           property={property}></Parants>
        </div>
      
        
    );
};

export default GarandParant;