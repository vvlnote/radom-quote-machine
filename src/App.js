import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './components/quoteMachine';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
        .then(data => data.json())
        .then(quotes => this.setState({quotes}, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (this.state.quotes.length === 0 || Number.isInteger(this.state.selectedQuoteIndex) === false) {
      return null;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex() {
    if(this.state.quotes.length === 0){
      return;
    }
    return Math.floor((Math.random()* (this.state.quotes.length - 1)) + 1);
  }

  assignNewQuoteIndex() {
    this.setState({selectedQuoteIndex: this.selectQuoteIndex()});
  }

  nextQuoteClickHandler() {
    console.log('hi');
  }

  render() {
    console.log(this.state.selectedQuoteIndex);
    return (
      <div className="App" id="quote-box">
      {
        this.selectedQuote ?
        <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} /> : 
        null
      }
      </div>
    );
  }
}

export default App;
