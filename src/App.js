import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Home from './pages/Home';
import Cars from './pages/Cars';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/footer/Footer';
import Reset from './pages/Reset';
import Details from './pages/Details';
import PrivateRoute from './route/PrivateRoute';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path ="/">
              <Home></Home>
            </Route>
            <Route path ="/home">
              <Home></Home>
            </Route>
            <Route exact path ="/cars">
              <Cars></Cars>
            </Route>
            <Route path ="/about">
              <About></About>
            </Route>
            <Route path ="/contact">
              <Contact></Contact>
            </Route>
            <Route path ="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path ="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path ="/login">
              <Login></Login>
            </Route>
            <Route path ="/reset">
              <Reset></Reset>
            </Route>
            <Route path ="/cars/:key">
              <Details></Details>
            </Route>
            <Route path ="/admin">
              <AdminPanel></AdminPanel>
            </Route>
            <Route path ="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
