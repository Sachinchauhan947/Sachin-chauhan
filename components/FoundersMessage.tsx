
import React from 'react';

const FoundersMessage: React.FC = () => {
    return (
        <section id="founder" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden md:flex">
                    <div className="md:w-1/3">
                        <img 
                            className="h-64 w-full object-cover md:h-full"
                            src="https://picsum.photos/800/1000?grayscale" 
                            alt="Arpan Singh, Founder of Climex Academy" 
                        />
                    </div>
                    <div className="p-8 md:p-12 md:w-2/3">
                        <h2 className="text-3xl font-extrabold text-primary-blue mb-4">From the Founder's Desk</h2>
                        <p className="text-lg text-primary-teal font-semibold mb-6">Arpan Singh</p>
                        <blockquote className="text-gray-600 text-lg italic border-l-4 border-primary-teal pl-6">
                            "At Climex Academy, we believe education should be a launchpad, not a limitation. That's why we've built a unique dual-focus institution. We are committed to providing top-tier academic coaching that ensures success in schools and boards, while simultaneously offering practical, job-oriented courses that open doors to immediate career opportunities. Seeing over 1000+ students thrive under this philosophy is our greatest achievement. We are here to empower you for both academic and professional success."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersMessage;
