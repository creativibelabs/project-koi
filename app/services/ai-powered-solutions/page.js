import Breadcrumb from '@/components/Breadcrumb';
import FeatureHighlights from '@/components/FeatureHighlights';
import SideBar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

export default function AiPoweredSolutions() {
    return (
        <div>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar />
                </div>
                <div className='serviceContentWrapper'>
                    <div className="industriesServeMainWrapper webDev">
                        <div className="is-heading gradient-background"><h3>Reimagine What’s Possible with AI</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p>
                                    From automation to advanced insights, we design custom AI solutions that solve real-world problems — powered by machine learning, computer vision, and natural language understanding.
                                </p>
                                <br />
                                <p>
                                    We help you unlock the true value of your data with AI solutions that go beyond automation — delivering real-time insights, scalable decision-making, and intelligent tools that grow with your business. From predictive analytics to natural language processing, we custom-build AI that solves your specific challenges
                                </p>
                                {/* <Image src="/images/web-dev-image1.png" width={6000} height={6000}/> */}
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight">
                        <div className="is-heading gradient-background"><h3>Feature Hightlights</h3></div>
                        <div className="isContent">
                            <p className='subHeadings'><b>What We Deliver</b></p>
                            <div className="itemsWrapper">
                                <FeatureHighlights
                                    imageUrl=""
                                    title="Custom Machine Learning Models"
                                    description="We build and train machine learning models on your data to deliver tailored predictions and classifications."
                                />
                                <FeatureHighlights
                                    imageUrl=""
                                    title="Natural Language Processing (NLP)"
                                    description="Extract meaning from conversations, documents, and user inputs. We design chatbots, smart search, and content analysis tools that understand human language."
                                />
                                <FeatureHighlights
                                    imageUrl=""
                                    title="Computer Vision"
                                    description="From quality checks on assembly lines to image-based authentication, we use deep learning to help machines “see” and act in real-world scenarios."
                                />
                                <FeatureHighlights
                                    imageUrl=""
                                    title="AI-Powered Automation"
                                    description="We create intelligent systems that act on real-time data — automating repetitive workflows, surfacing insights, and reducing human error."
                                />
                            </div>
                            <p className='subHeadings'><b>Industry-Specific Use Cases</b></p>
                            <div className="itemsWrapper">
                                <FeatureHighlights
                                    imageUrl=""
                                    title="Retail & E-Commerce"
                                    description="Demand forecasting, dynamic pricing, personalized recommendations, and inventory predictions."
                                />
                                <FeatureHighlights
                                    imageUrl=""
                                    title="Healthcare"
                                    description="Predictive diagnosis, automated chart review, medical record extraction."
                                />
                                <FeatureHighlights
                                    imageUrl=""
                                    title="Finance"
                                    description="Fraud detection, real-time credit scoring, NLP-powered compliance scanning and sentiment analysis"
                                />
                                <FeatureHighlights
                                    imageUrl=""
                                    title="Manufacturing & Logistics"
                                    description="Defects detection, AI assisted route optimization, inventory management."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper ai-cta letsBuildToghether featuresHighlight cmsWork">
                        <div className="is-heading gradient-background"><h3>Bring AI to Your Business — On Your Terms</h3></div>
                        <div className="isContent">
                            <p className="content">
                                Whether you’re just starting with AI or ready to scale a solution, we design around your data, goals, and industry.
                            </p>

                            <div className="itemsWrapper">
                                <FeatureHighlights
                                    imageUrl="/icons/tensorflow.png"
                                    title="TensorFlow"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/pytorch.png"
                                    title="PyTorch"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/opencv.png"
                                    title="OpenCV"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/face.png"
                                    title="Hugging Face"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/aws.png"
                                    title="AWS SageMaker"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/vertex.png"
                                    title="Google Vertex AI"
                                    description=""
                                />
                                <FeatureHighlights
                                    imageUrl="/icons/azure.png"
                                    title="Microsoft Azure AI"
                                    description=""
                                />
                            </div>
                            <div className="buttons-wrapper">
                                <Link href="#">Talk to an AI Consultant</Link>
                                <Link href="#">Explore free Use Case demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}