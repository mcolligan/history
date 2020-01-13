import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      results: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({term: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/events?q=${this.state.term}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({results: [...data]});
      console.log(this.state)
    })
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