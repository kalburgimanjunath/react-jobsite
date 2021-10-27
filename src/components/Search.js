import React from 'react';
export default function Search() {
  return (
    <div>
      <input type="search" placeholder="search job title or keyword" />
      <input type="search" placeholder="search city,state or remote" />
      <button type="submit">Search Jobs</button>
    </div>
  );
}
