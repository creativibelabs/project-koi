import Image from 'next/image';
import Link from 'next/link';
import FeatureHighlights from '@/components/FeatureHighlights';

export default function CloudStorage() {
    return (
        <div>
            <div className="industriesServeMainWrapper webDev cloudStorage">
                <div className="is-heading gradient-background"><h3>Introduction</h3></div>
                <div className="isContent">
                    <div className="itemsWrapper">
                        <p>
                            As part of your cloud migration, we help you implement storage infrastructure that grows with your data – without locking you into one platform or paying for what you don’t use
                            <br />
                            <br />
                            Whether you need high-availability access for active applications or long-term archival for compliance, we match you with the right storage tier, provider and backup strategy
                            <br />
                            <br />
                            Storage Providers:
                        </p>
                        <ul>
                            <li>Amazon S3</li>
                            <li>Azure Blob Storage</li>
                            <li>Google Cloud Storage</li>
                            <li>Backblaze B2</li>
                            <li>Wasabi</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="whyCHooseUsWrapper industriesServeMainWrapper">
                <div className="is-heading whyChooseUsHeading gradient-background"><h3>Private Storage</h3></div>
                <div className="whyChooseUsCardContents">
                    <div className='itemsWrapper'>
                        <p className="wcu-heading"><span className="heading-1">Sensitive Data? We provide Privacy-Driven Cloud Storage.</span></p><br /><br />
                        <p>
                            We understand that in industries like healthcare, finance, and legal
                            services, privacy isn’t optional — it’s a legal and ethical obligation. That’s
                            why our cloud migration and storage solutions are designed from the ground
                            up to protect sensitive data, meet strict compliance standards, and prevent
                            unauthorized access at every level.
                        </p>
                    </div>
                </div>
            </div>

            <div className="industriesServeMainWrapper featuresHighlight">
                <div className="is-heading gradient-background"><h3>Key Features</h3></div>
                <div className="isContent">
                    <div className="itemsWrapper">
                        <FeatureHighlights
                            imageUrl="/icons/hot.png"
                            title="Cold, warm, or hot storage"
                            description="We align access speed with your usage needs to control costs"
                        />
                        <FeatureHighlights
                            imageUrl="/icons/encrypted.png"
                            title="End-to-End Data Encryption"
                            description="Your data is protected in transit and at rest with enterprise-grade encryption"
                        />
                        <FeatureHighlights
                            imageUrl="/icons/backup.png"
                            title="Automated Backups & Redundancy"
                            description="Replication across zones for high availability and fast disaster recovery"
                        />
                        <FeatureHighlights
                            imageUrl="/icons/security-system.png"
                            title="Privacy-first Architecture"
                            description="We implement region-based data residency, fine-grained access isolation (IAM policies), role-based permissions with audit trails and private VPC and encryption key ownership"
                        />
                    </div>
                    <div className="buttons-wrapper">
                        <Link href="#">Explore Our Storage Plan</Link>
                        <Link href="#">Book a Free Consultation</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}