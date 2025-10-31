import React, { useState } from 'react';
import VoteModule from './voteModule/VoteModule';
const FeedbackSystem = () => {
   const [votes, setVotes] = useState([
      { name: 'Readability', upvotes: 0, downvotes: 0 },
      { name: 'Performance', upvotes: 0, downvotes: 0 },
      { name: 'Security', upvotes: 0, downvotes: 0 },
      { name: 'Documentation', upvotes: 0, downvotes: 0 },
      { name: 'Testing', upvotes: 0, downvotes: 0 },
   ]);
  // console.log('votes are', { votes });

   return (
      <div className="my-0 mx-auto text-center w-mx-1200">
         <div className="flex wrap justify-content-center mt-30 gap-30">
            {votes.map((vote, index) => (
               <VoteModule data={vote} index={index} setVotes={setVotes} key={vote.name}></VoteModule>
            ))}
         </div>
      </div>
   );
};

export default FeedbackSystem;
