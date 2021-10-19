import logo from './logo.svg';
import './App.css';
import Login from './Component/log and sign/Login';
import Products from './Component/Product/Products';
import Signup from './Component/log and sign/Signup';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Footer from './Component/Foter/Footer';

function App() {
  return (
    <div className="App">
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
          <Route path="/products/:key">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
