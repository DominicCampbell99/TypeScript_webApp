import { AppBar, Toolbar, IconButton, Typography, Button, Grid, Stack} from '@mui/material'
import { Link } from "react-router-dom";
import AlbumIcon from '@mui/material/Icon/';

function Navibar(){

    return(
        <AppBar position="static">
            <Toolbar>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item>
                        <Typography variant='h4'component='div' >
                            Dominic Campbell
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" spacing={4}>
                            <Button color='inherit' component={Link} to="/" >
                                Home
                            </Button>
                            <Button color='inherit' component={Link} to="/about">About Me</Button>
                            <Button color='inherit' component={Link} to="/contact">Contact</Button>
                        </Stack>
                    </Grid>
                </Grid> 
            </Toolbar>
        </AppBar>
    );
}

export default Navibar