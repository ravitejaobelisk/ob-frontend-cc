import * as React from "react";
import "./App.css";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import PostDescription from "./pages/PostDescription";

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <div className="sidebar" data-color="orange">
          <div className="logo">
            <a href="http://acme.com" className="simple-text logo-mini">
              OB
            </a>
            <a href="http://acme.com" className="simple-text logo-normal">
              Post CC
            </a>
          </div>
          <div className="sidebar-wrapper" id="sidebar-wrapper">
            <ul className="nav">
              <li className="active ">
                <Link
                  to={`/posts`}
                  className="btn btn-sm btn-outline-secondary"
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>Posts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel" id="main-panel">
          <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <div className="navbar-toggle">
                  <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <Link to={`/posts`} className="navbar-brand">
                  Posts
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navigation"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="now-ui-icons users_single-02"></i>
                      <p>
                        <span className="d-lg-none d-md-block">Account</span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="panel-header panel-header-sm"></div>
          <div className="content">
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/posts"} exact component={Home} />
              <Route path={"/post/:id"} exact component={PostDescription} />
            </Switch>
          </div>
          <footer className="footer">
            <div className=" container-fluid ">
              <div className="copyright" id="copyright">
                <a href="https://acme.com" target="_blank">
                  ACME Technology Solutions
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default withRouter(App);
