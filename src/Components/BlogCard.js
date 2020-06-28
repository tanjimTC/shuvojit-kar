import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "50%",
    margin: "5vh auto",
    borderRadius: "10px",
    border: "1px solid lightgray",
    boxShadow: "5px 5px 10px lightgrey",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    minWidth: 151,
  },
  CardBottom: {
    display: "flex",
    justifyContent: "space-between",
  },
  navlink: {
    textDecoration: "none",
    marginTop: "0px",
    background: '#4CAF50',
    borderRadius: '5px',
  },
  [theme.breakpoints.down("md")]: {
    root: {
      width: "80%",
      margin: "30px auto",
    },
  },
  [theme.breakpoints.down("xs")]: {
    root: {
      width: "90%",
      margin: "30px auto",
    },
  },
}));

const BlogCard = (props) => {
  const { blogImage, blogTitle, loves, blogText, id } = props.blog;
  const classes = useStyles();
  return (
    <div data-aos="zoom-out-left">
        <Card className={classes.root} >
      <CardMedia
        className={classes.cover}
        image={blogImage}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {blogTitle}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {blogText.substring(0, 100)}...
          </Typography>
          <br />
          <div className={classes.CardBottom}>
            <div>
              <FavoriteIcon style={{color:'#4CAF50'}} /> {loves}
            </div>
            <Link className={classes.navlink} to={`/blogpost/${id}`}>
              <Button style={{color:'#fff'}}>
                Read full blog <ArrowForwardIcon fontSize="small" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
    </div>
  );
};

export default BlogCard;
