import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary-blue">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We're here to answer your questions. Reach out to us for admissions and inquiries.
                    </p>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="bg-gray-100 rounded-xl shadow-lg p-8 h-full">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h3>
                            <div className="space-y-4 text-gray-700">
                                <p className="flex items-start">
                                    <svg className="w-6 h-6 text-primary-teal mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <span>Near SBI Bank, Main Road, Piro, Bhojpur, Bihar - 802207</span>
                                </p>
                                <p className="flex items-center">
                                    <svg className="w-6 h-6 text-primary-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <a href="tel:+911234567890" className="hover:text-primary-teal transition-colors">+91 12345 67890</a>
                                </p>
                                <p className="flex items-center">
                                    <svg className="w-6 h-6 text-primary-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <a href="mailto:info@climexacademy.com" className="hover:text-primary-teal transition-colors">info@climexacademy.com</a>
                                 </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="rounded-xl shadow-lg overflow-hidden h-full">
                           <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.382447990159!2d84.4124993150143!3d25.39209598380597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d781a95e79169%3A0x6b47913364f9882!2sState%20Bank%20of%20India%20PIRO!5e0!3m2!1sen!2sin!4v1672522200000!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%"
                                style={{ border: 0, minHeight: '350px' }}
                                allowFullScreen={false} 
                                loading="lazy"
                                title="Climex Academy Location"
                           ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
