import React from 'react';
// import { useState } from 'react';
import styles from './playlist.module.scss';

const PlaylistEle = ({ url, title, artist }) => {
  return (
    <div className={styles.flexWrap}>
      <div className={styles.flexVideo}>
        <iframe
          // src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          src=""
          title={url}
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.flexContent}>
        <h1>{title}</h1>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default PlaylistEle;
