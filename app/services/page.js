import Image from "next/image";
import Link from 'next/link';
import MainServicesCard from '@/components/services/MainServicesCard';
import WhyChooseUsCard from '@/components/whyChooseUsCard';
import FeatureHighlights from '@/components/FeatureHighlights';

export default function Services() {
    return (
        <>
            <div className="service-hero-section">
                <div className="content-section">
                    <h1>Bridging Today’s Needs with Tomorrow’s Tech</h1>
                    <p>We design and build custom digital tools that align with your exact needs — from secure cloud migrations to purpose-built applications</p>
                    <span className="2text-content">
                        <p className="green-text">
                            <Image alt="image" src="/images/line1.png" width={20} height={10}></Image>
                            SMEs friendly
                        </p>
                        <p className="white-text">
                            <Image alt="image" src="/images/line2.png" width={20} height={10}></Image>
                            Cost efficient
                        </p>
                    </span>
                    <div className="buttons-wrapper">
                        <Link href="#">Talk to a Solutions Expert</Link>
                    </div>
                </div>
            </div>

            <div className="ServicesCardsWrapper">
                <div className="ServicesCardsHeading gradient-background"><h2>Featured Solutions</h2></div>
                <div className="ServicesCardsContent">
                    <MainServicesCard
                        Icon="/icons/app-development.png"
                        bgImage="/icons/service-bg-image.png"
                        LinkURL="#"
                        Heading="Custom Software / App Development"
                        Description="Tailored desktop, mobile, and backend applications built around your workflow"
                    />
                    <MainServicesCard
                        Icon="/icons/web-development.png"
                        bgImage="/icons/service-bg-image.png"
                        LinkURL="#"
                        Heading="Custom Website Development"
                        Description="Responsive, high-performance websites that reflect your brand and business needs"
                    />
                    <MainServicesCard
                        Icon="/icons/cloud-migration.png"
                        bgImage="/icons/service-bg-image.png"
                        LinkURL="#"
                        Heading="Cloud Migration & Storage Services"
                        Description="Secure and seamless migration of your data, applications and workloads to the cloud, with zero downtime."
                    />
                    <MainServicesCard
                        Icon="/icons/ai-powered.png"
                        bgImage="/icons/service-bg-image.png"
                        LinkURL="#"
                        Heading="AI Powered Solutions & Machine Learning"
                        Description="From predictive analytics to custom ML model training — harness the power of AI to drive smarter decisions."
                    />
                    <MainServicesCard
                        Icon="/icons/it-services.png"
                        bgImage="/icons/service-bg-image.png"
                        LinkURL="#"
                        Heading="Managed IT Services & Consulting"
                        Description="Expert IT support and strategic consulting for businesses of all sizes—with a special focus on the unique needs of small and mid-sized enterprises. Scalable, affordable, and designed to grow with you."
                    />
                    <MainServicesCard
                        Icon="/icons/digital-marketing.png"
                        bgImage="/icons/service-bg-image.png"
                        LinkURL="#"
                        Heading="Digital Marketing"
                        Description="From predictive analytics to custom ML model training — harness the power of AI to drive smarter decisions."
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

            <div className="industriesServeMainWrapper featuresHighlight cmsWork cmsWork2">
                <div className="is-heading gradient-background"><h3>Tech Stack</h3></div>
                <div className="isContent">
                    <div className="itemsWrapper">
                        <FeatureHighlights
                            imageUrl="/icons/react.png"
                            title="React"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/mongodb.svg"
                            title="MongoDB"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/nodejs.png"
                            title="Node.js"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/postgresql.png"
                            title="MySQL"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/net.png"
                            title=".NET"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/aws.png"
                            title="AWS"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/azure.png"
                            title="Azure"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/firebase.svg"
                            title="Firebase"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/python.png"
                            title="Python"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/tensorflow.png"
                            title="TensorFlow"
                            description=""
                        />
                        <FeatureHighlights
                            imageUrl="/icons/c++.png"
                            title="C++"
                            description=""
                        />
                    </div>
                </div>
            </div>

            <div className="StillThinkingMainWrapper industriesServeMainWrapper">
                <div className="stContent">
                    <p className="heading-1 mb-4 text-center">
                        Ready to Streamline Your IT Operations?
                    </p>
                    <div className="buttons-wrapper ga">
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Schedule an Assessment</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
