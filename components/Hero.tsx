
import React from 'react';

interface HeroProps {
    onEnrollRequest: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnrollRequest }) => {
    return (
        <section className="bg-primary-blue text-white">
            <div className="container mx-auto px-6 py-24 md:py-32 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                    Welcome to Climex Academy
                </h1>
                <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                    Your dual pathway to academic excellence and job-ready technical skills. We shape futures, one student at a time.
                </p>
                <button 
                    onClick={onEnrollRequest}
                    className="bg-primary-teal text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-blue focus:ring-teal-500 transition-all transform hover:scale-110 text-lg"
                >
                    Enroll Now
                </button>
            </div>
        </section>
    );
};

export default Hero;