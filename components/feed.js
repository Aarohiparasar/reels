import React from "react";
import Navbar from "./navbar";
import Upload from "./Upload";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Feed() {
  return (
    <div className="feed-container">
      <Navbar />
      <Upload />
      <div className="videos-container">
        <div className="post-container">
          <video src="https://ik.imagekit.io/ikmedia/videodemo/o/videos%2Ftest-video.mp4?tr=w-400,h-640&alt=media&token=044352ec-306d-48f9-a93f-a6b034764eac"/>
          <div className="video-info">
          <div className="avatar-container">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/2.jpg"
              sx={{ margin: "0.5rem" }}
            />
           <p>Name</p>
          </div>
          <div className="post-like">
          <FavoriteIcon fontSize="large"/>
          <p style={{marginLeft:"0.5rem"}}>10</p>
          </div>
        </div>
        </div>
       
        <div className="post-container">
          <video />
        </div>
      </div>
    </div>
  );
}
export default Feed;
