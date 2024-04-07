import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about && about.quote}</Typography>
        {/* <Typography>Sample Quote</Typography> */}
      </div>
      <div className="aboutContainer2">
        <div>
          {/* <img src={about.avatar.url} alt="Abhi" className="aboutAvatar" /> */}
          <img src="https://w.forfun.com/fetch/ee/ee356e62c87dcd8544a0ec5bbd86b15a.jpeg?w=400" alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about && about.name}
            {/* Yashvendra */}
          </Typography>

          <Typography>{about && about.title}</Typography>
          {/* <Typography>Software Developer</Typography> */}

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {about && about.subtitle}
            {/* MERN Stack */}
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {about && about.description}
            {/* I am a working professional, working with something right now and depressed as hell */}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;