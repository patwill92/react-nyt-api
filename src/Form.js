import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class Form extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <div className="col-12 mb-3 ">
            <div className="input-group rounded-left mb-2 mb-sm-0">
              <label className="sr-only" htmlFor="query">Keywords</label>
              <div className="input-group-addon rounded-left">Keywords</div>
              <input name='query' value={this.props.query} onChange={this.props.handleInputChange} type="text" className="form-control" id="query" placeholder="Keywords"/>
            </div>
          </div>
          <div className="col-12 mb-3 ">
            <div className="input-group rounded-left mb-2 mb-sm-0">
              <label className="sr-only" htmlFor="number">Number of Pages</label>
              <div className="input-group-addon rounded-left">Number of Pages</div>
              <input name='pages' value={this.props.pages} onChange={this.props.handleInputChange} type="text" className="form-control" id="number" placeholder="Number of Pages"/>
            </div>
          </div>
          <div className="col-12 mb-3 ">
            <div className="input-group rounded-left mb-2 mb-sm-0">
              <label className="sr-only" htmlFor="start">YYYYMMDD</label>
              <div className="input-group-addon rounded-left">Start Date</div>
              <input name='start' value={this.props.start} onChange={this.props.handleInputChange} type="text" className="form-control" id="start" placeholder="YYYYMMDD"/>
            </div>
          </div>
          <div className="col-12 mb-3 ">
            <div className="input-group rounded-left mb-2 mb-sm-0">
              <label className="sr-only" htmlFor="end">YYYYMMDD</label>
              <div className="input-group-addon rounded-left">End Date</div>
              <input name='end' value={this.props.end} onChange={this.props.handleInputChange} type="text" className="form-control" id="end" placeholder="YYYYMMDD"/>
            </div>
          </div>
        </div>
        <button onClick={this.props.handleSubmit} type="submit" className="btn btn-primary mr-3">Search</button>
        <button onClick={this.props.handleClear} type="submit" className="btn btn-primary">Clear Results</button>
      </form>
    );
  }
}

export default Form;
