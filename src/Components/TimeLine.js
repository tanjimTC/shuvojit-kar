import React from "react";
import { Box, Grid, Typography, Button, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TimeLineItems from "./TimeLineItems";
const useStyles = makeStyles((theme) => ({
  timelineWrapper: {
    width: "70%",
    margin: "auto",
    padding: "20px",
  },
  textBlue: {
    color: "#0D47A1",
    fontWeight: "400",
    marginBottom: "30px",
  },
  textBlue2: {
    color: "#0D47A1",
  },
  education: {
    fontWeight: "500",
    fontSize: "24px",
    letterSpacing: "1px",
    marginBottom: "30px",
  },
  timelineLeftItems: {
    padding: "20px 10px",
  },
  btnResume: {
    borderRadius: "25px",
    marginBottom: "20px",
    padding: "10px 15px",
    color: "#fff",
    backgroundColor: "#4caf50",
    transition: "0.3s linear",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      color: "#4caf50",
      backgroundColor: "#fff",
    },
    "& .MuiButton-label": {
      fontSize: "18px",
    },
  },
  btnResume2: {
    borderRadius: "25px",
    marginBottom: "20px",
    padding: "10px 15px",
    color: "#fff",
    backgroundColor: "#4caf50",
    transition: "0.3s linear",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      color: "#4caf50",
      backgroundColor: "#fff",
    },
    "& .MuiButton-label": {
      fontSize: "18px",
    },
  },
  buttonContainer: {
    width: "85%",
    margin: "auto",
  },
  chipContainer: {
    width: "85%",
    margin: "10px auto",
    justifyContent: "center",
    "& .MuiChip-label": {
      fontSize: "16px",
      fontWeight: "500",
      color: "#0D47A1",
      padding: "14px 18px",
    },
    "& .MuiChip-root": {
      margin: "4px",
    },
  },
  [theme.breakpoints.down("md")]: {
    timelineWrapper: {
      // width: "90%",
      padding: "20px 0",
    },
    timelineLeftItems: {
      padding: "20px 0",
    },
    timelineRight: {
      width: "100%",
    },
    btnResume: {
      padding: "10px 20px",
      "& .MuiButton-label": {
        fontSize: "16px",
      },
    },
    btnResume2: {
      padding: "10px 20px",
      "& .MuiButton-label": {
        fontSize: "16px",
      },
    },
    buttonContainer: {
      width: "70%",
    },
  },
  [theme.breakpoints.down("xs")]: {
    timelineWrapper: {
      width: "95%",
      padding: "20px 0",
    },
    timelineLeftItems: {
      padding: "20px 0",
    },
    timelineRight: {
      width: "100%",
    },
    btnResume: {
      padding: "10px 20px",
      "& .MuiButton-label": {
        fontSize: "16px",
      },
    },
    btnResume2: {
      padding: "10px 20px",
      "& .MuiButton-label": {
        fontSize: "16px",
      },
    },
    buttonContainer: {
      width: "90%",
    },
  },
}));
const TimeLine = () => {
  const classes = useStyles();
  return (
    <Box className={classes.timelineWrapper}>
      <Typography data-aos="zoom-out-up" align="center" variant="h2" className={classes.textBlue}>
        What you should know
      </Typography>
      <Typography data-aos="zoom-out-up" align="center" className={classes.education}>
        This is my <span className={classes.textBlue2}>education</span> and{" "}
        <span className={classes.textBlue2}>work experience</span> timeline.
      </Typography>
      <br />
      <Grid container>
        <Grid container item xs={12} md={5} className={classes.timelineLeft}>
          <Grid
            container
            item
            className={classes.timelineLeftItems}
            align="center"
          >
            <Typography align="center" variant="h4" style={{ margin: "auto" }} data-aos="zoom-out-right">
              <i
                style={{ color: "#0D47A1", marginRight: "7px" }}
                className="far fa-file-alt"
              ></i>
              Download My Résume
            </Typography>
            <Typography style={{ fontSize: "20px", margin: "20px auto" }}>
              You can download my résume in <b>PDF</b> format if you would like.
            </Typography>
            <Grid
              container
              alignItems="center"
              className={classes.buttonContainer}
              data-aos="zoom-out-right"
            >
              <Grid item xs={6} md={12} lg={6}>
                <Button className={classes.btnResume}
                href="../cv.pdf"
                download
                >
                  <i
                    className="fas fa-cloud-download-alt"
                    style={{ marginRight: "8px" }}
                  ></i>
                  Download
                </Button>
              </Grid>
              <Grid item xs={6} md={12} lg={6}>
                <Button className={classes.btnResume}
                  href="../cv.pdf"
                    target='_'
                >
                  <i className="fas fa-eye" style={{ marginRight: "7px" }}></i>
                  View
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <hr style={{ width: "90%", height: "0px" }} />

          <Grid
            container
            item
            className={classes.timelineLeftItems}
            align="center"
          >
            <Typography
              data-aos="zoom-out-right"
              align="center"
              variant="h4"
              style={{ margin: "10px auto 25px auto" }}
            >
              <i
                style={{ color: "#0D47A1", marginRight: "7px" }}
                className="fab fa-github"
              ></i>
              <i
                style={{ color: "#0D47A1", marginRight: "7px" }}
                className="fab fa-linkedin"
              ></i>
              GitHub & LinkedIn
            </Typography>
            <Grid
              container
              alignItems="center"
              className={classes.buttonContainer}
              data-aos="zoom-out-right"
            >
              <Grid item xs={6} md={12} lg={6}>
                <Button className={classes.btnResume}>
                  <i
                    className="fab fa-github"
                    style={{ marginRight: "8px" }}
                  ></i>
                  GitHub
                </Button>
              </Grid>
              <Grid item xs={6} md={12} lg={6}>
                <Button className={classes.btnResume}>
                  <i
                    className="fab fa-linkedin"
                    style={{ marginRight: "7px" }}
                  ></i>
                  LinkedIn
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <hr style={{ width: "90%", height: "0px" }} />

          <Grid
            container
            item
            className={classes.timelineLeftItems}
            align="center"
          >
            <Typography
              align="center"
              variant="h4"
              style={{ margin: "10px auto 25px auto" }}
              data-aos="zoom-out-right"
            >
              <i
                style={{
                  color: "#0D47A1",
                  marginRight: "7px",
                  fontWeight: "300",
                }}
                className="fa fa-code"
              ></i>
              Programming Languages
            </Typography>
            <Grid
              container
              alignItems="center"
              className={classes.chipContainer}
              data-aos="zoom-out-right"
            >
              <Chip label="Java" />
              <Chip label="Kotlin" />
              <Chip label="C" />
              <Chip label="C++" />
              <Chip label="Dart" />
              <Chip label="JavaScript" />
              <Chip label="GoLang" />
            </Grid>
          </Grid>

          <hr style={{ width: "90%", height: "0px" }} />

          <Grid
            container
            item
            className={classes.timelineLeftItems}
            align="center"
          >
            <Typography
              align="center"
              variant="h4"
              style={{ margin: "10px auto 25px auto" }}
              data-aos="zoom-out-right"
            >
              <i
                style={{
                  color: "#0D47A1",
                  marginRight: "7px",
                  fontWeight: "300",
                }}
                className="fa fa-code-branch"
              ></i>
              Libraries
            </Typography>
            <Grid
              container
              alignItems="center"
              className={classes.chipContainer}
              data-aos="zoom-out-right"
            >
              <Chip label="React" />
              <Chip label="Flutter" />
              <Chip label="Pandas" />
              <Chip label="NLTK" />
              <Chip label="Scikit Learn" />
            </Grid>
          </Grid>

          <hr style={{ width: "90%", height: "0px" }} />

          <Grid
            container
            item
            className={classes.timelineLeftItems}
            align="center"
          >
            <Typography
              align="center"
              variant="h4"
              style={{ margin: "10px auto 25px auto" }}
              data-aos="zoom-out-right"
            >
              <i
                style={{
                  color: "#0D47A1",
                  marginRight: "7px",
                  fontWeight: "300",
                }}
                className="fas fa-terminal"
              ></i>
              Tools
            </Typography>
            <Grid
              container
              alignItems="center"
              className={classes.chipContainer}
              data-aos="zoom-out-right"
            >
              <Chip label="Git" />
              <Chip label="Google Cloud" />
              <Chip label="AWS" />
              <Chip label="Docker" />
              <Chip label="Redis" />
              <Chip label="Apache" />
              <Chip label="Nginx" />
            </Grid>
          </Grid>

          <hr style={{ width: "90%", height: "0px" }} />

          <Grid
            container
            item
            className={classes.timelineLeftItems}
            align="center"
          >
            <Typography
              align="center"
              variant="h4"
              style={{ margin: "10px auto 25px auto" }}
              data-aos="zoom-out-right"
            >
              <i
                style={{
                  color: "#0D47A1",
                  marginRight: "7px",
                  fontWeight: "300",
                }}
                className="fas fa-graduation-cap"
              ></i>
              CS Coursework
            </Typography>
            <Grid
              container
              alignItems="center"
              className={classes.chipContainer}
              data-aos="zoom-out-right"
            >
              <Chip label="Artificial Intelligence" />
              <Chip label="Machine Learning" />
              <Chip label="Networking" />
              <Chip label="Operating Systems" />
              <Chip label="Data Structures & Algorithms" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} className={classes.timelineRight}>
          <TimeLineItems />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TimeLine;
