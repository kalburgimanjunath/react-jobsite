import React, { useState, useEffect } from 'react';
import './style.css';
import { Search, Navbar, Category } from './components/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';

// import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  let [category, setCategory] = useState(null);
  useEffect(() => {
    fetch('https://remotive.io/api/remote-jobs/categories')
      .then((response) => response.json())
      // 4. Setting *jobs* to the image url that we received from the response above
      .then((data) => {
        setCategory(category);
      });
  }, []);
  console.log(category);
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Route path="/">
          <Category />
          <Search />
          <Jobs />
        </Route>
      </Router>
    </div>
  );
}
