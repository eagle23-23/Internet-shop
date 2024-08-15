import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Orders extends Component {
  render() {
    return (
      <div className='itemsInShop'>
        <img src={"./img/" + this.props.item.img}></img>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <FaTrash onClick={() => this.props.onDelete(this.props.item.id)}className='deleteButton'/>
      </div>
    )
  }
}

export default Orders