import ProductList from '../components/ProductList';
import UserList from '../components/UserList';
import { Box, Grid, Paper, Typography } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <Grid container columnSpacing={5} p={2} className="Home">
      <Grid  item xs={12} md={8}>
        <Typography variant="h4" component="h2">
          Products
        </Typography>
        <ProductList></ProductList>
      </Grid>
      <Grid  item xs={12} md={4}>
        <Box>
          <Typography variant="h4" component="h2">
            Users
          </Typography>
          <Paper>
            <UserList></UserList>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;