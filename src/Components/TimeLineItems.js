import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Timeline.css";
import { experience } from "../DataBase";
const useStyles = makeStyles((theme) => ({
  timelineItemsWrapper: {
    width: "100%",
    margin: "auto",
  },
}));
const TimeLineItems = () => {
  const classes = useStyles();
  return (
    <Box variant="div" className={classes.timelineItemsWrapper}>
      <div className="main-container">
        <section id="timeline" className="timeline-outer">
          <div className="container" id="content">
            <div className="row">
              <div className="col s12 m12 l12">
                <ul className="timeline">
                  {experience.map((x) => (
                    <React.Fragment  key={x.id} >
                      <li className="event" data-date={x.year} data-aos="zoom-out-left">
                      <i className="fa fa-caret-left fa-3x" aria-hidden="true"></i>
                        <h3>{x.company}</h3>
                        <Typography variant="h6">{x.position}</Typography>
                        <hr />
                        {x.description.map((y, z) => (
                          <ul key={z}>
                            <li>{y}</li>
                          </ul>
                        ))}
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    </Box>
  );
};

export default TimeLineItems;
