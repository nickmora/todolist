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
        API.deleteComment(this.props.id)
            .then(this.props.getComments(this.props.parent))
    }

    render() {
        return (
            <Grid container
            >
                <Grid item md={10}>
                    <Typography>
                        {this.props.body}
                    </Typography>
                </Grid>
                    <Grid item md={1}
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