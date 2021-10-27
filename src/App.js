import React, { useState, useEffect } from 'react';
import './style.css';
import { Search, Navbar, Category } from './components/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import { catlist } from './data/category-list';

// import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  // const catlist = {
  //   jobs: [
  //     { id: 19, name: 'Software Development', slug: 'software-dev' },
  //     { id: 18, name: 'Customer Service', slug: 'customer-support' },
  //     { id: 21, name: 'Design', slug: 'design' },
  //     { id: 28, name: 'Marketing', slug: 'marketing' },
  //     { id: 30, name: 'Sales', slug: 'sales' },
  //     { id: 23, name: 'Product', slug: 'product' },
  //     { id: 33, name: 'Business', slug: 'business' },
  //     { id: 24, name: 'Data', slug: 'data' },
  //     { id: 25, name: 'DevOps / Sysadmin', slug: 'devops' },
  //     { id: 26, name: 'Finance / Legal', slug: 'finance-legal' },
  //     { id: 27, name: 'Human Resources', slug: 'hr' },
  //     { id: 29, name: 'QA', slug: 'qa' },
  //     { id: 32, name: 'Writing', slug: 'writing' },
  //     { id: 31, name: 'Teaching', slug: 'teaching' },
  //     { id: 35, name: 'Medical / Health', slug: 'medical-health' },
  //     { id: 22, name: 'All others', slug: 'all-others' },
  //   ],
  // };
  let [category, setCategory] = useState(catlist);
  let [jobs, setJobs] = useState(null);
  useEffect(() => {
    fetch('https://remotive.io/api/remote-jobs/categories')
      .then((response) => response.json())
      // 4. Setting *jobs* to the image url that we received from the response above
      .then((data) => {
        setCategory(category);
      });
    fetch('https://remotive.io/api/remote-jobs?category=software-dev')
      .then((response) => response.json())
      // 4. Setting *jobs* to the image url that we received from the response above
      .then((data) => setJobs(data.jobs));
  }, []);
  // console.log(category);
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Route path="/">
          <Search />
          <Category category={category.jobs} />
          <Jobs jobs={jobs} />
        </Route>
      </Router>
    </div>
  );
}