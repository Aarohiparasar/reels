import React, { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/joy/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";

function Login() {
  const router=useRouter()
  const [email, setEmail] = React.useState("");
 
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { forgot,user } = useContext(AuthContext);
 
  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
      await forgot(email);
      console.log("email sent ")
      router.push('/login')
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
      console.log("user not present")
    }
},[user])
  return (
    <div className="container">
      <div className="carbg">
        <div className="car">
          <Carousel>
            <img
              src="https://www.trendmut.com/wp-content/uploads/2018/02/instagram-notifies-about-screenshots.jpg"
              alt="Slide 1"
            />
            <img
              src="https://www.usatoday.com/gcdn/presto/2019/10/08/USAT/74d5d419-6def-4730-a6a9-be2c0fd1689b-instagram.jpg"
              alt="Slide 2"
            />
            <img
              src="https://i.pinimg.com/736x/bf/ec/b4/bfecb42c0a451e9cc19ff0e47d6aaf2d.jpg"
              alt="Slide 3"
            />
          </Carousel>
        </div>
      </div>
      <div>
        <div className="login-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSFk25BM4UrxXvfDGa8_FyLKXmLphypZgfrXbMoCOPe4gPhw7qhWWq9UJzJHAvcgnWvY&usqp=CAU"
            style={{ width: "50%", marginLeft: "5rem" }}
            alt="Logo"
          />
          <TextField
            id="outlined-basic"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
         {/* <TextField
            id="outlined-basic"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />}*/}
          {error != "" && (
            <div style={{ color: "red", textAlign: "center" }}>{error}</div>
          )}

          <Button
            variant="contained"
            fullWidth
            component="span"
            style={{ marginTop: "1rem",backgroundColor:"blue" }}
            onClick={handleClick}
            disabled={loading}
            
          >
           send email
         </Button>
          {/* <div style={{ color: "red", textAlign: "center" }}>
            forget password
          </div>*/}
          <div className="bottom-card">
            don't have an account? <span style={{ color: "blue" }}>signup</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
