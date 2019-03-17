import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Information from './Information';
import Posts from './Posts';
import Stories from './Stories';

class App extends Component {
  state = {
    titlePage: true
  }

  handleClick() {
    this.setState({titlePage: false});
  }

  goToMainPage() {
    this.setState({titlePage: true});
  }

  render() {
    const { titlePage } = this.state;

    return (
      <div className="App">
        <Header handleClick={() => {this.goToMainPage()}} />
        {titlePage &&
          <div>
            <Hero handleClick={() => {this.handleClick()}}/>
            <Information />
            <Posts />
          </div>
        }

        {!titlePage &&
        <div>
          <Stories />
        </div>
        }
      </div>
    );
  }
}

export default App;
