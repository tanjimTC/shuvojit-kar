import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { Typography, Grid, Avatar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../Images/mypic.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles((theme) => ({
  homeConatiner: {
    padding: "8vh 20px 5px 20px",
    background: "-webkit-radial-gradient(circle, #2c3e50, #1a1a1a)",
    textShadow: "1px 1px 10px #000",
    boxShadow: "2px 2px 20px #000",
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "#fff",
    textAlign: "center",
    marginTop: "4vh",
  },
  desc: {
    color: "#fff",
    textAlign: "center",
    marginTop: "2vh",
  },
  socialItems: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      marginTop: "10px",
      fontSize: "40px",
      transition: "0.3s linear",
      "&:hover": {
        fill: "#4CAF50",
      },
    },
  },
  aboutItems: {
    width: "70%",
    margin: "20px auto",
    color: "#fff",
    boxSizing: "border-box",
    "& .MuiTypography-h5": {
      textAlign: "center",
      marginBottom: "10px",
      fontSize: "30px",
    },
  },
  aboutLink: {
    padding: "10px 25px",
    transition: "0.3s linear",
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      background: "#1B1F24",
    },
  },

  [theme.breakpoints.down("xs")]: {
    aboutItems: {
      width: "90%",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeConatiner}>
      <Grid container justify="center">
        <Avatar
          data-aos="zoom-out-up"
          className={classes.avatar}
          src={avatar}
          alt="Shuvojit kar"
        />
      </Grid>
      <Typography
        data-aos="zoom-out-up"
        data-aos-delay="250"
        className={classes.title}
        variant="h3"
      >
        Shuvojit Kar
      </Typography>
      <Typography
        data-aos="zoom-out-up"
        data-aos-delay="350"
        className={classes.desc}
        variant="h6"
      >
        I create software, design websites, and make ideas happen
      </Typography>
      <Grid
        data-aos="zoom-out-up"
        data-aos-delay="650"
        container
        justify="center"
      >
        <IconButton
          className={classes.socialItems}
          target="_blank"
          href="https://github.com/shuvojit007"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          className={classes.socialItems}
          target="_blank"
          href="https://www.linkedin.com/in/shuvojitkar"
        >
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid
        container
        className={classes.aboutItems}
        data-aos="flip-down"
        data-aos-delay="850"
      >
        <Grid item container xs={6} justify="space-around">
          <Grid item xs={12} md={3}>
            <Typography variant="h5">
              <Link to="/" className={classes.aboutLink}>
                About
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5">
              <Link to="/" className={classes.aboutLink}>
                Resume
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} justify="space-around">
          <Grid item xs={12} md={3}>
            <Typography variant="h5">
              <Link to="/"  className={classes.aboutLink}>
                Contact
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5">
              <Link className={classes.aboutLink}  to="/blog">
                Blog
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
