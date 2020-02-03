import * as React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Footer from './components/footer';
import PostDescription from './pages/PostDescription';

const App = () => {
  return (
    <div>
      <Sidebar />
      <div className="main-panel" id="main-panel">
        <Navbar />
        <div className="panel-header panel-header-sm" />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Home} />
            <Route path="/post/:id" exact component={PostDescription} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(App);
