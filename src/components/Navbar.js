import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const navlist = [
    'Jobs',
    'Salaries',
    'companies',
    'Messages',
    'Profile',
    'Notification',
    'more',
  ];
  const navMenu = navlist.map((item) => {
    return (
      <li key={item} className="">
        <Link to={item}>{item}</Link>
      </li>
    );
  });
  return (
    <div>
      <nav
        className="navbar navbar-default  navbar-fixed-top"
        role="navigation"
      >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">
            Logo
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">{navMenu}</ul>
          {/* <div className="col-sm-3 col-md-3">
            <form className="navbar-form" role="search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="q"
                />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </nav>
    </div>
  );
}
