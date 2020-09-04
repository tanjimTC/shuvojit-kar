import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import HomeIcon from "@material-ui/icons/Home";
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
    marginLeft: "auto",
  },
  headerInner: {
    display: "flex",
    width: "60%",
    margin: "auto",
    minHeight: "100px",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    marginTop: "2vh",
  },
  aboutLink: {
    background: "rgb(67, 210, 73)",
    transition: "0.3s linear",
    padding: "5px 15px",
    color: "#fff",
    marginRight: "20px",
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none",
    "&:hover": {
      background: "#1B1F24",
    },
  },
  navItems: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
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
  slug: {
    color: "rgb(67, 210, 73)",
    fontStyle: "italic",
    marginBottom: "4vh",
  },
  blogPostContainer: {
    width: "70%",
    margin: "10px auto 30px auto ",
  },
  image: {
    width: "100%",
  },
  CardBottom: {
    display: "flex",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("md")]: {
    headerInner: {
      width: "90%",
      margin: "auto",
    },
    blogPostContainer: {
      width: "90%",
      margin: "10px auto 30px auto ",
    },
  },
  [theme.breakpoints.down("xs")]: {
    headerInner: {
      width: "100%",
      margin: "auto",
    },
    aboutLink: {
      marginRight: "10px",
      padding: "4px 10px",
    },
    headerOuter: {
      "& .MuiTypography-h4": {
        fontSize: "1.4rem",
      },
    },
  },
}));
const SingleBlog = (props) => {
  const classes = useStyles();
  const { _id } = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4200/blogs")
      .then((res) => res.json())
      .then((data) => {
        const blogDetails = data.find((x) => x._id === _id);
        setBlog(blogDetails);
        window.scrollTo(0, 0);
      });
  }, [_id]);
  return (
    <Box component="div">
      <Box className={classes.headerOuter}>
        <Grid container className={classes.headerInner}>
          <Grid item xs={6} md={6} data-aos="zoom-out-up" data-aos-delay="250">
            <Typography variant="h5" className={classes.title}>
              Shuvojit Kar
            </Typography>
            <small style={{ color: "#4caf50", fontSize: "13px" }}>author</small>
          </Grid>
          <Grid item xs={6} md={6}>
            <Grid
              container
              className={classes.navItems}
              data-aos="zoom-out-up"
              data-aos-delay="250"
            >
              <Link className={classes.aboutLink} to="/blog">
                All Blogs
              </Link>
              <Link to="/" style={{ color: "white" }}>
                <HomeIcon />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <br /> <br />
        <Typography
          data-aos="zoom-out-up"
          data-aos-delay="350"
          variant="h4"
          className={classes.title}
          align="center"
        >
          {blog.blogTitle}
        </Typography>
        <br />
        <br />
      </Box>
      <Box component="div" className={classes.blogPostContainer}>
        <br />
        <Typography variant="h5">{blog.blogTitle}</Typography>
        <br />
        <div className={classes.CardBottom}>
          <div style={{ display: "flex" }} data-aos="zoom-out-right">
            <div>
              <PersonIcon style={{ color: "#4CAF50", marginRight: "5px" }} />
            </div>
            <div style={{ marginTop: "5px" }}>
              {blog.author ? (
                <span>{blog.author}</span>
              ) : (
                <span>Shuvojit Kar</span>
              )}
            </div>
          </div>
          <div style={{ display: "flex" }} data-aos="zoom-out-left">
            <div>
              <DateRangeIcon style={{ color: "#4CAF50", marginRight: "5px" }} />
            </div>
            <div style={{ marginTop: "5px" }}>{blog.date}</div>
            {/* <p>jjajajaja</p> */}
          </div>
        </div>
        <br /> <br />
        <hr
          data-aos="zoom-out-up"
          style={{ width: "90%", margin: "auto", borderBottom: "none" }}
        />
        <br /> <br />
        <Typography variant="body1" data-aos="zoom-out-up">
          {/* {text && text} */}
          {blog.blogText && (
            <span dangerouslySetInnerHTML={{ __html: blog.blogText }} />
          )}
        </Typography>
        <br /> <br />
      </Box>

      <Footer />
    </Box>
  );
};

export default SingleBlog;
