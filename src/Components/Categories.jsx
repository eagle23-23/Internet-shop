import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories: [
                {
                    key: 'all',
                    name: 'All',
                },
                {
                    key: 'facilities',
                    name: 'Facilities',
                },
                {
                    key: 'techno',
                    name: 'Technologies',
                },
            ]
        }
    }
  render() {
    return (
      <div className='catsForShop'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.sortByCat(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories