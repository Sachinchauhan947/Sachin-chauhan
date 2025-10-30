import React from 'react';
import { MathIcon, ChemistryIcon, BiologyIcon, PhysicsIcon, ScienceIcon, SocialScienceIcon, EnglishIcon, HindiIcon } from './icons';
import { Course } from '../types';

const seniorCourses: Course[] = [
    { name: 'Physics', icon: PhysicsIcon, teacher: 'Arpan Singh', price: 300, description: 'Covers core concepts like Mechanics, Electromagnetism, and Modern Physics, preparing for board exams and competitive tests.', category: 'Senior Division (11-12th)', detailedDescription: 'Dive deep into the fundamental principles of the universe. Our Physics curriculum is designed to build a strong analytical mindset, covering everything from classical mechanics to the complexities of quantum physics and relativity.', learningOutcomes: ['Master Newtonian mechanics and laws of motion.', 'Understand the principles of electricity and magnetism.', 'Explore concepts of thermodynamics and optics.', 'Prepare for JEE/NEET level problem-solving.'], prerequisites: ['Basic understanding of Class 10th science and mathematics.', 'A curious and analytical mind.'] },
    { name: 'Chemistry', icon: ChemistryIcon, teacher: 'Salash', price: 300, description: 'In-depth study of Physical, Organic, and Inorganic Chemistry, focusing on reactions, structures, and principles.', category: 'Senior Division (11-12th)', detailedDescription: 'Explore the world of atoms, molecules, and chemical reactions. This course provides a comprehensive understanding of physical, organic, and inorganic chemistry, essential for medical and engineering entrance exams.', learningOutcomes: ['Understand atomic structure, bonding, and periodicity.', 'Master chemical kinetics and equilibrium.', 'Learn nomenclature and reaction mechanisms in organic chemistry.', 'Gain proficiency in stoichiometry and thermodynamics.'], prerequisites: ['Completion of Class 10th science.', 'Strong problem-solving skills.'] },
    { name: 'Mathematics', icon: MathIcon, teacher: 'Arpan Singh', price: 300, description: 'Focuses on advanced topics including Calculus, Algebra, and Trigonometry for a strong competitive edge.', category: 'Senior Division (11-12th)', detailedDescription: 'Build a rock-solid foundation in advanced mathematics. Our course covers calculus, algebra, coordinate geometry, and trigonometry with a focus on conceptual clarity and application-based problem-solving.', learningOutcomes: ['Solve complex problems in calculus (limits, derivatives, integration).', 'Master matrices, determinants, and vector algebra.', 'Understand concepts of probability and statistics.', 'Develop logical reasoning and analytical skills.'], prerequisites: ['Proficiency in Class 10th mathematics.', 'Regular practice and dedication.'] },
    { name: 'Biology', icon: BiologyIcon, teacher: 'Vikram Singh', price: 300, description: 'Detailed exploration of Botany and Zoology, covering genetics, evolution, and human physiology.', category: 'Senior Division (11-12th)', detailedDescription: 'Embark on a journey through the science of life. This course offers a detailed study of botany and zoology, covering everything from cellular biology and genetics to human physiology and ecology.', learningOutcomes: ['Understand cell structure, function, and division.', 'Explore principles of genetics and evolution.', 'Learn about the anatomy and physiology of plants and humans.', 'Gain knowledge of ecosystems and biodiversity.'], prerequisites: ['Interest in life sciences.', 'Completion of Class 10th science curriculum.'] },
];

