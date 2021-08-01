import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Blog} path="/blog" />
        <Route component={Project} path="/project" />
      </Switch>
    </Router>
  );
}

export default App;
