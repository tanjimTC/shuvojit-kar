import React from "react";
import Box from "@material-ui/core/Box";
import { Typography, Grid, Avatar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../Images/mypic.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles((theme) => ({
  homeConatiner: {
    padding: "8vh 20px 10px 20px",
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
    "& .MuiTypography-h5": {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "30px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeConatiner}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Shuvojit kar" />
      </Grid>
      <Typography className={classes.title} variant="h3">
        Shuvojit Kar
      </Typography>
      <Typography className={classes.desc} variant="h6">
        I create software, design websites, and make ideas happen
      </Typography>
      <Grid container justify="center">
        <IconButton className={classes.socialItems}>
          <GitHubIcon />
        </IconButton>
        <IconButton className={classes.socialItems}>
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid container className={classes.aboutItems}>
        <Grid item container xs={6} justify="space-around">
          <Grid item xs={12} md={3}>
            <Typography variant="h5" textAlign="center">
              About Me
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5">Resume</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} justify="space-around">
          <Grid item xs={12} md={3}>
            <Typography variant="h5">Contact</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5">Blog</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
