import React from 'react';

export default function Subcribers(props){
    let result = props.result;
    return <p>Subreddit subcribers: {result.data.subreddit_subscribers}</p>
}