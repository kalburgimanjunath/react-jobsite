import React, { useEffect, useState } from 'react';
export default function Category({ category }) {
  // console.log(category);
  const CatList = category.map((item) => {
    // console.log(name);

    return <button>{item.name}</button>;
  });
  return (
    <div className="container">
      {category &&
        category.map((item) => {
          return (
            <a href={item.id} className="btn btn-primary">
              {item.name}
            </a>
          );
          // return <CatList item={item} />;
        })}
    </div>
  );
}
