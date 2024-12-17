import React, { useState } from "react";
import Button from "@mui/joy/Button";
import MovieIcon from "@mui/icons-material/Movie";
import LinearProgress from "@mui/material/LinearProgress";

function Upload({ onVideoUpload }) {
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      onVideoUpload(videoUrl);
      simulateProgress();
    }
  };

  const simulateProgress = () => {
    let value = 0;
    const interval = setInterval(() => {
      value += 20;
      setProgress(value);
      if (value >= 100) clearInterval(interval);
    }, 200);
  };

  return (
    <div className="upload-btn">
      <Button
        className="upload"
        variant="outlined"
        startIcon={<MovieIcon />}
        fullWidth
        component="label"
        style={{ marginTop: "1rem" }}
      >
        Upload Video
        <input
          type="file"
          accept="video/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </Button>
      {progress > 0 && (
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ marginTop: "0.5rem" }}
        />
      )}
    </div>
  );
}

export default Upload;
