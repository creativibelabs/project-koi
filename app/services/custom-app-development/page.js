import Breadcrumb from '@/components/Breadcrumb';
import FeatureHighlights from '@/components/FeatureHighlights';
import SideBar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

export default function CustomAppDevelopment() {
    return(
        <>
            <Breadcrumb />
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar />
                </div>
                <div className='serviceContentWrapper'>
                    <div className='bannerImage'>
                        <Image src="/images/custom-app-development.png" width={6000} height={6000} alt="Logo" />
                    </div>
                    <div className="industriesServeMainWrapper">
                        <div className="is-heading gradient-background"><h3>Tailored Solutions That Work the Way You Do</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p>
                                    From ideas to deployment, we design and build high-performance web, mobile,
                                    and desktop applications that fit your business—no bloat, no guesswork.
                                    Whether you’re automating workflows, launching a customer-facing app, or
                                    modernizing legacy systems, we align technology with your vision to deliver real
                                    results.
                                </p>
                                <Image src="/images/app-dev-image2.jpg" width={6000} height={6000}/>
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight">
                        <div className="is-heading gradient-background"><h3>Feature Highlights</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <FeatureHighlights 
                                    imageUrl="/icons/cross-platform.png"
                                    title="Cross-Platform Development"
                                    description="Build once, deploy everywhere. We create responsive, consistent experiences across iOS, Android, and the web using modern frameworks like Flutter and React Native."
                                />
                                <FeatureHighlights 
                                    imageUrl="/icons/backend.png"
                                    title="Scalable Backend Architecture"
                                    description="From custom APIs to secure database structures, we develop reliable backend systems built to grow with your user base and data demands."
                                />
                                <FeatureHighlights 
                                    imageUrl="/icons/ui-ux.png"
                                    title="UX/UI Design That Converts"
                                    description="Our design-first approach puts users at the center—ensuring every tap, swipe, and click is intuitive, beautiful, and goal-driven."
                                />
                                <FeatureHighlights 
                                    imageUrl="/icons/integration.png"
                                    title="Seamless Integration"
                                    description="We connect your apps with CRMs, ERPs, payment systems, cloud services, and more for a connected experience that doesn’t disrupt your existing workflow."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background"><h3>Let’s Build Yours</h3></div>
                        <div className="isContent">
                            <p className="content">
                                Whether you need an internal tool, a customer portal, or a full-scale SaaS platform, we’re here to turn your ideas into powerful, working software.
                            </p>
                            <div className="buttons-wrapper">
                                <Link href="#">Book a Free Consultation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}