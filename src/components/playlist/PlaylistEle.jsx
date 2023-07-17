import React from 'react';
// import { useState } from 'react';
import './playlist.style.scss';
const PlaylistEle = () => {
  return (
    <div className="flex-wrap">
      <div className="flex-video">
        <iframe
          // src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          src=""
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex-content">
        <h1>노래제목</h1>
        <p>가수이름</p>
      </div>
    </div>
  );
};

export default PlaylistEle;
