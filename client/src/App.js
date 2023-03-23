import './App.css';
import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import ProductEdit from './views/ProductEdit';
import ProductDetail from './views/ProductDetail';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <h1>Shop</h1>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/products">All Products</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/productEdit">Add Products</Link>
            </Typography>

          </Toolbar>
        </AppBar>
      </Box>
     
      <Container sx={{marginTop: '6rem'}}>
      <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/products" element={<Products></Products>}></Route>
          <Route
            exact
            path="/users/:id/products"
            element={<Products></Products>}></Route>
          <Route
            exact
            path="/tags/:name/products"
            element={<Products></Products>}></Route>
          <Route
            exact
            path="/products/new"
            element={<ProductEdit></ProductEdit>}></Route>
          <Route
            exact
            path="/products/:id/edit"
            element={<ProductEdit></ProductEdit>}></Route>
          <Route
            exact
            path="/products/:id"
            element={<ProductDetail></ProductDetail>}></Route>
        </Routes>
        </Container>
    </div>
  );
}

export default App;
