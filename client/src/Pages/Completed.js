import React, {Component} from "react";
import ItemCard from "../Components/ItemCard";
import { Grid } from "@material-ui/core";

class Completed extends Component {
    constructor (props) {
        super(props);
    };
    render () {
        return (
            <Grid container alignItems = "center">
                <Grid item md={12}>
                    <ItemCard/>
                </Grid>
            </Grid>
        )
    }
}

export default Completed;