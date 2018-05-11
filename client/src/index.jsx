import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        Twitter Content Lab
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));