const juniorCourses: Course[] = [
    { name: 'Mathematics', icon: MathIcon, teacher: 'Expert Faculty', price: 250, description: 'Builds a strong foundation in Algebra, Geometry, and Statistics as per the NCERT curriculum.', category: 'Junior Division (9-10th)', detailedDescription: 'This course solidifies foundational mathematical concepts as per the NCERT syllabus, preparing students for higher-level studies. We focus on building problem-solving speed and accuracy.', learningOutcomes: ['Strengthen understanding of number systems and algebra.', 'Master concepts of geometry and mensuration.', 'Learn introductory trigonometry and statistics.', 'Build a strong base for Class 11th.'], prerequisites: ['Basic arithmetic skills.', 'Willingness to learn and practice.'] },
    { name: 'English', icon: EnglishIcon, teacher: 'Expert Faculty', price: 250, description: 'Enhances grammar, literature comprehension, and writing skills to excel in exams.', category: 'Junior Division (9-10th)', detailedDescription: 'Develop comprehensive language skills with our English course. It focuses on grammar, vocabulary, reading comprehension, and creative writing to ensure students can communicate effectively and excel in exams.', learningOutcomes: ['Improve grammatical accuracy and sentence structure.', 'Enhance vocabulary and reading speed.', 'Develop critical analysis of literature.', 'Practice effective essay and letter writing.'], prerequisites: ['Basic reading and writing ability in English.'] },
    { name: 'Hindi', icon: HindiIcon, teacher: 'Expert Faculty', price: 250, description: 'Develops proficiency in Hindi grammar (Vyakaran) and literature (Sahitya).', category: 'Junior Division (9-10th)', detailedDescription: 'This course aims to develop a deep appreciation and command over the Hindi language, focusing on both Vyakaran (grammar) and Sahitya (literature) as prescribed by the UP Board and NCERT.', learningOutcomes: ['Master Hindi grammar rules and syntax.', 'Understand and analyze prose and poetry.', 'Improve writing skills for essays and compositions.', 'Enhance conversational fluency.'], prerequisites: ['Basic proficiency in reading and writing Hindi.'] },
    { name: 'Social Science', icon: SocialScienceIcon, teacher: 'Expert Faculty', price: 250, description: 'Covers History, Geography, Civics, and Economics from the UP Board & NCERT syllabus.', category: 'Junior Division (9-10th)', detailedDescription: 'Gain a holistic understanding of the world through the study of History, Geography, Civics, and Economics. The curriculum is aligned with the UP Board & NCERT syllabus to foster critical thinking.', learningOutcomes: ['Understand key historical events and their impact.', 'Learn about geographical features and climate.', 'Grasp the functioning of democratic institutions.', 'Understand basic economic concepts.'], prerequisites: ['Curiosity about the world and society.'] },
    { name: 'Science', icon: ScienceIcon, teacher: 'Expert Faculty', price: 250, description: 'Integrated study of Physics, Chemistry, and Biology to build a solid scientific aptitude.', category: 'Junior Division (9-10th)', detailedDescription: 'An integrated approach to Physics, Chemistry, and Biology that makes science intuitive and exciting. The course focuses on hands-on concepts and building a scientific temperament.', learningOutcomes: ['Understand fundamental laws of motion, light, and electricity.', 'Learn about chemical reactions, acids, bases, and metals.', 'Explore life processes, reproduction, and heredity.', 'Develop a strong foundation for senior secondary science.'], prerequisites: ['Inquisitive nature.', 'Basic concepts from previous classes.'] },
];

interface AcademicExcellenceProps {
    onCourseClick: (course: Course) => void;
}

const AcademicExcellence: React.FC<AcademicExcellenceProps> = ({ onCourseClick }) => {
    return (
        <section id="academics" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-primary-blue">Academic Excellence</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Tailored coaching for different academic levels, ensuring a strong conceptual foundation.
                    </p>
                </div>

                {/* Senior Division */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Senior Division (Class 11th - 12th)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {seniorCourses.map((course, index) => (
                            <div key={index} onClick={() => onCourseClick(course)} className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col text-center transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-primary-blue text-white rounded-full p-4">
                                        <course.icon className="h-8 w-8" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-800">{course.name}</h4>
                                <p className="text-gray-500 mb-2">by {course.teacher}</p>
                                <p className="text-gray-600 text-sm flex-grow mb-4">{course.description}</p>
                                <div className="mt-auto pt-4 border-t border-gray-200">
                                    <p className="text-2xl font-bold text-primary-teal">₹{course.price}<span className="text-base font-medium text-gray-500"> / month</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Junior Division */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Junior Division (Class 9th - 10th)</h3>
                     <p className="text-center text-gray-500 -mt-6 mb-8">(Based on UP Board & NCERT Syllabus)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {juniorCourses.map((course, index) => (
                             <div key={index} onClick={() => onCourseClick(course)} className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col text-center transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-primary-blue text-white rounded-full p-4">
                                        <course.icon className="h-8 w-8" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-800">{course.name}</h4>
                                <p className="text-gray-500 mb-2">by {course.teacher}</p>
                                <p className="text-gray-600 text-sm flex-grow mb-4">{course.description}</p>
                                <div className="mt-auto pt-4 border-t border-gray-200">
                                    <p className="text-2xl font-bold text-primary-teal">₹{course.price}<span className="text-base font-medium text-gray-500"> / month</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicExcellence;
