import React, { Component, Fragment } from "react";
import { Typography, TextField, Button, withStyles } from "@material-ui/core";
import API from "../Utils/API";

const style = theme => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
      },
})

class CommentForm extends Component {

    state = {
        input: "",
    }

    handleInputChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = (event)=>{
        event.preventDefault()
        if (!this.state.input) alert ("You gotta fill out the form, silly")
        else {
            // console.log(this.state.input, this.props.itemID)
            API.saveComment({
                item: this.props.itemID,
                body: this.state.input
            });
            this.setState({input:""})
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <Fragment>

                <Typography
                    variant="p"
                    gutterBottom
                >
                    There don't seem to be any comments on this one...
                </Typography>
                <form>

                    <TextField
                        id="commentBody"
                        fullWidth
                        placeholder="Add a Comment!"
                        value = {this.state.input}
                        onChange = {this.handleInputChange("input")}
                    />
                    <div className = {classes.buttons}>

                    <Button
                        className = {classes.button}
                        type = "submit"
                        onClick = {this.handleSubmit}
                        >
                        Add Comment
                    </Button>
                        </div>
                </form>
            </Fragment>
        )
    }
}

export default withStyles(style)(CommentForm);