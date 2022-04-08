import axios from "axios";
import { useEffect, useState } from "react";
import LatestPosts from "./components/LatestPosts";
import styles from "./index.module.css";

const Home = () => {
  const [allPosts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div className={styles.container}>
      <div>Latest Posts</div>
      {allPosts && <LatestPosts allPosts={allPosts} />}
    </div>
  );
};

export default Home;
