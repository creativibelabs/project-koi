'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Jobs({
  title,
  exp,
  location,
  link,
}) {
  return (
    <div className='jobMainWrap'>
        <div className='titleWrap'>
            <div className='icon'>
                <Image src="/icons/job.png" width={20} height={20} alt='icon'></Image>
            </div>
            <div className='title'>
                <p className='titleText'>
                    {title}
                </p>
                <p className='exp'>
                    Experience: {exp}
                </p>
            </div>
        </div>
        <div className='locationWrap'>
            <p className='location'>Location: {location}</p>
        </div>
        <div className='buttons-wrapper'>
            <Link href={link}>Apply Now</Link>
        </div>
    </div>
  );
}
