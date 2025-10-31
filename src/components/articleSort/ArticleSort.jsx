import "h8k-components";

import Articles from "./articles/Articles";


import {useState, useEffect} from "react";
function ArticleSort({ articles }) {

  const [dateSortArr, setDateSortArr] = useState([...articles]);
  const [voteSortArr, setVoteSortArr] = useState([...articles]); // this is the default sort
  const [recentSort, setRecentSort] = useState(false);  // flag for recent/date sort



  const handleMostUpvoted = () => {
    // Logic for most upvoted articles
    console.log("handleMostUpvoted ran", recentSort)
    let sortByVote = [...voteSortArr].sort((a, b)=> Number(b.upvotes) - Number(a.upvotes));
    setVoteSortArr(sortByVote);
    setRecentSort(false);
  };

useEffect(()=>{
  setRecentSort(true)
  handleMostUpvoted();
  console.log("useEffect ran", recentSort )
}, [])

  const handleMostRecent = () => {
    // Logic for most recent articles
    let sortByDate = [...articles];
    sortByDate.sort((a,b)=> new Date(b.date) - new Date(a.date))
    setDateSortArr(sortByDate)
    setRecentSort(true)
  };
  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={recentSort ? dateSortArr : voteSortArr} />
      </div>
    </>
  );
}

export default ArticleSort;
