import Image from 'next/image';
import Link from 'next/link';

export default function MainServicesCard({
  bgImage,
  Icon,
  Heading,
  Description,
  LinkURL,
}) {
    return(
        <div className="mainWrapper">
            <div className="bgImage">
                <Image src={bgImage} width={6000} height={6000} alt="bg image"></Image>
            </div>
            <div className='serviceContent'>
                
                <div className='Icon'>
                    <Image src={Icon} width={6000} height={6000} alt="icon image"></Image>
                </div>
                <div className='heading'>
                    <h5>{Heading}</h5>
                </div>
                <div className='description'>
                    <p>{Description}</p>
                </div>
                <div className='mainServiceLink'>
                    <Link href={LinkURL} className='site_readmore'>
                        Learn More
                        <Image src="/images/arrow-icon.png" width={30} height={17} className='bounce' alt='arrow icon'></Image>
                    </Link>
                </div>
            </div>
        </div>
    );
}