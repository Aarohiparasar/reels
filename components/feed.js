import React, { useState } from "react";
import Navbar from "./navbar";
import Upload from "./Upload";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Feed() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      url: "https://ik.imagekit.io/ikmedia/videodemo/o/videos%2Ftest-video.mp4?tr=w-400,h-640&alt=media&token=044352ec-306d-48f9-a93f-a6b034764eac",
      username: "User One",
      likes: 25,
    },
    {
      id: 2,
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      username: "User Two",
      likes: 15,
    },
  ]);

  const handleVideoUpload = (videoUrl) => {
    const newVideo = {
      id: videos.length + 1,
      url: videoUrl,
      username: "New User",
      likes: 0,
    };
    setVideos((prevVideos) => [newVideo, ...prevVideos]);
  };

  return (
    <div className="feed-container">
      <Navbar />
      <Upload onVideoUpload={handleVideoUpload} />
      <div className="videos-container">
        {videos.map((video) => (
          <div
            key={video.id}
            className="post-container"
            style={{ margin: "1rem 0" }}
          >
            <video
              src={video.url}
              controls
              width="100%"
              style={{ borderRadius: "10px", backgroundColor: "#000" }}
            />
            <div
              className="video-info"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "0.5rem",
              }}
            >
              <div
                className="avatar-container"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Avatar alt={video.username} src="" sx={{ margin: "0.5rem" }} />
                <p style={{ marginLeft: "0.5rem" }}>{video.username}</p>
              </div>
              <div
                className="post-like"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FavoriteIcon fontSize="large" />
                <p style={{ marginLeft: "0.5rem" }}>{video.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
