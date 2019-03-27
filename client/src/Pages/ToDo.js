import React, { Component } from "react";
import ItemCard from "../Components/ItemCard";
import { Grid, Typography, Paper } from "@material-ui/core";

class ToDo extends Component {

    render() {
        return (
            <Grid
                container
                alignItems="center"
                justify="center"
            >
                <Grid
                    item
                    md={12}
                >
                    <Paper
                        style={{ padding: 20 }}
                    >

                        <Typography
                            variant="h4"
                            align="center"
                            gutterBottom
                        >
                            Things you gotta do, bruh
                        </Typography>
                        {this.props.items.map(item => (
                            <Grid
                                item
                                md={12}
                            >
                                <ItemCard
                                    title={item.title}
                                    comment={item.comment}
                                    body={item.body}
                                    key={item._id}
                                    complete={item.complete}
                                    date={item.date}
                                />
                            </Grid>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default ToDo;