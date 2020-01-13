import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({term: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('---', this.state.term);
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Search:
              <input type="text" id="term" placeholder="Search some History" onChange={this.handleChange}/>
            </label>
            <input type="submit" value="submit" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    )
  }

}

export default Search;