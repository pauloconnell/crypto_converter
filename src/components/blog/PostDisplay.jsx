import React from "react";

function PostDisplay({posts, deletePost}) {

  

  return (
    <div data-testid="posts-container" className="flex wrap gap-10">

      {posts.map((post, index)=>{
        if(!post) return null;
        //console.log(" got", {post});
        return(
   <div className="post-box" key={index}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <button onClick={()=>deletePost(index)}>Delete</button>
      </div>
        )
      }
    )}

    </div>
  );
}

export default PostDisplay;
