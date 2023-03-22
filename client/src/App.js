import './App.css';
import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import ProductEdit from './views/ProductEdit';
import ProductDetail from './views/ProductDetail';

function App() {
  return (
    <div className="App">
      <h1>Shop</h1>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/productDetail">ProductDetail</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/productEdit" element={<ProductEdit></ProductEdit>}></Route>
          <Route path="/productDetail" element={<ProductDetail></ProductDetail>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
