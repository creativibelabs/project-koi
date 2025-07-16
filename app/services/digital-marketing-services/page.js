'use client';

import Breadcrumb from '@/components/Breadcrumb';
import FeatureHighlights from '@/components/FeatureHighlights';
import SideBar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import Lottie from "lottie-react";
import animationData from "../../../public/lottie/rising-chart.json";

export default function DigitalMarketingServices() {
    return (
        <div>
            <Breadcrumb />
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar />
                </div>
                <div className='serviceContentWrapper'>
                    <div className="industriesServeMainWrapper webDev">
                        <div className="is-heading gradient-background"><h3>Marketing That Moves the Needle</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p>
                                    Data-driven digital strategies that turn browsers into buyers, clicks into conversions,
                                    and awareness into measurable ROI (Return On Investment)
                                </p>
                                <br />
                                <p>
                                    We help businesses attract the right audience, convert more leads, and grow
                                    revenue through strategic, data-driven digital marketing. Whether you're launching a
                                    product, scaling a brand, or fixing underperforming campaigns — we’re your growth
                                    partner
                                </p>
                                <div className='animatedSvg'>
                                    <Lottie animationData={animationData} loop={true} autoplay={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight">
                        <div className="is-heading gradient-background"><h3>Service types</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <FeatureHighlights
                                    imageUrl="/icons/search-engine.png"
                                    title="SEO & Content Strategy"
                                    description="Be Found. Be Chosen. Be Trusted."
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/email-marketing.png"
                                    title="Email Marketing & Automation"
                                    description="Automated campaigns that drive repeat business"
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/pay-per-click.png"
                                    title="Paid Media (PPC & Display Ads)"
                                    description="Maximize ROI with hyper-targeted ad campaigns across major platforms."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight cmsWork">
                        <div className="is-heading gradient-background"><h3>Funnel-Based Solutions</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                Flow Chart
                            </div>
                            <div className="itemsWrapper">
                                <FeatureHighlights
                                    imageUrl="/icons/wordpress.png"
                                    title="WordPress"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/webflow.png"
                                    title="Webflow"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/sanity.png"
                                    title="Sanity"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/strapi.png"
                                    title="Strapi"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/contentful.png"
                                    title="Contentful"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/jamstack.png"
                                    title="Jamstack"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/shopify.png"
                                    title="Shopify"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/nextjs.png"
                                    title="Next.js"
                                    description=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background"><h3>Let’s Build a Digital Marketing Strategy That Works</h3></div>
                        <div className="isContent">
                            <p className="content">
                                We’ll help you generate qualified leads, boost your brand, and track every click.
                                Whether you need a full-service marketing team or campaign-specific support, we’ll
                                craft a strategy built around results.
                            </p>
                            <div className="buttons-wrapper">
                                <Link href="#">Talk to a Strategist</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}