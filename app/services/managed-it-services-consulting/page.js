import Breadcrumb from '@/components/Breadcrumb';
import FeatureHighlights from '@/components/FeatureHighlights';
import DotMatrixReviews from '@/components/DotMatrixReviews';
import SideBar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

export default function managedItServices() {
    return (
        <div>
            <Breadcrumb />
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar />
                </div>
                <div className='serviceContentWrapper'>
                    <div className="industriesServeMainWrapper webDev">
                        <div className="is-heading gradient-background"><h3>Reliable IT, Strategic Insight — Without the Overhead</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p>
                                    We help businesses stay focused on what they do best by taking care of their
                                    technology — from hands-on support to long-term planning. Whether you need a
                                    full-service IT partner or expert guidance for a specific challenge, we’re here to keep
                                    your systems secure, efficient, and future-ready.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight">
                        <div className="is-heading gradient-background"><h3>Service Highlight</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <FeatureHighlights
                                    imageUrl="/icons/search-engine.png"
                                    title="Performance and Search Engine Optimization"
                                    description="Built from the ground up for performance and visibility — every line of code matters."
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/cms.png"
                                    title="Content Management System Integration"
                                    description="Take full control of your content. From WordPress to headless CMS platforms like Sanity and Contentful, manage your content your way."
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/responsive.png"
                                    title="Fully Responsive Design Across Devices"
                                    description="Flawless display on all screen sizes – from desktop to mobile – ensuring a polished, professional experience everywhere."
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/website.png"
                                    title="Conversion-Focused UX"
                                    description="We blend form and function to guide visitors toward action — whether that’s buying, booking, or reaching out."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight">
                        <div className="is-heading gradient-background"><h3>What Our Clients Say</h3></div>
                        <div className="isContent led-text">
                            <div className="itemsWrapper">
                                <DotMatrixReviews /> 
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background"><h3>Flexible Plans That Fit Your Business — Let’s Make IT Your Advantage</h3></div>
                        <div className="isContent">
                            <p className="content">
                                Choose a plan or customize your own. Pay only for what you need
                            </p>
                            <div className="buttons-wrapper">
                                <Link href="#">Talk To a Consultant</Link>
                                <Link href="#">Request a Free Assessment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}