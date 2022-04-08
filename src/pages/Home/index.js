import axios from "axios";
import { useEffect, useState } from "react";
import LatestPosts from "./components/LatestPosts";
import styles from "./index.module.css";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeProvider";
import ThemeButton from "../../componentsGlobal/ThemeButton/ThemeButton";

const Home = () => {
  const [allPosts, setPosts] = useState(null);
  const { theme, toggleTheme } = useContext(themeContext);

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
    <div className={styles.container} data-theme={theme}>
      <ThemeButton />

      <h1>Latest Posts</h1>
      {allPosts && <LatestPosts allPosts={allPosts} />}
    </div>
  );
};

export default Home;
// data-theme={theme}
