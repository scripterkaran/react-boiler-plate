
import React, {Component} from 'react';

class Button extends Component {
  render() {
    return (
      <button className="button button-primary" onClick={this.props.onClick}>
        <i className={`fa ${this.props.faIcon}` }></i> {this.props.title}
      </button>
    )
  }
}

export default Button