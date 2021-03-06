import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Spring Components Demo</h1>
    
        <div className="wrapper">
          <spring-video source="https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4"></spring-video>
        </div>

        <div className="wrapper">
          <spring-marquee>
            <span className="item">Web Components</span>
            <span className="item">React</span>
            <span className="item">Vue</span>
          </spring-marquee>
        </div>

        <div className="wrapper">
          <spring-live-ticker subtitle="Hooray for StencilJS">
            Web Components are useful
          </spring-live-ticker>
        </div>

        <div className="wrapper">
          <spring-graphql country-code="NZ" />
        </div>
      </div>
    );
  }
}

export default App;
