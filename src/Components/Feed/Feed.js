import React, { useState } from "react";
import styles from "./Feed.module.css";
import Post from "./Post";
const Feed = () => {
  const [popularActive, setPopularActive] = useState(false);
  return (
    <div className={styles.mainFeedContainer}>
      <div className={styles.sort}>
        <div className={styles.sortPrimary}>
          <p
            onClick={() => {
              setPopularActive(false);
            }}
          >
            Latest
          </p>
          <p
            onClick={() => {
              setPopularActive(true);
            }}
          >
            Popular
          </p>
        </div>
        {popularActive && (
          <div className={styles.sortSecondary}>
            <p>Weekly</p>
            <p>Monthly</p>
            <p>Forever</p>
          </div>
        )}
      </div>
      <div className={styles.postsMainContainer}>
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
