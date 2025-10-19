import React from "react";

function Input({post, setPost}) {

  const handlePostTitle = (e) => {
    // add validation here
    //setPostTitle(e.target.value)
    setPost((prevPost)=>({...prevPost, title : e.target.value}))
  }
  const handlePost = (e) => {
      // add validation here
    //setPost(e.target.value)
    setPost((prevPost)=> ({...prevPost, description: e.target.value} ))
  }

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" value={post.title} data-testid="title-input" onChange={handlePostTitle}/>
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={post.description} data-testid="description-input" onChange={handlePost} />
    </div>
  );
}

export default Input;
