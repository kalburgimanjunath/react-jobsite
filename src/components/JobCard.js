import React, { useState } from 'react';

export default function JobCard({ item }) {
  return (
    <div class="card mb-3 col-md-3">
      <img src={item.url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p>Company:{item.company_name}</p>
        <p>Location:{item.candidate_required_location}</p>
        <p class="card-text">
          <div>
            Salary:<span>{item.salary}</span>
          </div>
        </p>
        <p class="card-text">
          <a href={item.url} target="_new">
            View more
          </a>
        </p>
        {/* <span>{item.description}</span> */}
        {/* <span dangerouslySetInnerHTML={item.description} /> */}
      </div>
    </div>
  );
}
