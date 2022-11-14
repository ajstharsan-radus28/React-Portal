import * as React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';


 const SubHeader = (props) => (
    <Container component="main" maxWidth="xs">
         <Typography component="h1" variant="h5">
           QLER Portal
         </Typography>
    </Container>
);
export default SubHeader;
