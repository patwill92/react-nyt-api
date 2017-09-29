import React, {Component} from 'react';

const style = {
  maxWidth: '70px',
  height: 'auto'
};

class Media extends Component {
  render() {
    return (
      <li className="media">
        <img style={style} className="d-flex mr-3" src={this.props.image} alt="Generic placeholder image"/>
          <div className="media-body">
            <h5 className="mt-0 mb-1"><a href={this.props.url}>{this.props.title}</a></h5>
            <small>{this.props.author}</small>
            <p>{this.props.snippet}</p>
          </div>
      </li>
    );
  }
}

export default Media;
