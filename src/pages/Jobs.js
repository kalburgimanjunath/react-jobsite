import React, { useState, useEffect } from 'react';
import { JobList, Search } from '../components/index';
export default function Jobs({ jobs }) {
  // console.log(jobs);
  // let [jobs, setJobs] = useState(null);
  // useEffect(() => {
  //   fetch('https://remotive.io/api/remote-jobs?category=software-dev')
  //     .then((response) => response.json())
  //     // 4. Setting *jobs* to the image url that we received from the response above
  //     .then((data) => setJobs(data.jobs));
  // }, []);
  return (
    <div>
      <Search jobs={jobs} />
      <JobList tag="software-dev" title="software dev jobs" jobs={jobs} />
    </div>
  );
}
