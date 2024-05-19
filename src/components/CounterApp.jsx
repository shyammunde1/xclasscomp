import React, { Component } from "react";

export class CounterApp extends Component {
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>count: 0</p>
        <div>
          <button>Increment</button>
          <button>Decrement</button>
        </div>
      </div>
    );
  }
}

export default CounterApp;
