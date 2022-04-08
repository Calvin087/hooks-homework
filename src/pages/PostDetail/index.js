import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import ThemeButton from "../../componentsGlobal/ThemeButton/ThemeButton";
import { themeContext } from "../../context/ThemeProvider";

const renderPost = (post) => {
  return (
    <div className={styles.post_container}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

const renderComments = (comments) => {
  return (
    <div className={styles.comment_box}>
      <h1>Recent Comments</h1>

      {comments.map((comment, i) => {
        return (
          <div key={i}>
            <h4>{comment.name}</h4>
            <pre>{comment.email}</pre>
            <p>"{comment.body}"</p>
          </div>
        );
      })}
    </div>
  );
};

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const { theme } = useContext(themeContext);

  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(data);
    };

    const getComments = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setComments(data);
    };

    getPost();
    getComments();
  }, [id]);

  return (
    <div className={styles.container} data-theme={theme}>
      <ThemeButton />
      {post && renderPost(post)}

      {comments && renderComments(comments)}
    </div>
  );
};

export default PostDetail;
