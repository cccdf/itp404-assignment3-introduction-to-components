export default async function getSubReddit(){
    let response = await fetch('https://www.reddit.com/r/nba.json');
    let results = await response.json();
    return results;

}