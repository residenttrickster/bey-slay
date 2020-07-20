import React from "react";

class BeyCard extends React.Component{
  
  render () {
    const { name, img, id } = this.props
    return (
      <div onClick={() => this.props.toggleFave(id)} className='bey-card'>
      <h3>{name}</h3>
      <img src={img} alt={name}></img>
      </div>
    )
  }
};


export default BeyCard