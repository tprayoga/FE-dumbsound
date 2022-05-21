import React from "react";
import Navbar from "../components/Navbar";
import Attc from "../assets/interface.png"

const Addmusic = () => {
  return (
    <div style={{ backgroundColor: "#161616", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div className="container">

        <form className="mt-5 d-grid">
        <h1 className="mb-4" style={{
            color: "white",
            fontWeight: "700",
            fontSize: "24px"}}>Add Music</h1>
          <div className="d-flex">
            <input
              type="text"
              className="form-control text-light mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title"
              style={{
                backgroundColor: " rgba(210, 210, 210, 0.25)",
                marginRight:"15px"
              }}
            ></input>
            <label className="d-flex justify-content-around"
              style={{
                backgroundColor: " rgba(210, 210, 210, 0.25)",
                height:"38px",
                padding:0,
                border: "1px solid #D2D2D2",
                borderRadius:"5px",
                width:"215px"
              }}
              for="formFile"
            ><div className="mt-1 text-light">Thumbnail.jpg</div><img src={Attc} alt="atc" className="mt-1" style={{height:"28px", objectFit:"cover"}}/></label>
            <input type="file" id="formFile" hidden />
          </div>
          <input
            type="text"
            id="inputPassword5"
            className="form-control text-light mb-3"
            aria-describedby="passwordHelpBlock"
            placeholder="Year"
            style={{
              backgroundColor: " rgba(210, 210, 210, 0.25)",
            }}
          ></input>
          <select
            className="form-select text-light mb-3"
            aria-label="Default select example"
            style={{
              backgroundColor: " rgba(210, 210, 210, 0.25)",
            }}
          >
            <option className="text-dark" selected>
              Singer
            </option>
            <option className="text-dark" value="1">
              Male
            </option>
            <option className="text-dark" value="2">
              Female
            </option>
          </select>
          <label className="d-flex justify-content-around"
              style={{
                backgroundColor: " rgba(210, 210, 210, 0.25)",
                height:"38px",
                padding:0,
                border: "1px solid #D2D2D2",
                borderRadius:"5px",
                width:"113px"
              }}
              for="formFile"
            ><div className="mt-1 text-light">Attache.mp3</div></label>
            <input type="file" id="formFile" hidden />
          <div className="text-center">
            <button
              className="btn btn-danger mt-3"
              type="button"
              style={{ backgroundColor: "#F58033",width:"250px" }}
            >
              Add Song
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addmusic;
