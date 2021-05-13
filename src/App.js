import "./App.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
      <Grid item xs={6}>
        <Card />
      </Grid>
    </Grid>
  );
}

export default App;
