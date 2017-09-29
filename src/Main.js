import React, {Component} from 'react';
import axios from 'axios';

import Form from './Form';
import Media from './Media';

const style = {
  minWidth: 'inherit'
};

class Main extends Component {
  state = {
    show: true,
    query: '',
    pages: '',
    start: '',
    end: '',
    results: []
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      show: true
    });
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': "64e9e11e0da3481e939fed8314e9c9de",
        'q': this.state.query,
        'begin_date': this.state.start,
        'end_date': this.state.end,
        'page': this.state.pages ? this.state.pages : 0
      }
    }).then(({data}) => {
      this.setState({
        results: data.response.docs
      });
    })
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  handleClear = event => {
    event.preventDefault();
    this.setState({
      results: []
    })
  };

  render() {
    let mediaList = this.state.results;
    mediaList = mediaList.map(result => {
      return (
        <Media
          title={result.headline.main}
          url={result.web_url}
          author={result.byline.original}
          image={result.multimedia.length > 0 ? `http://www.nytimes.com/${result.multimedia[0].url}` : 'https://www.neto.com.au/assets/images/default_product.gif'}
          snippet={result.snippet}
          key={result.web_url}
        />
      )
    });
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">NYT-React-API</h1>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-center">

          <div style={style} className="card col-12 pl-0 pr-0 mb-5">
            <div className="card-header">
              Search Parameters
            </div>
            <div className="card-body">
              <Form
                query={this.state.query}
                start={this.state.start}
                end={this.state.end}
                pages={this.state.pages}
                handleClear={this.handleClear}
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="card col-12 pl-0 pr-0 mb-3">
            <div className="card-header">
              Results
            </div>
            <div className="card-body pb-0">
              <ul className='list-unstyled'>
                {mediaList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
