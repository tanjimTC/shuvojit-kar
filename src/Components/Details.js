import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import RichEditorExample from "./RichEditorExample ";
import { useState } from "react";
import { useForm } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
  details: {
    background: "#d8eee0",
    border: "1px solid black",
    fontFamily: "Georgia, serif",
    padding: "30px",
    margin: "50px auto ",
    width: "70%",
    borderRadius: "15px",
  },
  blogDetailsInput: {
    background: "#d8eee0",
    whiteSpace: "pre-wrap",
    fontFamily: "Georgia, serif",
    padding: "15px",
    border: "1px solid black",
    marginTop: "10px",
    width: "100%",
    boxSizing: "border-box",
  },
  none: {
    userSelect: "none",
    color: "transparent",
  },
  error: {
    color: "rgb(223, 51, 51)",
  },
  submitBlog: {
    marginTop: "20px",
    width: "150px",
    padding: "10px",
    background: "#4bbd50",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "15px",
    fontSize: "16px",
  },
}));
const Details = () => {
  const classes = useStyles();
  const history = useHistory();
  const [bolog, setBolog] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    data.blogText = bolog;
    let today = new Date();
    data.date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    fetch("http://localhost:4200/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data inserted", data);
        alert("You are about to post a new blog!!");
        e.target.reset();
        history.push("/blog");
      });
  };
  return (
    <div className={classes.details}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Blog tittle */}
        <input
          className={classes.blogDetailsInput}
          name="blogTitle"
          placeholder="Blog Title *"
          ref={register({ required: true })}
        />{" "}
        <br />
        {errors.blogTitle ? (
          <span className={classes.error}>This field is required</span>
        ) : (
          <span className={classes.none}>none</span>
        )}
        <br />
        {/* Blog tittle Ends */}
        <RichEditorExample setBolog={setBolog} />
        {/* <input className={classes.submitBlog} type="submit" /> */}
        <button
          className={classes.submitBlog}
          type="submit"
          onClick={() => setBolog("k")}
        >
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default Details;
