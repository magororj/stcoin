import React, { Component } from "react";
import "./styles.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
const AuthContext = React.createContext({});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.routerRef = React.createRef();
  }
  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          login: this.login
        }}
      >
        <div className="App">
          <div className="container">
            <Navbar />
            <Home />
            <Login />
          </div>
          <Modal />
        </div>
      </AuthContext.Provider>
    );
  }
}
