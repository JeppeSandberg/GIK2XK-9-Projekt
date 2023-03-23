import ProductList from '../components/ProductList';
import UserList from '../components/UserList';
import { Box, Grid, Typography } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <Grid container columnSpacing={2} p={2} className="Home">
      <Grid className="Home__grid-item" item xs={12} md={8}>
        <Typography variant="h4" component="h2">
          Products
        </Typography>
        <ProductList></ProductList>
      </Grid>
      <Grid className="Home__grid-item" item xs={12} md={4}>
        <Box className="Home__grid-item__content">
          <Typography variant="h4" component="h2">
            Users
          </Typography>
          <UserList></UserList>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;