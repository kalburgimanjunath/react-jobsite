import React, { useEffect, useState } from 'react';
export default function Category() {
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
    <div>
      {/* {category.map((item) => {
        item.name;
      })} */}
    </div>
  );
}
