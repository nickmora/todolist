import React, { Component } from "react";
import ItemCard from "../Components/ItemCard";
import { Grid, Typography, Paper, Zoom } from "@material-ui/core";

class Completed extends Component {

    render() {
        return (
            <Grid
                container
                alignItems="center"
            >
                <Grid
                    item
                    md={12}
                >
                    <Paper
                        style={{ padding: 20 }}
                    >
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                        >
                            Tasks accomplished
            </Typography>
                        {this.props.items.length ?
                            (this.props.items.map(item => (
                                <Zoom
                                    in={item.complete}
                                    key={item._id}
                                >
                                    <Grid item md={12} style={{ margin: 20 }}>
                                        <ItemCard
                                            getAllItems={this.props.getAllItems}
                                            title={item.title}
                                            comment={item.comment}
                                            body={item.body}
                                            complete={item.complete}
                                            date={item.date}
                                            id={item._id}
                                        />
                                    </Grid>
                                </Zoom>
                            ))) :
                            (
                                <Paper style={{ padding: 20 }}>

                                    <Typography
                                        variant="h4"
                                        align="center"
                                    >
                                        Better get busy, you haven't completed any tasks!
                                    </Typography>
                                </Paper>
                            )

                        }
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Completed;