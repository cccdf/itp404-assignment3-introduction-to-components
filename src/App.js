import React from 'react';
import './App.css';
import getSubReddit from'./RedditApi';
import  SubReddit from './SubReddit';
import Loading from './Loading.js';
import Subcribers from './Subcribers.js';
import SearchForm from './SearchForm.js';
import SubredditLists from './SubRedditLists';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      results: [],
      loading: false,
      previousSearches: [],
      readCount: 0,
    };
  };

  handleSearch = async(searchValue) => {
    this.setState({loading: true});

    let response = await getSubReddit(searchValue);
    let results = response.data.children;
    this.state.previousSearches.push(searchValue);
    this.state.readCount++;
    this.setState({results, loading: false});
  }

  applyPreviousSearches = async(term) => {
    this.setState({loading: true});
    this.state.readCount++;
    let response = await getSubReddit(term);
    let results = response.data.children;
    this.setState({results, loading: false});
  }

render(){
    return(
      <div>
        <SearchForm onSearch={this.handleSearch}/>
        {this.state.loading && <Loading></Loading>}
        <p>Read Count:{this.state.readCount}</p>
        {this.state.previousSearches.map((term) => {
          return <button type='button' onClick={this.applyPreviousSearches.bind(this, term)}>
            {term}
          </button>
        })}
        
        <div>
          <SubredditLists subreddit={this.state.results}/>
        </div>
      </div>
    );
  }
}
  
export default App;
