
import TextField from "@mui/material/TextField";
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import Link from "next/link";
import {useRouter} from "next/router";
import { AuthContext } from "../../context/auth";
import React, { useContext, useEffect } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";
const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function Signup() {
  const router=useRouter()
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { signup,user } = useContext(AuthContext);
  const handleClick = async () => {
    
    try {
      setLoading(true);
      setError("");
      const user=await signup(email, password);
      console.log("signed up ")

      const storageRef = ref(storage, `${user.uid}/Profile`);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
   
  }, 
  (error) => {
   console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);

    } catch (err) {
      console.log("err")
      setError(err.message);
      setTimeout(() => {
         setError('')
      },2000);
    }
    setLoading(false)
  };
  useEffect(()=>{
    if (user){
 router.push('/')
    }else{
      console.log("not logged in ")
    }
},[user])
  return (
    <div className="signup-container">
      <div className="signup-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSFk25BM4UrxXvfDGa8_FyLKXmLphypZgfrXbMoCOPe4gPhw7qhWWq9UJzJHAvcgnWvY&usqp=CAU"
          style={{ width: "50%", marginLeft: "5rem" }}
          alt="signup"
        />
        <TextField
         
          fullWidth
          variant="outlined"
          size="small"
          margin="dense"
          label="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
        
          fullWidth
          variant="outlined"
          size="small"
          margin="dense"
          label="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <TextField
        
          fullWidth
          variant="outlined"
          size="small"
          margin="dense"
          label="Full name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <Button
          component="label"
          variant="contained"
          fullWidth
          color="neutral"
          onChange={(e)=>setFile(e.target.files[0])}
          startDecorator={
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </SvgIcon>
          }
        >
          Upload a file
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button variant="contained" fullWidth component="span" style={{ marginTop: "1rem",backgroundColor:'blue',color:"white" }} onClick={handleClick} disabled={loading}>
          Signup
        </Button>
      </div>
     <Link href="/login"><div className="bottom-card">
        Already have an account? <span style={{ color: "blue" }}>Login</span>
      </div></Link>
    </div>
  );
}

export default Signup;

