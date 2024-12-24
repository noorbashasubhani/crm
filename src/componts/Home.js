import React from 'react'

const Home = ({ addcart,addlike }) => {
  return (
    <div className="cart boxshadow">
      <p>add to cart</p>
      <p>Add this item to cars detai</p>
      <button className="btn btn-sm btn-primary" onClick={addcart}>Add To cart</button>
      <br></br>
      <button className="btn btn-sm btn-danger" onClick={addlike}>Add To Like</button>
    </div>
  )
}

export default Home;


