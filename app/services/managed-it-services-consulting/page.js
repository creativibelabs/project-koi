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
                    <div className="industriesServeMainWrapper">
                        <div className="is-heading gradient-background"><h3>Service Highlight</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <div className='is-heading gradient-background headingWrapper'>
                                    <h3>Expert Guidance for Smarter IT Decisions</h3>
                                </div>
                                <div className='duoColumns'>
                                    <div className='duoColumn1'>
                                        <div className='contentWrapper'>
                                            <h4>Key Features:</h4>
                                            <FeatureHighlights
                                                imageUrl=""
                                                title="24/7 Monitoring & Support"
                                                description="Our team proactively monitors your infrastructure to catch issues before they cause downtime. When something breaks, we’re just a call or clickaway"
                                            />
                                            <FeatureHighlights
                                                imageUrl=""
                                                title="Endpoint Management"
                                                description="We manage updates, patches, antivirus, and backups across every user device — ensuring your workforce stays protected and productive."
                                            />
                                            <FeatureHighlights
                                                imageUrl=""
                                                title="Server & Network Administration"
                                                description="From cloud servers to office networks, we ensure your systems run fast, stay secure, and scale smoothly as your business grows."
                                            />
                                            <FeatureHighlights
                                                imageUrl=""
                                                title="Helpdesk Services"
                                                description="Get fast, reliable support from real technicians — no phone trees or long waits. We resolve most user issues in minutes, not hours."
                                            />
                                        </div>
                                    </div>
                                    <div className='duoColumn2'>
                                        <div className='contentWrapper'>
                                            <h4>Key Features:</h4>
                                            <FeatureHighlights
                                                imageUrl=""
                                                title="Technology Strategy & Planning"
                                                description="We align your IT infrastructure with your business goals — helping you plan smarter, budget better, and avoid tech debt."
                                            />
                                            <FeatureHighlights
                                                imageUrl=""
                                                title="Infrastructure Audits"
                                                description="Get a detailed view of what's working, what's not, and how to strengthen your systems for reliability and compliance."
                                            />
                                            <FeatureHighlights
                                                imageUrl=""
                                                title="Vendor & Tool Selection"
                                                description="From software platforms to cloud providers, we help you choose solutions that fit your business — and avoid the ones that don’t."
                                            />
                                            <FeatureHighlights
                                                imageUrl=""
                                                title="Cybersecurity Advisory"
                                                description="Stay ahead of risks with expert assessments, compliance support (like HIPAA or ISO 27001), and actionable risk mitigation strategies."
                                            />
                                        </div>
                                    </div>
                                </div>
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