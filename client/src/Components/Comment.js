import React, { Component, Fragment } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles"
import API from "../Utils/API"

const styles = () => ({
    floatRight: {
        display: "flex",
        justify: "flex-end"
    }
})

class Comment extends Component {

    deleteComment = (event) => {
        event.preventDefault();
        console.log("hello from delete")
        API.deleteComment(this.props.id)
            .then(this.props.getComments(this.props.parent))
    }

    render() {
        const { classes } = this.props
        return (
            <Grid container
                // justify="space-between"
            >
                <Grid item md={10}>
                    <Typography>
                        {this.props.body}
                    </Typography>
                </Grid>
                    <Grid item md={1}
                    // className = {classes.floatRight}
                    >
                        <Button
                            onClick = {this.deleteComment}
                        >
                            X
                        </Button>
                    </Grid>

            </Grid>
        )
    }
}

export default withStyles(styles)(Comment) 