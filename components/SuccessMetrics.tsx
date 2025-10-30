
import React from 'react';

const SuccessMetrics: React.FC = () => {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-6 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="bg-primary-teal text-white rounded-full p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">1000+ Students Taught</h2>
                        <p className="text-gray-500 mt-2 text-lg">and counting... Join our successful community!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessMetrics;
