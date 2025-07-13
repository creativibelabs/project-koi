'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesCards({
  imageUrl,
  buttonText,
  link,
  heading,
  description,
}) {
  return (
    <div className="p-4 border rounded-md shadow-sm service-card-wrap">
      <div className="image-button-wrap">
        <Image
          src={imageUrl}
          alt={heading}
          width={204}
          height={118}
          className="rounded mb-4 object-cover"
        />
        <Link href={link}>
          <span className="buttonText">{buttonText}</span>
          <span className="buuttonIcon">
            <svg height="42.9" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M56.7 0.565918H31.0811L48.548 22.0169L31.0811 43.4689H56.7L74.1671 22.0169L56.7 0.565918Z"
                  fill="#00FF38"
                />
                <path
                  d="M24.1481 0.565918H15.7861L33.2541 22.0169L15.7861 43.4689H24.1481L41.6161 22.0169L24.1481 0.565918Z"
                  fill="#00FF38"
                />
                <path
                  d="M9.02997 0.565918H0.667969L18.136 22.0169L0.667969 43.4689H9.02997L26.498 22.0169L9.02997 0.565918Z"
                  fill="#00FF38"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; 5 0; 0 0"
                  keyTimes="0; 0.5; 1"
                  dur="2s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
              </g>
            </svg>
          </span>
        </Link>
      </div>
      <p className="text-xl font-semibold mb-2 heading">{heading}</p>
      <p className="text-gray-600 mb-4 description">{description}</p>
    </div>
  );
}
