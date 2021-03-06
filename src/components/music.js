import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";
import Register from "./Register";

const Music = (music) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log(isLogin);
  const [openRegister, setRegister] = useState(false);

  return (
    <Card
      className="col-xs-1 m-1"
      sx={{ width: "192px", height: "240px", backgroundColor: "#212529" }}>
        {isLogin?(      <CardActionArea >
        <CardMedia
          height="152px"
          component="img"
          image={music.thumbnail}
          alt="green iguana"
          style={{ marginTop: "10px", objectFit: "fill" }}
        />
        <CardContent style={{ padding: "10px", marginTop: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "white",
              }}
              variant="h5"
              component="div"
            >
              {music.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Poppins",
                color: "white",
              }}
              variant="h5"
              component="div"
            >
              {music.year}
            </Typography>
          </div>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 300,
              fontFamily: "Poppins",
              color: "white",
              marginTop: "3px",
            }}
            variant="h5"
            component="div"
          >
            {music.artis}
          </Typography>
        </CardContent>
      </CardActionArea>):(      <CardActionArea onClick={() => setRegister(true)}>
        <CardMedia
          height="152px"
          component="img"
          image={music.thumbnail}
          alt="green iguana"
          style={{ marginTop: "10px", objectFit: "fill" }}
        />
        <CardContent style={{ padding: "10px", marginTop: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "white",
              }}
              variant="h5"
              component="div"
            >
              {music.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Poppins",
                color: "white",
              }}
              variant="h5"
              component="div"
            >
              {music.year}
            </Typography>
          </div>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 300,
              fontFamily: "Poppins",
              color: "white",
              marginTop: "3px",
            }}
            variant="h5"
            component="div"
          >
            {music.artis}
          </Typography>
        </CardContent>
      </CardActionArea>)}

      <Register open={openRegister} onClose={() => setRegister(false)} />

    </Card>
  );
};

export default Music;
