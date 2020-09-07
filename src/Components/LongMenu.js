import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const options = ["Edit", "Delete", "cancel"];

const ITEM_HEIGHT = 48;

export default function LongMenu({ _id }) {
  console.log(_id);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = useState("");
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setSelected(option);
    setAnchorEl(null);
  };
  if (selected === "Delete") {
    fetch("https://murmuring-inlet-92255.herokuapp.com/blogs/" + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        history.push("/blog");
      });
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Edit"}
            onClick={() => handleClose(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
