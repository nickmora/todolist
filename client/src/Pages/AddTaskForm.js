import React, { Component, Fragment } from "react";
import { TextField, Paper, Grid, AppBar, Typography, FormControl, withStyles } from "@material-ui/core";

const styles = theme => ({
    container: {
        display: "flex",

    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
})

class AddTaskForm extends Component {
    constructor(props) {
        super(props)
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
                                    justify = "center"
                                >
                                    <Grid
                                        item
                                        md={11}
                                        style={{ padding: 10 }}
                                    >
                                        <TextField
                                            className = {classes.textField}
                                            id="itemTitle"
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
                                    >

                                        <TextField
                                            id="itemBody"
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            margin="normal"
                                            // style={{ padding: 30 }}
                                            placeholder="To Do Body"
                                            multiline
                                            rows = "2"
                                            style={{ margin: 8 }}
                                        />
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