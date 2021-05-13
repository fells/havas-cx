import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

function App() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setPosts(result);
        },

        (error) => {
          console.error(error);
        }
      );
  }, []);

  return (
    <Grid
      container
      spacing={3}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        {posts.map((post, index) => (
          // <h2 key={post.id}>{JSON.stringify(post)}</h2>
          <Card key={post.id}>{post.body}</Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
