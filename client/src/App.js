import React, { Component } from 'react';
import HeaderBar from './Components/HeaderBar';
import { Grid } from '@material-ui/core';
import Completed from './Pages/Completed';
import ToDo from "./Pages/ToDo"
import AddTaskForm from "./Pages/AddTaskForm"


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <Grid
          container
          spacing={24}
        >
          <Grid
            item
            md={6}
          >
            <ToDo />
          </Grid>
          <Grid
            item
            md={6}
          >
            <Completed />
          </Grid>
          <Grid
            item
            md={12}
          >
            <AddTaskForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
