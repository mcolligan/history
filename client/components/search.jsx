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
      pageCount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getHistory = this.getHistory.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  getHistory(num) {
    let n = num ? num + 1 : 1;
    axios
      .get(
        `http://localhost:3001/events?q=${this.state.term}&_page=${n}&_limit=10`
      )
      .then((res) => {
        let c = Math.ceil(Number(res.headers['x-total-count'] / 10));
        this.setState({
          results: [...res.data],
          pageCount: c,
        });
      })
      .catch((err) => console.log('Nope:', err));
  }

  handlePage(e) {
    this.getHistory(e.selected);
  }

  handleChange(e) {
    this.setState({ term: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getHistory();
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>
              Search:
              <input
                className='form-control'
                type='text'
                id='term'
                placeholder='Search some History'
                onChange={this.handleChange}
              />
            </label>
            <input
              className='btn-outline-secondary'
              type='submit'
              value='submit'
              onClick={this.handleSubmit}
            />
          </div>
        </form>

        <div className='container'>
          {this.state.results.map((el, i) => (
            <HistoryList key={i} info={el} />
          ))}
        </div>
        <div className='container'>
          <ReactPaginate
            previousLabel={'<- Previous'}
            nextLabel={'Next ->'}
            breakLabel={' <...> '}
            pageCount={this.state.pageCount}
            onPageChange={this.handlePage}
            breakClassName={'break-me'}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            previousLinkClassName={'btn btn-outline-secondary'}
            nextLinkClassName={'btn btn-outline-secondary'}
            disabledClassName={'disbaled'}
            marginPagesDisplayed={2}
            activeClassName={'active'}
          />
        </div>
      </div>
    );
  }
}

export default Search;
