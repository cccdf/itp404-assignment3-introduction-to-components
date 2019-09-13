import React from 'react';
import './App.css';
import getSubReddit from'./RedditApi';
import  SubReddit from './SubReddit';
import Loading from './Loading.js';
import Subcribers from './Subcribers.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      results: [],
      loading: true
    };
  };

async componentDidMount(){
  let response = await getSubReddit();
  let results = response.data.children;
  this.setState({results: results, loading: false});
  
  
}

render(){
    return(
      <div>
        <p className='numberofResult'>{this.state.results.length} results of subreddit NBA</p>
        {this.state.results.map((result) => {
          return <Subcribers result={result} key={result.id}></Subcribers>
        })[0]}
        <div>
          {this.state.loading? <Loading></Loading>: this.state.results.map((result) => {
            return <SubReddit result={result} key={result.id}></SubReddit>
          })}
        </div>
      </div>
    );
  }
}
  
export default App;
