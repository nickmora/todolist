import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, IconButton, Collapse, Button, Card, CardActions, CardContent } from '@material-ui/core/';
import { ExpandMore, Check, Delete, Close, ExpandLess } from "@material-ui/icons/"
import classnames from "classnames"
import API from '../Utils/API';
import CommentForm from "./CommentForm"
import Comment from "./Comment"

const styles = theme => ({
    card: {
        minWidth: 275,
    },

    pos: {
        marginBottom: 12,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },

});

class ItemCard extends Component {

    state = {
        expanded: false,
        complete: this.props.complete,
        comments: [],
        commentInput: ""
    }

    componentDidMount() {
        // this.getComments(this.props.id)
    }

    getComments = (itemID) => {
        API.getAllComments(itemID)
            .then(resp => {
                // console.log(resp.data)
                this.setState({
                    comments: resp.data,
                    commentInput: ""
                })
            })
        // .then(console.log(this.state.comments))
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
        // () =>{
        this.getComments(this.props.id);

        // }

    };

    handleDelete = (event) => {
        event.preventDefault()
        console.log(this.props.id);
        API.deleteItem(this.props.id)
            .then(this.props.getAllItems())
    }

    toggleComplete = (event) => {
        event.preventDefault();
        console.log(this.state.complete)
        this.setState(state => ({ complete: !state.complete }), function () {
            console.log(this.state.complete)
            API.updateItem({
                id: this.props.id,
                complete: this.state.complete
            }).then(this.props.getAllItems)
        })
    }

    handleInputChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {

        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>

                    <Typography variant="h6" component="h2" align="center">
                        {this.props.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary" align="right">
                        {this.props.date}
                    </Typography>
                    <Typography component="p">
                        {this.props.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container justify = "space-between">
                        <Grid item>
                            <IconButton
                                className={classnames(classes.expand, {
                                    [classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >

                                {this.state.expanded ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <div className={classes.buttons}>
                                {this.state.complete ? (
                                    <Button
                                        variant="contained"
                                        id={this.props.id}
                                        color="primary"
                                        className={classes.button}
                                        type="submit"
                                        onClick={this.toggleComplete}
                                    >
                                        <Close />
                                        Wait, nevermind
                                    </Button>
                                ) : (
                                        <Button
                                            variant="contained"
                                            id={this.props.id}
                                            color="primary"
                                            className={classes.button}
                                            type="submit"
                                            onClick={this.toggleComplete}
                                        >
                                            <Check />
                                            Done!
                                    </Button>
                                    )}
                                <Button
                                    variant="contained"
                                    id={this.props.key}
                                    color="secondary"
                                    className={classes.button}
                                    type="submit"
                                    onClick={this.handleDelete}
                                >
                                    <Delete />
                                    Delete Item
                                    </Button>
                            </div>
                        </Grid>
                    </Grid>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {this.state.comments.length ?
                            this.state.comments.map(comment => (
                                <Comment
                                    body={comment.body}
                                    key={comment._id}
                                    id={comment._id}
                                    getComments={this.getComments}
                                    parent={this.props.id}
                                />
                            )) : "There don't seem to be any comments on this one..."}

                        <CommentForm
                            itemID={this.props.id}
                            commentInput={this.state.commentInput}
                            handleInputChange={this.handleInputChange}
                            getComments={this.getComments}
                        />
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

ItemCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCard);
