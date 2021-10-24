import React, { useState } from "react";
import styles from "./Post.module.css";
import Avatar from "@mui/material/Avatar";
import { FaHeartBroken } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
const Post = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className={styles.postMainContainer}>
      <div className={styles.imageContainer}>
        <img
          src="https://ares.decipherzone.com/blog-manager/uploads/banner_webp_da06d145-93f9-4df9-8c7e-1e2c332c3a4a.webp"
          alt=""
        />
      </div>
      <div className={styles.postTitle}>
        <p>Build an API using Node, Express, MongoDB, and Docker</p>
      </div>
      <div className={styles.postDescription}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
          eligendi nihil provident atque officiis consectetur ducimus saepe
          recusandae accusantium expedita, veniam corrupti quas dicta
          consequuntur!
        </p>
      </div>
      <div className={styles.tags}>
        <p>#react</p>
        <p>#redux</p>
        <p>#materialUi</p>
        <p>#react</p>
      </div>

      <div className={styles.creatorMainContainer}>
        <div className={styles.avatar}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div className={styles.name}>
          <p>Durgeh Kumar</p>
          <p>18 october (4 days ago)</p>
        </div>
      </div>
      <div className={styles.actionArea}>
        <p onClick={() => setLiked(!liked)}>
          {liked ? (
            <FaHeart className={`${styles.iconn} ${styles.iconn1}`} />
          ) : (
            <FaHeartBroken className={`${styles.iconn} ${styles.iconn2}`} />
          )}
          12 Likes
        </p>
        <p>
          <FaRegComment className={styles.iconn} />
          12 Comments
        </p>
        <p onClick={() => setBookmarked(!bookmarked)}>
          {bookmarked ? (
            <FaBookmark className={`${styles.iconn} ${styles.iconn3}`} />
          ) : (
            <FaRegBookmark className={`${styles.iconn} ${styles.iconn4}`} />
          )}
        </p>
        {/* <p>Comment</p>
        <p>Bookmark</p> */}
      </div>
    </div>
  );
};

export default Post;
