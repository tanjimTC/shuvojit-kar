import React from "react";
import { Box, Typography, IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: "20px",
    background: "-webkit-radial-gradient(circle, #2c3e50, #1a1a1a)",
    textShadow: "1px 1px 10px #000",
    boxShadow: "2px 2px 20px #000",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    marginTop: "20px",
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
      fontSize: "60px",
      transition: "0.3s linear",
      "&:hover": {
        fill: "#4CAF50",
      },
    },
  },

  [theme.breakpoints.down("xs")]: {
    socialItems: {
      "& .MuiSvgIcon-root": {
        fontSize: "40px",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.footerContainer} data-aos="zoom-out-up" >
      <Typography className={classes.title} variant="h4" data-aos="zoom-out-up" data-aos-delay="400">
        CONNECT WITH ME
      </Typography>
      <br />
      <Typography className={classes.title} variant="h5" data-aos="zoom-out-up" data-aos-delay="400">
        Have an interesting idea? <br />
        Get in touch with me!
      </Typography>
      <br />
      <Grid container justify="center" >
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
        <IconButton
          className={classes.socialItems}
          target="_blank"
          href="mailto:shuvojit.kar1@gmail.com"
        >
          <MailIcon />
        </IconButton>
        <IconButton
          className={classes.socialItems}
          target="_blank"
          href="https://twitter.com/Shuvojit_kar"
        >
          <TwitterIcon />
        </IconButton>
      </Grid>
    </Box>
  );
};

export default Footer;
