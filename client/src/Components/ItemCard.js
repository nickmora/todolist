import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, IconButton, Collapse } from '@material-ui/core/';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import classnames from "classnames"

const styles = {
    card: {
        minWidth: 275,
    },

    pos: {
        marginBottom: 12,
    },
};

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
    }
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {

        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>

                    <Typography variant="h5" component="h2" align="center">
                        TITLE
        </Typography>
                    <Typography className={classes.pos} color="textSecondary" align="right">
                        - - T i M e S T a M P - -
        </Typography>
                    <Typography component="p">
                        Body body body
        </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"

                    >

                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            hello from inner area
                        </Typography>
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
