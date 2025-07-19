'use client';

import React, { useEffect, useState } from "react";



export default function ReviewSlider({reviews}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 10000); // Match animation duration
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-container">
      <div key={current} className="review">
        {reviews[current]}
      </div>
    </div>
  );
}
