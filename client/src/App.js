import React, { Component } from 'react';
import HeaderBar from './Components/HeaderBar';
import { Grid } from '@material-ui/core';
import Completed from './Pages/Completed';
import ToDo from "./Pages/ToDo"
import AddTaskForm from "./Pages/AddTaskForm"
import API from "./Utils/API"


class App extends Component {

  state = {
    items: []
  }
  
  getAllItems = ()=>{
    API.getAllItems()
    .then(resp=>{
      this.setState({items:resp.data})
      console.log(this.state.items)
    }).catch(err=>console.log(err))
  }
  
  componentDidMount(){
    this.getAllItems();
  };

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
            <ToDo items = {this.state.items.filter(item=>item.complete===false)} />
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
