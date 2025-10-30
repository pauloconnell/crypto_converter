import React from "react";
import styles from './voteModule.module.css';

const VoteModule = ({data, setVotes}) => {
let{name, upvotes, downvotes} = data;


  const handleUp = ()=>{
   setVotes((prev) => {
     return prev.map(vote=> {        
        return vote.name === name ? 
          {...vote, upvotes: Number(vote.upvotes)+1 } : vote;
      }
      )
    });

  }

  const handleDown = () => {
    setVotes(prev =>{
      return prev.map(vote =>{
        return vote.name === name ? {...vote, downvotes: vote.downvotes+1} : vote;
      })
    })
  }

  return (

   
      <div className={`pa-10 w-300 card ${styles.card}`}>
        <h2>{name}</h2>
        <div className="flex my-30 mx-0 ">
          <button className="py-10 px-15" data-testid="upvote-btn-0" onClick={handleUp}>
            👍 Upvote
          </button>
          <button className="py-10 px-15 danger" data-testid="downvote-btn-0" onClick={handleDown}>
            👎 Downvote
          </button>
        </div>
        <p className="my-10 mx-0" data-testid="upvote-count-0">
          Upvotes: <strong>{upvotes}</strong>
        </p>
        <p className="my-10 mx-0" data-testid="downvote-count-0">
          Downvotes: <strong>{downvotes}</strong>
        </p>
      </div>
    
  )
}
export default VoteModule;