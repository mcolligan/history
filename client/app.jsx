import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Componenet {
  render() {
    return (
      <div>
        <h1>Hey good lookin'</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementByID('root'));