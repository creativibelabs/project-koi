import Image from "next/image";
import Link from 'next/link';
import ServicesCards from '@/components/ServicesCards';
import WhyChooseUsCard from '@/components/whyChooseUsCard';

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="content-section gradient-background">
          <h1>IT Solutions Tailored to Your Business</h1>
          <p>From day-to-day support to long term strategy, we deliver cost efficient, flexible IT services designed to match your goals and specific way of working</p>
          <div className="buttons-wrapper">
            <Link href="#">Call us</Link>
            <Link href="#">Check Services</Link>
            <Link href="#">Try Demo</Link>
          </div>
        </div>
        <div className="image-section">
          <Image src='/images/hero-image.png' width={516} height={444} alt="Hero Image"></Image>
        </div>
      </div>
      <div className="ServicesCardsWrapper">
        <div className="ServicesCardsHeading gradient-background"><h2>Our Services</h2></div>
        <div className="ServicesCardsContent">
          <ServicesCards 
            imageUrl="/images/service-card-image.png"
            buttonText="Learn More"
            link="#"
            heading="Custom App Development"
            description="Tailored software, mobile app and web applications turning your ideas into powerful digital solutions"
          />
          <ServicesCards 
            imageUrl="/images/service-card-image.png"
            buttonText="Learn More"
            link="#"
            heading="Web Development"
            description="Responsive, SEO-friendly websites - from sleek portfolios to full-featured e-commerce stores - showcase your brand and drive real results."
          />
          <ServicesCards 
            imageUrl="/images/service-card-image.png"
            buttonText="Learn More"
            link="#"
            heading="Cloud Migration & Storage"
            description="Seamlessly migrate to the cloud – boosting performance, security, and scalability."
          />
          <ServicesCards 
            imageUrl="/images/service-card-image.png"
            buttonText="Learn More"
            link="#"
            heading="AI Powered Solutions"
            description="Leverage AI and machine learning to streamline operations, personalize experiences, and drive data-backed decisions"
          />
          <ServicesCards 
            imageUrl="/images/service-card-image.png"
            buttonText="Learn More"
            link="#"
            heading="Managed IT Services & Consulting"
            description="Enterprise-grade IT management and strategic consulting to optimize operations"
          />
          <ServicesCards 
            imageUrl="/images/service-card-image.png"
            buttonText="Learn More"
            link="#"
            heading="Digital Marketing"
            description="From clicks to customers—grow fast with smart, effective digital marketing"
          />
        </div>
      </div>

      <div className="whyCHooseUsWrapper">
        <div className="whyChooseUsHeading gradient-background"><h2>Why Choose Us?</h2></div>
        <div className="whyChooseUsCardContents">
          <p className="wcu-heading">
            <span className="heading-1 block mb-2">Smart IT Solutions with Real Business Benefits</span>
            <span className="heading-2">We don’t just provide services – we deliver results. Here’s what you can expect when you partner with us.</span></p>
          <div className="cardWrappers">
            <WhyChooseUsCard 
              imageUrl="/images/why-choose-1.png"
              link="#"
              title="End-to-End Expertise"
              tags={['3D', 'AR/VR/MR', '2D']}
              description="We off complete digital solutions – from strategy to launch – so you get everything under one roof."
            />
            <WhyChooseUsCard 
              imageUrl="/images/why-choose-2.png"
              link="#"
              title="Performance-Focused Solutions"
              tags={['3D', 'AR/VR/MR', '2D']}
              description="We focus on measurable outcomes – we deliver solutions that drive real business value."
            />
            <WhyChooseUsCard 
              imageUrl="/images/why-choose-3.png"
              link="#"
              title="Reliable Support & Partnership"
              tags={['3D', 'AR/VR/MR', '2D']}
              description="We don’t just delivery projects – we build long-term relationships with proactive support and honest communication."
            />
          </div>
        </div>
      </div>

      <div className="industriesServeMainWrapper">
        <div className="is-heading gradient-background"><h2>Industries We Serve</h2></div>
        <div className="isContent">
          <div className="itemsWrapper">
            <ul>
              <li>Manufacture</li>
              <li>Imp / Exp</li>
              <li>Logistics</li>
              <li>Retail</li>
              <li>Professional Services</li>
              <li>Finance</li>
              <li>Schools</li>
              <li>Health Service</li>
              <li>Food Service</li>
              <li>Renovation</li>
              <li>Freelance</li>
              <li>And More...</li>
            </ul>
          </div>
          <div className="buttons-wrapper">
            <Link href="#">See Case Studies</Link>
            <Link href="#">Explore How It Works</Link>
          </div>
        </div>
      </div>

      <div className="StillThinkingMainWrapper">
        <div className="st-heading gradient-background"><h2>Still Thinking?</h2></div>
        <div className="stContent">
          <p className="heading-1 mb-4">No problem! Explore our <Link href="#" className="link-text">Interactive Demo</Link></p>
          <p className="content">
            Dive into real scenarios and see firsthand how our IT solutions work for your business. Whether you're testing cloud integration, exploring security features, or just curious, it's an easy and fun way to get familiar with what we offer—no commitment, just exploration.
          </p>
          <div className="buttons-wrapper">
            <Link href="#">Try the Demo</Link>
          </div>
        </div>
      </div>
    </>
  );
}
