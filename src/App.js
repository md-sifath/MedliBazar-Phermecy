import logo from './logo.svg';
import './App.css';
import Login from './Component/log and sign/Login';
import Products from './Component/Product/Products';
import Signup from './Component/log and sign/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Footer from './Component/Foter/Footer';
import Blog from './Component/Blog/Blogs';
import AboutUs from './Component/About/AboutUs';
import AuthProvider from "./Component/Context/AuthProvider";
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/product">
              <Products></Products>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <PrivateRoute path="/products/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
