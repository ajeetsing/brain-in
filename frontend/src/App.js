import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import ProductScreen from './screens/ProductScreen';
import CartListScreen from './screens/CarttLstScreen'
import ProfileScreen from './screens/ProfileScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductLstScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              BRAIN INVENTORY
        </a>
          </div>
          <div>
            {userInfo && <Link to="/CartList">Product</Link>}
            {userInfo && <Link to="/profile">User Profile</Link>}
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
                <Link to="/signin">Sign In</Link>
              )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>

          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/profile" component={ProfileScreen}></Route>
          <Route path="/CartList" component={CartListScreen}></Route>
          <Route exact path="/" component={HomeScreen}  ></Route>

          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>

        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;





