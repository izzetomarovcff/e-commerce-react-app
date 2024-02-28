import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import ProductDetails from './components/ProductDetails';
import { createStore } from 'redux';
import reducers from '../src/redux';
import { Provider } from 'react-redux';
function App() {
  const store = createStore(reducers)
  return (
    <Provider store = {store}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/shop/product/*" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
