export default async function getSubReddit(){
    let response = await fetch('https://www.reddit.com/r/subreddits/search.json?q=NBA');
    let results = await response.json();
    // let finalresults = await results.data.children;
    return results;

}