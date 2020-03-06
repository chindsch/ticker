import React, {Component} from 'react';

class Ticker extends Component {
  constructor(){
    super();
    this.state = {
      count:0,
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000);
  }

  shouldComponentUpdate(nextProps,nextState){
    if (nextState.count % 3 === 0 ){
      return true;
    }
    return false;
  }

  reset = () => {
    this.setState({
        count:0,
  })
}

  render(){
    return(
      <div>
        <p> This is the ticker: {this.state.count}</p>
        <button type="button" onClick={this.reset}> Clear count </button>
      </div>
    );
  };
};

export default Ticker;
