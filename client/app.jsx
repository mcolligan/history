import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Factual History</h1>
          <p>Find what you need...Beleive it if you want</p>
            <Search />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));