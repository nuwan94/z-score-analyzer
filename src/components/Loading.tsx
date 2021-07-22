import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";

const Loading = () => (
    <Backdrop open={true}>
        <CircularProgress color="inherit" />
    </Backdrop>
);

export default Loading;