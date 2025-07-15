'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FeatureHighlights({
  imageUrl,
  title,
  description,
}) {
  return (
    <div className="p-4 border rounded-md shadow-sm service-card-wrap">
      <div className="image-button-wrap">
        { imageUrl &&
            <Image
                src={imageUrl}
                alt={title}
                width={204}
                height={118}
                className="rounded mb-4 object-cover"
            />
        }
      </div>
      { title && <p className="text-xl font-semibold mb-2 heading">{title}</p> }
      { description && <p className="text-gray-600 mb-4 description">{description}</p> }
      
    </div>
  );
}
