'use client';

import Image from "next/image";
import Link from 'next/link';
import ServicesCards from '@/components/ServicesCards';
import ReviewSlider from '@/components/ReviewSlider';
import Jobs from '@/components/Jobs';
import Organizationstructure from "@/components/Organizationstructure";

export default function AboutUs() {

    const quotes = [
        '"Working here has been an incredible journey — the team is supportive, and every project pushes me to grow." — Ayesha Khan, Frontend Developer',
        '"I love how we prioritize creativity and collaboration. It\'s more than a job — it feels like a shared mission." — Usman Raza, UX Designer',
        '"Every day brings a new challenge, and that\'s exactly what keeps me motivated.The energy here is unmatched." — Fatima Ali, Project Manager',
    ];

    return (
        <>
            <div className="hero-section-about pt-36">
                <div className="content-section-about">
                    <div className="content-wrapper-about">
                        <h1 className="main-heading">Who We Are</h1>
                        <p>Driven by innovation. United by purpose</p>
                        <div className="button-wrapper">
                            <Link href="#">Meet the Team</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whyCHooseUsWrapper coreValues">
                <div className="whyChooseUsHeading gradient-background"><h2>Core Values</h2></div>
                <div className="whyChooseUsCardContents">
                    <div className="cardWrappers">
                        <ServicesCards
                            heading="Innovation"
                            description="Think smart, Act fast."
                        />
                        <ServicesCards
                            heading="Effectiveness"
                            description="Make it work, Make it count."
                        />
                        <ServicesCards
                            heading="Collaboration"
                            description="Together, we grow."
                        />
                        <ServicesCards
                            heading="Integrity"
                            description="We do what's right."
                        />
                    </div>
                </div>
            </div>

            <div className="missionVission">
                <div className="whyCHooseUsWrapper coreValues">
                    <div className="whyChooseUsHeading gradient-background"><h2>Mission</h2></div>
                    <div className="whyChooseUsCardContents">
                        <div className="cardWrappers">
                            <p>
                                We’re on a mission to reshape the way people interact with technology. By
                                combining cutting-edge innovation with user-centered design, we build
                                products that simplify, connect, and empower — making life and work
                                smarter, not harder.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="whyCHooseUsWrapper coreValues">
                    <div className="whyChooseUsHeading gradient-background"><h2>Vision</h2></div>
                    <div className="whyChooseUsCardContents">
                        <div className="cardWrappers">
                            <p>
                                We envision a world where technology enhances every human experience
                                — seamless, intuitive, and inclusive. Our goal is to pioneer bold ideas that
                                shape the future and empower people to thrive in a connected world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whyCHooseUsWrapper coreValues">
                <div className="whyChooseUsHeading gradient-background"><h2>Quotes from team</h2></div>
                <div className="whyChooseUsCardContents">
                    <div className="cardWrappers">
                        <ReviewSlider
                            reviews={quotes}
                        />
                    </div>
                </div>
            </div>

            <div className="whyCHooseUsWrapper coreValues">
                <div className="whyChooseUsHeading gradient-background"><h2>Organization Structure</h2></div>
                <div className="whyChooseUsCardContents">
                    {/* <div className="cardWrappers">
                        <div className="org-chart">
                            <div className="org-node">Board of Directors</div>

                            <div className="line-vertical"></div>

                            <div className="org-node">CEO</div>

                            <div className="line-vertical"></div>

                            <div className="horizontal-group">
                                <div className="group-connector">
                                    <div className="org-node">CTO</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">COD</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">CFO</div>
                                </div>
                            </div>

                            <div className="line-vertical"></div>

                            <div className="horizontal-group">
                                <div className="group-connector">
                                    <div className="org-node">Developer</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">Designer</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">Finance Officer</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">HR</div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Organizationstructure />
                </div>
            </div>

            <div className="whyCHooseUsWrapper coreValues careerOp">
                <div className="whyChooseUsHeading gradient-background"><h2>Career Opportunities</h2></div>
                <div className="cardWrappers">
                    <Jobs
                        title="Software Engineer"
                        exp="2+ Years"
                        location="Karachi, Pakistan"
                        link="#"
                    />
                    <Jobs
                        title="Software Engineer"
                        exp="2+ Years"
                        location="Karachi, Pakistan"
                        link="#"
                    />
                    <Jobs
                        title="Software Engineer"
                        exp="2+ Years"
                        location="Karachi, Pakistan"
                        link="#"
                    />
                    <Jobs
                        title="Software Engineer"
                        exp="2+ Years"
                        location="Karachi, Pakistan"
                        link="#"
                    />
                </div>
            </div>


            <div className="industriesServeMainWrapper letsBuildToghether about">
                <div className="isContent">
                    <p className="content">
                        Passionate people, bold ideas
                    </p>
                    <div className="buttons-wrapper">
                        <Link href="#">Contact Our Team</Link>
                    </div>
                </div>
            </div>

        </>
    );
}