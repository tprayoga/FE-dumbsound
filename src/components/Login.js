import { Box, Button, Link, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/auth";
import Register from "./Register";

const Login = ({ open, onClose }) => {
  const [openRegister, setOpen] = useState(false);
  const dispatch = useDispatch()
  const login =() => {
    dispatch(authActions.login())
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          backgroundColor: "#161616",
          maxWidth: "416px",
          maxHeight: "408px",
          borderRadius: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          className="mt-4"
          sx={{
            color: "white",
            width: "95px",
            height: "49px",
            fontWeight: "700",
            fontSize: "36px",
            marginLeft: 2,
          }}
        >
          Login
        </Typography>
        <form className="card-body mt-3 d-grid" id="modal-modal-description">
          <input
            type="email"
            className="form-control text-light mb-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            style={{
              width: "350px",
              backgroundColor: " rgba(210, 210, 210, 0.25)",
            }}
          ></input>
          <input
            type="password"
            id="inputPassword5"
            className="form-control text-light mb-4"
            aria-describedby="passwordHelpBlock"
            placeholder="Password"
            style={{
              width: "350px",
              backgroundColor: " rgba(210, 210, 210, 0.25)",
            }}
          ></input>
          <button
            onClick={login}
            className="btn btn-danger "
            type="button"
            style={{ backgroundColor: "#EE4622" }}
          >
            Login
          </button>
          <Typography
            className="mt-3 mb-3"
            style={{
              fontWeight: 400,
              fontSize: "18px",
              color: "#B1B1B1",
              textAlign: "center",
            }}
          >
            Don't have an account ? Klik 
            <Link
              href="#"
              onClick={() => setOpen(true)}
              underline="none"
              style={{
                fontWeight: 400,
                fontSize: "18px",
                color: "#fff",
                textTransform: "none",
              }}
            > Here
            </Link>
          </Typography>
        </form>
        <Register open={openRegister} onClose={()=> setOpen(false)}/>
      </Box>
    </Modal>
  );
};

export default Login;
