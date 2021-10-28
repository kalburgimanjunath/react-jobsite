import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
export default function Search({ jobs }) {
  // console.log(jobs);
  const [player, setPlayer] = useState();
  const [listjobs, setJobList] = useState([]);
  const excludeColumns = ['id'];
  // console.log(listjobs);
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    let keyword = e.target.value;
    if (keyword !== '' && listjobs !== undefined) {
      // console.log(keyword);
      const result =
        listjobs &&
        listjobs.filter((item) => {
          return item.title.toLowerCase().includes(keyword.toLowerCase());
        });
      // // const result = Object.keys(listjobs).some((key) =>
      // //   listjobs[key].toLowerCase().includes(keyword.toLowerCase())
      // // );
      setJobList(result);
    } else {
      setJobList(jobs);
    }
    setPlayer(keyword);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <form className="card card-sm">
                  <div className="card-body row no-gutters align-items-center">
                    <div className="col-auto">
                      <i className="fas fa-search h4 text-body"></i>
                    </div>
                    <div className="col">
                      <input
                        className="form-control form-control-lg form-control-borderless"
                        type="search"
                        placeholder="Search topics or keywords"
                        onChange={onChange}
                        value={player}
                      />
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-lg btn-success" type="submit">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="user-list">
          <div>Total Jobs:{listjobs.length}</div>
          {listjobs && listjobs.length > 0 ? (
            listjobs.map((job) => (
              <div key={job.id}>
                {/* <div key={listjobs.id} className="job">
                  <span className="job-id">{job.id}</span>
                  <span className="job-name">{job.category}</span>
                  <span className="job-age">{job.title}</span>
                </div> */}
                <JobCard item={job} />
              </div>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div>
        {/* <JobList tag="software-dev" title="software dev jobs" jobs={listjobs} /> */}
      </div>
    </div>
  );
}
