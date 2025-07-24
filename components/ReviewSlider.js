'use client';

import React, { useEffect, useState } from "react";



export default function ReviewSlider({ reviews, title, designation }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 10000); // Match animation duration
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="review-container">
      <div key={current} className="review  text-white">
        <p className="text-2xl  mb-2">
          <span className="font-[700]">{reviews[current].review}</span>
        </p>
        <p className="text-2xl mt-2">{reviews[current].name}</p>
        <p className="text-lg ">{reviews[current].designation}</p>
      </div>
    </div>
  );
}
