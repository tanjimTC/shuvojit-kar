import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RichEditorExample from "./RichEditorExample ";
import { useState } from "react";
import { useForm } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
  details: {
    background: "#d8eee0",
    border: "1px solid #ddd",
    fontFamily: "Georgia, serif",
    fontsize: "14px",
    padding: "15px",
    margin: "50px auto",
    width: "70%",
  },
  blogDetailsInput: {
    background: "#d8eee0",
    whiteSpace: "pre-wrap",
    fontFamily: "Georgia, serif",
    padding: "15px",
    border: "1px solid black",
    marginBottom: "10px",
    width: "100%",
    boxSizing: "border-box",
  },
}));
const Details = () => {
  const classes = useStyles();
  const saveContent = () => {
    console.log("data submitted");
  };
  const [bolog, setBolog] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    data.text = bolog;
    console.log(data);
  };
  return (
    <div className={classes.details}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={classes.blogDetailsInput}
          name="blogTitle"
          placeholder="Blog Title *"
          ref={register({ required: true })}
        />
        {errors.blogTitle && <span>This field is required</span>}
        <br />
        <input
          className={classes.blogDetailsInput}
          name="author"
          placeholder="Blog Title"
          ref={register({ required: true })}
        />
        {errors.author && <span>This field is required</span>}
        <br />

        <RichEditorExample saveContent={saveContent} setBolog={setBolog} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Details;
