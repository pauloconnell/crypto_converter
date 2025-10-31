import React, {useState} from "react";
import './blog.css';
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Blog() {

  const [post, setPost] = useState({title: "", description: ""});
  //const [postTitle, setPostTitle] = useState("");
  const [posts, setPosts] = useState([]);

  // onclick validate input
const handleClick = () => {

  if(post.title.length>0 && post.description.length>0){
    // create post
    setPosts((prevPosts)=> [...prevPosts, ({title: post.title, description: post.description})]);
    setPost({title: "", description: ""})
  }
}

const deletePost = (deleteIndex) => {
    setPosts(prevPosts=>{
     let newPosts=prevPosts.filter((post, index)=> index != deleteIndex);
     return newPosts;
})
  }

  return (
    <div className="text-center ">
      <div className="mb-20">
        <Input post={post} setPost={setPost}  />
        <button data-testid="create-button" className="mt-10" onClick={handleClick}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} setPosts={setPosts} deletePost={deletePost} />
      </div>
    </div>
  );
}

export default Blog;
