import React from 'react';
import ReactDOM from 'react-dom';

import CanvasBase from './Components/canvasBase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <CanvasBase />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
