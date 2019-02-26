import React, {Component} from 'react';
import Button from '../Button'


class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">{this.props.date}</p>
        <h2 onClick={this.props.onTitleClick}>{this.props.title}</h2>
        <p className="body-content">{this.props.text}</p>
        <div>
          <Button title={`Like`} faIcon={`fa thumbs-up`} />
          <Button title={`Bookmarks`} faIcon={`fa thumbs-up`}/>
        </div>
      </div>
    )
  }
}


export default CardBody