import React, { Component } from "react";
import ItemCard from "../Components/ItemCard";
import { Grid, Typography, Paper } from "@material-ui/core";

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
                            Look at what you've accomplished!
            </Typography>
                        {this.props.items.map(item => (
                            <Grid item md={12} key = {item._id}>
                                <ItemCard
                                    getAllItems={this.props.getAllItems}
                                    title={item.title}
                                    comment={item.comment}
                                    body={item.body}
                                    complete={item.complete}
                                    date={item.date}
                                    id = {item._id}
                                />
                            </Grid>

                        ))}
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Completed;