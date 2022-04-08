import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LatestPosts.module.css";

const renderPosts = (post) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.post_title}>{post.title}</div>
      <div>{post.body.split(" ").slice(0, 8).join(" ")}...</div>
      <Link to={`/post/${post.id}`}>
        <button>Post Details</button>
      </Link>
    </div>
  );
};
const LatestPosts = ({ allPosts }) => {
  const [posts, setPosts] = useState(allPosts);

  return (
    <div className={styles.container}>
      {posts && posts.map((post, i) => <div key={i}>{renderPosts(post)}</div>)}
    </div>
  );
};

export default LatestPosts;
