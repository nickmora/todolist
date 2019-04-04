import React, { Component, Fragment } from "react";
import { TextField, Paper, Grid, AppBar, Typography, withStyles, Button } from "@material-ui/core";
import { Save } from "@material-ui/icons/";
import API from "../Utils/API"
import moment from "moment"

const styles = theme => ({
    container: {
        display: "flex",
        padding: 24

    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 4,
      },
    // textField: {
    //     marginLeft: theme.spacing.unit,
    //     marginRight: theme.spacing.unit,
    // }
})

class AddTaskForm extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        itemTitle: "",
        itemBody: "",
    }

    handleInputChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.itemTitle || !this.state.itemBody) alert("Hey, you didn't fill out the form!")
        else {
            API.saveItem({
              title: this.state.itemTitle,
              body: this.state.itemBody,
              date: moment()  
            }).then(this.props.getAllItems());
            this.setState ({itemTitle:"", itemBody:""})
        }
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>

                <Grid
                    container
                    spacing={24}
                    // alignContent = "center"
                    justify="center"
                >


                    <Grid
                        item
                        md={12}
                    >
                        <AppBar
                            position="relative"
                        >
                            <Typography
                                variant="h5"
                                align="center"
                                color="inherit"
                            >
                                Add a To-Do Item Below
                            </Typography>
                        </AppBar>
                        <Paper>

                            <form className={classes.container}>
                                {/* {this.props.children} */}
                                <Grid
                                    container
                                    spacing={8}
                                    justify="center"
                                >
                                    <Grid
                                        item
                                        md={11}
                                        style={{ padding: 10 }}
                                    >
                                        <TextField
                                            id="itemTitle"
                                            onChange={this.handleInputChange("itemTitle")}
                                            value={this.state.itemTitle}
                                            className={classes.textField}
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            // style={{ padding: 30 }}
                                            style={{ margin: 8 }}
                                            margin="normal"
                                            placeholder="To Do Title"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={11}
                                        style = {{padding:10}}
                                    >

                                        <TextField
                                            id="itemBody"
                                            onChange={this.handleInputChange("itemBody")}
                                            value={this.state.itemBody}
                                            className={classes.textField}
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            style={{ margin: 8 }}
                                            margin="normal"
                                            // style={{ padding: 30 }}
                                            placeholder="To Do Body"
                                            // multiline
                                            // rows="2"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={12}
                                    >
                                        <Fragment>

                                            <div className={classes.buttons}>

                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className = {classes.button}
                                                    type = "submit"
                                                    onClick = {this.handleSubmit}
                                                    size = "large"
                                                >
                                                    <Save />
                                                    Save
                                                </Button>
                                            </div>
                                        </Fragment>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }

}

export default withStyles(styles)(AddTaskForm);