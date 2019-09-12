import React from 'react';
import logo from './logo.svg';
import './App.css';
import getSubReddit from'./RedditApi';
import  SubReddit from './SubReddit';
import Loading from './Loading.js';


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
        <p>{this.state.results.length} Results of NBA subreddit</p>
        <p>subreddit subcribers: {this.state.results.subreddit_subscribers}</p>
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
