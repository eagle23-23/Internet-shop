import React, { Component } from 'react'

export class Item extends Component{
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowDec(this.props.item)}></img>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <div className='addToCard' onClick={() => this.props.onAdd(this.props.item)}>+</div>

      </div>
    )
  }
}

export default Item;