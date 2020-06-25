import React from "react";
import { Box, Grid, Typography, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    padding: "20px",
  },
  btnResume: {
    borderRadius: "25px",
    marginBottom: "20px",
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#4caf50",
    transition: "0.3s linear",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      color: "#4caf50",
      backgroundColor: "#fff",
    },
    "& .MuiButton-label": {
      fontSize: "20px",
    },
  },
  btnResume2: {
    borderRadius: "25px",
    marginBottom: "20px",
    padding: "10px 20px",
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
  buttonContainer :{
      width : '80%',
      margin : 'auto'
  },
  [theme.breakpoints.down("xs")]: {
    timelineWrapper: {
      width: "95%",
      padding: "20px 0",
    },
    timelineLeftItems: {
      padding: "20px 0",
    },
    btnResume: {
      padding: "10px 20px",
      "& .MuiButton-label": {
        fontSize: "17px",
      },
    },
    btnResume2: {
      padding: "10px 20px",
      "& .MuiButton-label": {
        fontSize: "17px",
      },
    },
    buttonContainer :{
        width : '95%',
    }
  },
}));
const TimeLine = () => {
  const classes = useStyles();
  return (
    <Box className={classes.timelineWrapper}>
      <Typography align="center" variant="h2" className={classes.textBlue}>
        What you should know
      </Typography>
      <Typography align="center" className={classes.education}>
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
            <Typography align="center" variant="h4" style={{ margin: "auto" }}>
              <i
                style={{ color: "#0D47A1", marginRight: "10px" }}
                class="far fa-file-alt"
              ></i>
              Download My Résume
            </Typography>
            <Typography style={{ fontSize: "20px", margin: "20px 25px" }}>
              You can download my résume in <b>PDF</b> format if you would like.
            </Typography>
            <Grid container alignItems="center" className={classes.buttonContainer}>
              <Grid item xs={6} md={12} lg={6}>
                <Button className={classes.btnResume}>
                  <i
                    class="fas fa-cloud-download-alt"
                    style={{ marginRight: "15px" }}
                  ></i>
                  Download
                </Button>
              </Grid>
              <Grid item xs={6} md={12} lg={6}>
                <Button className={classes.btnResume}>
                  <i class="fas fa-eye" style={{ marginRight: "10px" }}></i>
                  View
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Divider />

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
            >
              <i
                style={{ color: "#0D47A1", marginRight: "10px" }}
                class="fab fa-github"
              ></i>
              <i
                style={{ color: "#0D47A1", marginRight: "10px" }}
                class="fab fa-linkedin"
              ></i>
              GitHub & LinkedIn
            </Typography>
            <Grid container alignItems="center" className={classes.buttonContainer}>
              <Grid item xs={6} md={12} lg={6}>
                <Button className={classes.btnResume}>
                  <i
                    class="fab fa-github"
                    style={{ marginRight: "15px" }}
                  ></i>
                  GitHub
                </Button>
              </Grid>
              <Grid item xs={6} md={12} lg={6}>
                <Button className={classes.btnResume}>
                  <i class="fab fa-linkedin" style={{ marginRight: "10px" }}></i>
                  LinkedIn
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} className={classes.timelineRight}></Grid>
      </Grid>
    </Box>
  );
};

export default TimeLine;
