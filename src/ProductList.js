import React from 'react'
import puma from "./ns.png";
import ball from "./ns.png";
import shoe from "./ns.png";

const ProductList = () => {
  return (

<div id='cards'>
      <div className='card'>
        <img className="abi" src={puma} alt=''/>
      <h1>Shoe</h1>
      <p>Color</p>
      <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>
          <p>58 %</p>
          <h2>$ 3999</h2>
      </div>
      </div>

      <div className='card'>
        <img className="image" src={ball} alt=''/>
      <h1>Football</h1>
      <p>Color</p>
      <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div> 
          <p>78 %</p>
          <h2>$ 6789</h2>
      </div>
      </div>


      <div className='card'>
        <img className="image" src={shoe} alt=''/>
      <h1>Football kit</h1>
      <p>Color</p>
      <div id='colors'>
          <div className='color1'></div>
          <div className='color2'></div>
          <div className='color3'></div>
          <p>36 %</p>
               <h2>$ 20999</h2>
      </div>
      </div>
      </div>
  )
}
export default ProductList;