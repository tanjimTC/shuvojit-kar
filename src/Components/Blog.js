import React from "react";
import { Box, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import avatar from "../Images/mypic.jpg";
const useStyles = makeStyles((theme) => ({
  headerOuter: {
    padding: "3vh 20px 5px 20px",
    background: "-webkit-radial-gradient(circle, #2c3e50, #1a1a1a)",
    textShadow: "1px 1px 10px #000",
    boxShadow: "2px 2px 20px #000",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
  },
  headerInner: {
    display:'flex',
    width: "70%",
    margin: "auto",
    height: '200px'
  },
  title: {
    color: "#fff",
    marginTop: "4vh",
  },
  aboutLink: {
    transition: "0.3s linear",
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      background: "#1B1F24",
    },
  },
  aboutItems: {
    margin: "20px auto",
    color: "#fff",
    boxSizing: "border-box",
    "& .MuiTypography-h5": {
      textAlign: "flex-start",
      marginBottom: "10px",
      fontSize: "20px",
    },
  },
  [theme.breakpoints.down("md")]: {
    headerInner: {
      width: "95%",
      margin: "auto",
    },
    avatar: {
      display: "none",
    },
  },
  [theme.breakpoints.down("xs")]: {
    headerInner: {
      width: "95%",
      margin: "auto",
    },
    avatar: {
      display: "none",
    },
  },
}));

const Blog = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.blogwrapper}>
      <Box component="div" className={classes.headerOuter}>
        <Box component="div" className={classes.headerInner}>
          <Grid container style={{ alignItems: "center" }}>
            <Grid item xs={12} md={6}>
              <Typography
                data-aos="zoom-out-up"
                data-aos-delay="250"
                className={classes.title}
                variant="h4"
              >
                Shuvojit Kar
              </Typography>
              <Grid
                container
                className={classes.aboutItems}
                data-aos="flip-down"
                data-aos-delay="850"
              >
                <Grid item xs={3} md={3}>
                  <Typography variant="h5">
                    <Link className={classes.aboutLink}>About</Link>
                  </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography variant="h5">
                    <Link className={classes.aboutLink}>Resume</Link>
                  </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography variant="h5">
                    <Link className={classes.aboutLink}>Contact</Link>
                  </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography variant="h5">
                    <Link className={classes.aboutLink} to="/blog">
                      Blog
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={0} md={6}>
              <Avatar
                data-aos="zoom-out-up"
                className={classes.avatar}
                src={avatar}
                alt="Shuvojit kar"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
