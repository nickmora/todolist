import React, { Component, Fragment } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, Button, DialogTitle } from "@material-ui/core";


class DeleteDialog extends Component {

    render() {
        return (
            <Fragment>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleOpen}
                    aria-labelledby="delete-title"
                    aria-describedby="delete-text"
                >
                    <DialogTitle
                        id="delete-title"
                    >
                        ARE YOU SURE ??
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText
                            id="delete-text"
                        >
                            Once deleted, there's no way to recover a to-do item
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick = {this.props.toggleDialog}
                            variant = "contained"
                            color = "primary"
                        >
                            Wait, nevermind...
                        </Button>
                        <Button
                            onClick = {this.props.deleteItem}
                            color = "secondary"
                            variant = "contained"
                        >
                            Delete it forever!
                    </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

export default DeleteDialog