import React from 'react';
import JobList from '../components/JobList';
export default function Jobs() {
  return (
    <div>
      <h1>Jobs</h1>
      <JobList tag="software-dev" title="software dev jobs" />
    </div>
  );
}
