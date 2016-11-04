import React from 'react';

export default class App extends React.Component {
  static displayName = 'App';
  static propTypes = {
    params: React.PropTypes.array
  };
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
