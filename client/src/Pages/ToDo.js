import React, { Component } from "react";
import ItemCard from "../Components/ItemCard";
import { Grid, Typography, Paper, Zoom } from "@material-ui/core";

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
                            variant="h5"
                            align="center"
                            gutterBottom
                        >
                            Tasks to do
                        </Typography>
                        {this.props.items.length ?
                            (this.props.items.map(item => (
                            <Zoom 
                                in = {!item.complete}
                                key={item._id}    
                            >
                                <Grid
                                    
                                    item
                                    md={12}
                                    style={{ margin: 20 }}
                                >
                                    <ItemCard
                                        getAllItems={this.props.getAllItems}
                                        title={item.title}
                                        comment={item.comment}
                                        body={item.body}
                                        id={item._id}
                                        complete={item.complete}
                                        date={item.date}
                                    />
                                </Grid>
                            </Zoom>
                        ))) :
                            ( <Paper style = {{padding: 20}}>

                                <Typography
                                    align = "center"
                                    variant = "h4"
                                    >
                                    You don't have any to do items!  Add some below!
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

export default ToDo;