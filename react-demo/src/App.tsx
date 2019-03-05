import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <spring-marquee>
            <span className="item">Web Components are kind of cool</span>
            <span className="item">Goulash isn't an everyday food</span>
            <span className="item">Jurassic Park theme music</span>
          </spring-marquee>
        </div>

        <div className="wrapper">
          <spring-live-ticker subtitle="Ja Ja Genau">
            Currywurst mit einem Pilsner bitte
          </spring-live-ticker>
        </div>

        <div className="wrapper">
          <spring-graphql token="" organisation="reactjs" />
        </div>
      </div>
    );
  }
}

export default App;
