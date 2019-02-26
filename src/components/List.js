import React, {Component} from 'react';
import Card from './Card/Card.js'
import {data} from '../dummy'



class List extends Component {

  renderList() {
    return Object
      .keys(data)
      .map(key => <Card key={key} index={key} item={data[key]} />)
  }

  render() {
    return (
      <div className='card-list-container'>
        {this.renderList()}
      </div>
    )
  }
}


export default List
