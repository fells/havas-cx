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
    <div className="app">
      <h1>Posts</h1>

      <Grid
        container
        spacing={3}
        className={classes.gridContainer}
        justify="center"
      >
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card style={{ height: 250 }}>
              <CardHeader title={post.title} />
              <CardContent>{post.body}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
