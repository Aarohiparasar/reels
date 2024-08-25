import React from "react";
import Button from "@mui/joy/Button";
import MovieIcon from '@mui/icons-material/Movie';

import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
  return (
    <div className="upload-btn">
      <Button
        className="upload"
        variant="outlined"
        startIcon={<MovieIcon/>}
        fullWidth
        component="label"
        style={{ marginTop: "1rem" }}
      >
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
        />
        Upload
      </Button>
      <LinearProgress variant="determinate" value={10} 
      style={{marginTop:"0.2rem"}}/>
    </div>
  );
}

export default Upload;

