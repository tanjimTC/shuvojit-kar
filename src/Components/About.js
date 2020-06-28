import React from "react";
import Box from "@material-ui/core/Box";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../Images/logo.png";
const useStyles = makeStyles((theme) => ({
  aboutConatiner: {
    padding: "8vh 20px 40px 20px",
    width: "70%",
    margin: "auto",
    boxSizing: "border-box",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  styled_link: {
    textDecoration: "none",
    borderBottom: "4px solid #4caf50",
    borderTop: "4px solid transparent",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent",
    color: "#333",
    transition: "0.5s linear",
    "&:hover": {
      backgroundColor: "#4caf50",
      border: "4px solid #4caf50",
    },
  },
  [theme.breakpoints.down("xs")]: {
    aboutConatiner: {
      width: "95%",
      padding: "8vh 10px 40px 10px",
    },
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.aboutConatiner}>
      <Grid container justify="center">
        <Avatar
          data-aos="zoom-out-up"
          className={classes.avatar}
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678078-light-bulb-512.png"
          title="Contemplative Reptile"
        />
      </Grid>
      <Typography
        data-aos="zoom-out-up"
        variant="h3"
        style={{
          color: "#01579B",
          textAlign: "center",
          margin: "20px 0 50px 0",
          fontWeight: "400",
        }}
      >
        About Me
      </Typography>
      <Typography align="center" variant="h5" data-aos="zoom-out-up">
        Hello! I'm <b>Shuvojit</b>, a 27-year old programmer with a high level
        of expertise in <b>Software Development</b> and a knack for{" "}
        <b>entrepreneurship</b>
      </Typography>
      <br /> <br />
      <Typography
        align="center"
        variant="h5"
        style={{ paddingRight: "25px", paddingLeft: "25px" }}
        data-aos="zoom-out-up"
      >
        I've completed my Bachelors Degree in Computer Science at Sylhet
        International University and I spend most of my time working on{" "}
        <span className={classes.styled_link}>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://github.com/shuvojit007"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Source
          </a>
        </span>
        , attending Hackathons or browsing Reddit / Quora!
      </Typography>
      <br /> <br />
      <Typography align="center" variant="h5" data-aos="zoom-out-up">
        I'm currently working at{" "}
        <span>
          <a
            href="http://www.programming-hero.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Programming Hero"
              src={logo}
              height="60"
              width="300"
              style={{ verticalAlign: "middle" }}
            />{" "}
          </a>
        </span>{" "}
        as a CTO.
      </Typography>
      <br /> <br />
      <hr />
    </Box>
  );
};

export default About;
