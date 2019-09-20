export default async function getSubReddit(subreddit){
    let response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    let results = await response.json();
    return results;

}