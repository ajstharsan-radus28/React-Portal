// in src/MyAppBar.js
import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@mui/material/Typography';

import Logo from './Logo';
const username = localStorage.getItem('username');

const QLERAppBar = (props) => (

    <AppBar
        sx={{
            "& .RaAppBar-title": {
                flex: 1,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
            },
        }}
        {...props}
    >
        <Typography
            variant="h6"
            color="inherit"
            id="react-admin-title"
        />
         <span style={{width:'2px'}} />of {username}

        <span style={{width:'76%'}} />
    </AppBar>
);

export default QLERAppBar;
