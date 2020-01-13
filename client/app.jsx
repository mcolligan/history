import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey good lookin'</h1>
        <Search />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));