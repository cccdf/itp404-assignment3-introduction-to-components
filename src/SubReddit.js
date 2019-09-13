import React from 'react';

export default function SubReddit(props) {
  let result = props.result;
  let num_comments = result.data.num_comments? result.data.num_comments.toLocaleString() : 'No comments!';
  return <div className='result'>
      <a href={result.data.url} target='_blank'>{result.data.title}</a>
      <p>Score: {result.data.score}</p>
      <p>Ups: {result.data.ups.toLocaleString()}</p>
      <p>Comments: {num_comments}</p>
      <p>Subreddit Subcribers: {result.data.subreddit_subscribers}</p>
  </div>;
}