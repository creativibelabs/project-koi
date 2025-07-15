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
                        <div className="is-heading gradient-background"><h3>What Sets Our Websites Apart</h3></div>
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
                        <div className="is-heading gradient-background"><h3>Types of Websites We Build</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <FeatureHighlights
                                    imageUrl="/icons/bullhorn.png"
                                    title="Marketing & Brand Websites "
                                    description="Your online presence, built to impress and convert."
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/monitor.png"
                                    title="Corporate Portals & Intranets"
                                    description="Secure, role-based platforms for Internal communications, knowledge sharing, and operations"
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/ecommerce.png"
                                    title="E-commerce Platforms"
                                    description="Seamlessly Integrated stores that handle payments, inventory, customer experience and analytics at ease"
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/ladning-page.png"
                                    title="Landing Pages & Microsites"
                                    description="Agile web experiences for campaigns, product launches and lead capture"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight cmsWork">
                        <div className="is-heading gradient-background"><h3>CMS & Technology Options</h3></div>
                        <div className="isContent">
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
                        <div className="is-heading gradient-background"><h3>Your Project Start Here</h3></div>
                        <div className="isContent">
                            <p className="content">
                                Whether you're starting from scratch or rebuilding with purpose, we’ll help you create a site that not only looks great — it performs where it counts.
                            </p>
                            <div className="buttons-wrapper">
                                <Link href="#">Request a Free Website Audit</Link>
                                <Link href="#">Request a Quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}