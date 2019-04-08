import React, { Component, Fragment } from 'react';
import HeaderBar from './Components/HeaderBar';
import { Grid } from '@material-ui/core';
import Completed from './Pages/Completed';
import ToDo from "./Pages/ToDo"
import AddTaskForm from "./Pages/AddTaskForm"
import API from "./Utils/API"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import {red , blueGrey} from "@material-ui/core/colors/"


const theme = createMuiTheme({
  palette: {
    primary: blueGrey ,
    secondary: {
      main : red[700]
    },
  }
})

class App extends Component {

  state = {
    items: []
  }

  getAllItems = () => {
    API.getAllItems()
      .then(resp => {
        this.setState({ items: resp.data })
      }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.getAllItems();
  };

  render() {
    return (
      <Fragment>
        <MuiThemeProvider theme = {theme}>

          <HeaderBar />
          <Grid
            container
            spacing={24}
          >
            <Grid
              item
              md={6}
              style = {{marginTop : 25}}
            >
              <ToDo
                items={this.state.items.filter(item => item.complete === false)}
                getAllItems={this.getAllItems}
              />
            </Grid>
            <Grid
              item
              md={6}
              style = {{marginTop : 25}}
            >
              <Completed
                items={this.state.items.filter(item => item.complete === true)}
                getAllItems={this.getAllItems}
              />
            </Grid>
            <Grid
              item
              md={12}
            >
              <AddTaskForm
                getAllItems={this.getAllItems}
              />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
