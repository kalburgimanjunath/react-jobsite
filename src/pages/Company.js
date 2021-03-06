import React, { useState, useEffect } from 'react';
import JobList from '../components/JobList';
import AddCompany from './Company/AddCompany';
import AddUser from './Users/AddUser';
export default function Company({ jobs }) {
  // let [jobs, setJobs] = useState(null);
  // useEffect(() => {
  //   fetch('https://remotive.io/api/remote-jobs?category=software-dev')
  //     .then((response) => response.json())
  //     // 4. Setting *jobs* to the image url that we received from the response above
  //     .then((data) => setJobs(data.jobs));
  // }, []);
  return (
    <div>
      <h1>Companies</h1>
      <AddCompany />
      <AddUser />
      {/* <JobList tag="software-dev" title="software dev jobs" jobs={jobs} /> */}
    </div>
  );
}
