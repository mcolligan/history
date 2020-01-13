import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import HistoryList from './historyList.jsx';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      results: [],
      currentPage: 0,
      pageCount: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ term: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.get(`http://localhost:3000/events?q=${this.state.term}&_page=${this.state.pageToGet}&_limit=10`)
    .then((res) => {
      let c = Math.ceil(Number(res.headers['x-total-count'] / 10));
      this.setState({
        results: [...res.data],
        pageCount: c
      })
    })
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Search:
              <input className="form-control" type="text" id="term" placeholder="Search some History" onChange={this.handleChange} />
            </label>
            <input className="btn-primary" type="submit" value="submit" onClick={this.handleSubmit} />
          </div>
        </form>

        <div className="container">
          {this.state.results.map((el, i) =>
            <HistoryList key={i} info={el} />
          )}
        </div>
        <div className="container">
        <ReactPaginate
          previousLabel={'<- Previous'}
          nextLabel={'Next ->'}
          breakLabel={' <...> '}
          breakClassName={'break-me'}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          previousLinkClassName={"btn btn-primary"}
          activeClassName={'active'} />
          </div>
      </div>
    )
  }

}

export default Search;