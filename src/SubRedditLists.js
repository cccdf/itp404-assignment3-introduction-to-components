import React from 'react';
import SubReddit from './SubReddit.js';

export default function SubRedditLists(props){
    return(
        <div>
            {props.subreddit.map((result) => {
                return <SubReddit result={result} key={result.id}/>
            })}
        </div>
    );
}