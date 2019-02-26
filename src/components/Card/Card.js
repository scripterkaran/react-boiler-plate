import React, {Component} from 'react';
import CardBody from './CardBody'
import CardHeader from './CardHeader'
import { withRouter } from 'react-router-dom'


class Card extends Component {

  goToDetail (){
    this.props.history.push(`/posts/${this.props.item.id}`)
  }
  render() {
    return (
      <div className="card">
        <CardHeader category={this.props.item.category} image={this.props.item.image} />
        <CardBody title={this.props.item.title} text={this.props.item.text} date={this.props.item.date}  onTitleClick={()=>{this.goToDetail()}}/>
      </div>
    )
  }
}

export default withRouter(Card)