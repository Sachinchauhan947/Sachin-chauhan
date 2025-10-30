import React from 'react';
import { ExcelIcon, TallyIcon, AdcaIcon, AIIcon, ECommerceIcon } from './icons';
import { Course } from '../types';

const techCourses: Course[] = [
    { name: 'Advanced Excel', price: 1500, icon: ExcelIcon, description: 'Master data analysis, visualization, and automation to become an Excel power user.', category: 'Career Tech', detailedDescription: 'Unlock the full potential of Microsoft Excel. This course takes you from the basics to advanced functionalities like PivotTables, VLOOKUP, macros, and data modeling. Essential for any office professional.', learningOutcomes: ['Create complex spreadsheets and dashboards.', 'Automate repetitive tasks using macros and VBA.', 'Analyze large datasets with advanced formulas.', 'Present data effectively using charts and graphs.'], prerequisites: ['Basic computer literacy.', 'No prior Excel knowledge required.'] },
    { name: 'Tally Prime with GST', price: 3000, icon: TallyIcon, description: 'Gain expertise in accounting, inventory, and GST compliance with the industry-standard software.', category: 'Career Tech', detailedDescription: 'Become a proficient accounting professional with our comprehensive Tally Prime course. Learn to manage accounts, inventory, payroll, and file GST returns with confidence using the latest version of Tally.', learningOutcomes: ['Master company creation and ledger management.', 'Handle GST transactions, including invoicing and returns.', 'Manage inventory, stock, and payroll.', 'Generate financial reports like Balance Sheets and P&L Statements.'], prerequisites: ['Basic understanding of accounting principles is helpful but not mandatory.'] },
    { name: 'ADCA', price: 6000, icon: AdcaIcon, description: 'Advanced Diploma in Computer Applications, a comprehensive course for a strong IT foundation.', category: 'Career Tech', detailedDescription: 'The Advanced Diploma in Computer Applications (ADCA) is a comprehensive program covering a wide range of computer skills, from fundamentals and operating systems to office automation, database management, and basic programming.', learningOutcomes: ['Gain proficiency in operating systems like Windows.', 'Master the entire Microsoft Office suite.', 'Learn database management with MS Access.', 'Understand the fundamentals of programming and the internet.'], prerequisites: ['Basic computer operating skills.'] },
    { name: 'AI & Machine Learning', price: 2500, icon: AIIcon, description: 'Step into the future with foundational knowledge of Artificial Intelligence and its applications.', category: 'Career Tech', detailedDescription: 'Get an introduction to the revolutionary fields of Artificial Intelligence and Machine Learning. This foundational course covers key concepts, algorithms, and real-world applications to kickstart your journey in AI.', learningOutcomes: ['Understand the difference between AI, ML, and Deep Learning.', 'Learn about supervised and unsupervised learning.', 'Explore popular ML algorithms like regression and classification.', 'Grasp the potential of AI in various industries.'], prerequisites: ['Basic knowledge of mathematics (algebra, statistics).', 'An interest in technology and data.'] },
    { name: 'E-Commerce Management', price: 2000, icon: ECommerceIcon, description: 'Learn to build, manage, and scale a successful online business from scratch.', category: 'Career Tech', detailedDescription: 'Learn the A-to-Z of running a successful online store. This course covers platform selection, product listing, digital marketing, payment gateways, and order fulfillment to help you launch and grow your e-commerce venture.', learningOutcomes: ['Set up an online store on platforms like Shopify or WooCommerce.', 'Optimize product listings and photography.', 'Run effective digital marketing campaigns (SEO, SEM, Social Media).', 'Manage inventory, shipping, and customer service.'], prerequisites: ['Basic computer and internet skills.', 'An entrepreneurial spirit.'] },
];

interface CareerTechProps {
    onCourseClick: (course: Course) => void;
}

const CareerTech: React.FC<CareerTechProps> = ({ onCourseClick }) => {
    return (
        <section id="career-tech" className="py-20 bg-primary-blue text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold">Job-Ready Career Tech</h2>
                    <p className="mt-4 text-lg text-blue-200 max-w-3xl mx-auto">
                        Equipping you with practical, in-demand technical skills for immediate employment opportunities.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {techCourses.map((course, index) => (
                        <div key={index} onClick={() => onCourseClick(course)} className="bg-white text-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all hover:-translate-y-2 hover:shadow-2xl max-w-sm mx-auto cursor-pointer flex flex-col h-full">
                           <div className="flex-grow">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-primary-teal text-white rounded-full p-4">
                                        <course.icon className="h-8 w-8" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-primary-blue mb-2">{course.name}</h3>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                            </div>
                            {course.price && (
                                <div className="mt-auto pt-4 border-t border-gray-200">
                                     <p className="text-2xl font-bold text-primary-teal">₹{course.price}
                                        <span className="text-base font-medium text-gray-500"> Full Course</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerTech;