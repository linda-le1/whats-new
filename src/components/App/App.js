import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import tech from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsArticles: {
        local: local,
        entertainment: entertainment,
        health: health,
        science: science,
        tech: tech
      },
      articleToDisplay: 'local'
    }
  }

  render () {
    return (
      <div className="app">
        <h1>WHAT'S NEW</h1>
        <NewsContainer news={this.state.newsArticles[this.state.articleToDisplay]} />
      </div>
    );
  }
}

export default App;
