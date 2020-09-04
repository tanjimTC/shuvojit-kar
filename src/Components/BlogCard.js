import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import image from "../Images/blog.jpg";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const htmlToText = require("html-to-text");
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
    width: "75%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    minWidth: 151,
  },
  CardBottom: {
    display: "flex",
    justifyContent: "flex-end",
  },
  navlink: {
    textDecoration: "none",
    marginTop: "0px",
    background: "#4CAF50",
    borderRadius: "5px",
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
      "& .MuiCardContent-root:last-child": {
        paddingBottom: "10px",
      },
      "& .MuiButton-root": {
        fontSize: "0.7rem",
      },
      "& .MuiTypography-body1 ": {
        fontSize: "0.9rem",
        marginTop: "5px",
        marginBottom: "5px",
      },
      "& .MuiTypography-h5": {
        fontSize: "1.1rem",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "1.1rem",
      },
    },
    cover: {
      display: "none",
    },
  },
}));

const BlogCard = (props) => {
  const { blogTitle, blogText, _id } = props.blog;
  const text = htmlToText.fromString(blogText);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={image} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {blogTitle}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {text.substring(0, 100)}...
          </Typography>
          <div className={classes.CardBottom}>
            <Link className={classes.navlink} to={`/blogpost/${_id}`}>
              <Button style={{ color: "#fff" }}>
                Read full blog <ArrowForwardIcon fontSize="small" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BlogCard;
