import React, { useState, useEffect } from 'react';
import './style.css';
import { Search, Navbar, Category } from './components/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import Company from './pages/Company';
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
  let [company, setcompany] = useState(null);
  let [jobs, setJobs] = useState([]);
  useEffect(() => {
    // fetch('https://remotive.io/api/remote-jobs/categories')
    //   .then((response) => response.json())
    //   // 4. Setting *jobs* to the image url that we received from the response above
    //   .then((data) => {
    //     setCategory(category);
    //   });
    fetch('https://remotive.io/api/remote-jobs?category=software-dev')
      .then((response) => response.json())
      // 4. Setting *jobs* to the image url that we received from the response above
      .then((data) => setJobs(data.jobs));
  }, []);
  // const getData = () => {
  //   const url = [
  //     fetch('https://remotive.io/api/remote-jobs/categories'),
  //     fetch('https://remotive.io/api/remote-jobs?category=software-dev'),
  //   ];
  //   Promise.all(url)
  //     .then(function (responses) {
  //       // Get a JSON object from each of the responses
  //       return Promise.all(
  //         responses.map(function (response) {
  //           return response.json();
  //         })
  //       );
  //     })
  //     .then(function (data) {
  //       // Log the data to the console
  //       // You would do something with both sets of data here
  //       console.log(data);
  //     })
  //     .catch(function (error) {
  //       // if there's an error, log it
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   console.log('useEffect');
  //   getData();
  // });
  // console.log(category);
  return (
    <div className="container">
      <h2>1</h2>

      <Router>
        <Navbar />
        <Route path="/jobs">
          {/* <Search /> */}
          {/* <Category category={category.jobs} /> */}
          <Jobs jobs={jobs} category={category.jobs} />
        </Route>
        <Route path="/companies">
          <Company />
        </Route>
        {/* <Route path="/*" exact></Route> */}
      </Router>
    </div>
  );
}
