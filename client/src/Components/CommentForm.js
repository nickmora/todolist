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


    handleSubmit = (event)=>{
        event.preventDefault()
        if (!this.props.commentInput) alert ("You gotta fill out the form, silly")
        else {
            // console.log(this.props.commentInput + " space " + this.props.itemID)
            API.saveComment({
                item: this.props.itemID,
                body: this.props.commentInput
            })
            .then(this.props.getComments(this.props.itemID));
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <Fragment>

                <form>

                    <TextField
                        id="commentBody"
                        fullWidth
                        placeholder="Add a Comment!"
                        value = {this.props.commentInput}
                        onChange = {this.props.handleInputChange("commentInput")}
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