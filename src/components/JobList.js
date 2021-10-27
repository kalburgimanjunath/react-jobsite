import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { Modal } from 'react-responsive-modal';
export default function JobList({ tag, title }) {
  let [jobs, setJobs] = useState(null);
  let [jobId, setJobId] = useState(null);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    fetch('https://remotive.io/api/remote-jobs?category=software-dev')
      .then((response) => response.json())
      // 4. Setting *jobs* to the image url that we received from the response above
      .then((data) => setJobs(data.jobs));
  }, []);
  // console.log(jobs);
  // const JobCard = ({ item }) => {
  //   return (
  //     <div>
  //       <div>{item.title}</div>
  //       <div>
  //         <img width="50" height="50" src="{item.company_logo_url}" />
  //       </div>
  //       <div>
  //         {item.company_name}
  //         {/* {item.candidate_required_location} */}
  //       </div>
  //       <div>
  //         <h6>
  //           <div>Salary:{item.salary}</div>
  //           <div>
  //             Tags:
  //             {item.tags.map((tag) => {
  //               return <div>{tag}</div>;
  //             })}
  //           </div>
  //           <div>Job Type:{item.job_type}</div>
  //         </h6>
  //       </div>
  //       {/* <div>{item.category}</div> */}
  //       {/* <div>{item.description}</div> */}
  //     </div>
  //   );
  // };
  return (
    <div class="">
      <h1>{title}</h1>
      {/* <button onClick={() => setOpen(true)}>Open modal</button> */}
      <Modal open={open} onClose={onCloseModal} center>
        <h1>Test</h1>
      </Modal>
      {jobs &&
        jobs.map((item) => (
          <div>
            {/* <Modal open={open} onClose={onCloseModal} center>
              <div className="container">
                <JobCard item={item} />
              </div>
            </Modal> */}
            <JobCard item={item} />
            {/* <p className="card-text">
              <a href={item.url} target="_new">
                View more
              </a>
            </p> */}
          </div>
        ))}
    </div>
  );
}
