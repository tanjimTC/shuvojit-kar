import React from "react";
import { Box, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import avatar from "../Images/mypic.jpg";
import BlogCard from "./BlogCard";
import { Blogs } from "../DataBase";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
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
    minHeight: "200px",
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
  pagination: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },
  [theme.breakpoints.down("md")]: {
    headerInner: {
      width: "90%",
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
      minHeight: "150px",
      "& .makeStyles-aboutLink-5": {
        fontSize: "1rem",
      },
    },
    avatar: {
      display: "none",
    },
    title: {
      marginTop: "0",
    },
    headerOuter: {
      padding: "20px 10px 5px 10px",
    },
    myBlogs: {
      marginTop: "-30px",
    },
    pagination: {
      "& .MuiTablePagination-selectRoot": {
        marginLeft: "2px",
        marginRight: "2px",
      },
      "& .MuiTablePagination-actions": {
        marginLeft: "0px",
      },
      "& .MuiIconButton-root": {
        padding: "12px 0px",
      },
      "& .MuiToolbar-gutters": {
        paddingLeft: "0px",
      },
      "& .MuiSelect-select": {
        minWidth: "0px",
      },
    },
  },
}));

const Blog = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box component="div" className={classes.root}>
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
                <Grid item xs={4}>
                  <Typography variant="h5">
                    <Link to="/" className={classes.aboutLink}>
                      Home
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5">
                    <Link to="/" className={classes.aboutLink}>
                      Resume
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5">
                    <Link to="/" className={classes.aboutLink}>
                      Contact
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Avatar
                data-aos="zoom-out-up"
                className={classes.avatar}
                src={avatar}
                alt="Shuvojit kar"
              />
            </Grid>
          </Grid>
        </Box>
        <Typography
          className={classes.myBlogs}
          style={{ color: "white" }}
          data-aos="zoom-out-up"
          data-aos-delay="250"
          variant="h4"
          align="center"
        >
          Blogs <br />
          <ArrowDownwardIcon />
        </Typography>
      </Box>
      {Blogs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(
        (x) => (
          <BlogCard key={x.id} blog={x} />
        )
      )}
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={Blogs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className={classes.pagination}
      />
    </Box>
  );
};

export default Blog;
