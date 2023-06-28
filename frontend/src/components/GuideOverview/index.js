import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import profileImg from "../../assets/profileImg.png";
import cath from "../../assets/cath.jpg";
import NavBar from "../NavBar";
import { NavLink, Outlet } from "react-router-dom";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function GuideOverview({chosenCity, setChosenCity}) {
  const buttonStyle = {
    // color: "#444445",
    color: "#0D0D0D",
  };

  const {id} = useParams();

  const selectedItem = chosenCity.find(item => item._id === id);
  console.log(chosenCity);

  const selectedItemId = selectedItem ? selectedItem._id : null;

  return (
    <div className="guideOverlay">
      <Paper
        sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}
        elevation={3}
        className="guideHeader"
      >
        {/* <div className="guideHeader"> */}
        <div className="guideHeader__btn--back">
          <NavLink to ="/home" activeClassName="active"> 
          <Button style={buttonStyle}>
            <KeyboardBackspaceIcon />
          </Button>
          </NavLink>
        </div>
        <div className="guideHeader__heading">
          <div className="guideHeader__heading--title">
            <h2>{selectedItem.title}</h2>
            <h5>
              By <a href="https://www.w3schools.com">{selectedItem.author}</a>
            </h5>
          </div>
        </div>
        <div >
          <NavLink to="/ProfilePage" activeClassName="active">
          <img className="guideHeader__img--profile" src={profileImg} alt="profileImg" />
          </NavLink>
        </div>
        {/* </div> */}
      </Paper>

      <div className="guideSubHeader">
        <div className="guideSubHeader__icons">
          {/* <div className="guideSubHeader__icons--thumbUp">
            <ThumbUpAltOutlinedIcon style={buttonStyle} />
            <span className="guideSubHeader__icons--thumbUpRating">88%</span>
          </div>
          <div className="guideSubHeader__icons--thumbDown">
            <ThumbDownAltOutlinedIcon style={buttonStyle} />
            <span className="guideSubHeader__icons--thumbDownRating">12%</span>
          </div> */}
        </div>
        <div className="guideSubHeader__additionalIcons">
          <div className="guideSubHeader__additionalIcons--pin">
            <PushPinOutlinedIcon style={buttonStyle} />
          </div>
          <div div className="guideSubHeader__additionalIcons--favourite">
            <BookmarkBorderOutlinedIcon style={buttonStyle} />
          </div>
        </div>
      </div>
      <div className="guide__img">
        <img src={selectedItem.imageURL} alt="cath" />
      </div>
      <div className="middleNavBar">
        <div className="middleNavBar__btn--overview">
       
          <NavLink to={`/guide/${selectedItemId}/overview`} activeClassName="active" className="guideActive" >
            <button>Overview</button>
          </NavLink>
        
        </div>
        <div className="middleNavBar__btn--experience">
          <NavLink to={`/guide/${selectedItemId}/experience`} activeClassName="active" className="guideActive">
            <button>Experience</button>
          </NavLink>
        </div>
        <div className="middleNavBar__btn--reviews">

          <NavLink to="/guide/reviews" activeClassName="guideactive" className="guideActive"> 
            <button>Location</button>
            </NavLink>


        
          <NavLink to={`/guide/${selectedItemId}/reviews`} activeClassName="guideactive" className="guideActive">
            <button>Reviews</button>

          </NavLink>
        
        </div>
        
      </div>
      <Outlet />

      <NavBar />
    </div>
  );
}

export default GuideOverview;
