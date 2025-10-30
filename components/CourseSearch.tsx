import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

// Icons for display
import {
    MathIcon, ChemistryIcon, BiologyIcon, PhysicsIcon, ScienceIcon, SocialScienceIcon, EnglishIcon, HindiIcon,
    ExcelIcon, TallyIcon, AdcaIcon, AIIcon, ECommerceIcon
} from './icons';

// Define course data
const allCourses = [
    // Academics
    { name: 'Mathematics', category: 'Academic', icon: MathIcon },
    { name: 'Chemistry', category: 'Academic', icon: ChemistryIcon },
    { name: 'Biology', category: 'Academic', icon: BiologyIcon },
    { name: 'Physics', category: 'Academic', icon: PhysicsIcon },
    { name: 'General Science', category: 'Academic', icon: ScienceIcon },
    { name: 'Social Science', category: 'Academic', icon: SocialScienceIcon },
    { name: 'English', category: 'Academic', icon: EnglishIcon },
    { name: 'Hindi', category: 'Academic', icon: HindiIcon },
    // Tech
    { name: 'Advanced Excel', category: 'Career Tech', icon: ExcelIcon },
    { name: 'Tally Prime with GST', category: 'Career Tech', icon: TallyIcon },
    { name: 'ADCA', category: 'Career Tech', icon: AdcaIcon },
    { name: 'AI & Machine Learning', category: 'Career Tech', icon: AIIcon },
    { name: 'E-Commerce Management', category: 'Career Tech', icon: ECommerceIcon },
];

const CourseSearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<typeof allCourses>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

    const handleSearch = async () => {
        if (!query.trim()) {
            setResults([]);
            setSearched(false);
            return;
        }

        setIsLoading(true);
        setError(null);
        setSearched(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

            const courseList = allCourses.map(c => c.name).join(', ');
            const prompt = `From the following list of courses: [${courseList}], which ones are most relevant to the query "${query}"? Please respond with only a comma-separated list of the course names that are relevant. For example: "Mathematics, Advanced Excel". If none are relevant, respond with "None".`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            const textResponse = response.text.trim();
            
            if (textResponse.toLowerCase() === 'none' || textResponse === '') {
                setResults([]);
            } else {
                const relevantCourseNames = textResponse.split(',').map(name => name.trim());
                const filteredCourses = allCourses.filter(course => relevantCourseNames.includes(course.name));
                setResults(filteredCourses);
            }

        } catch (e: any) {
            setError('Sorry, something went wrong with the search. Please try again.');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };


    return (
        <section id="search" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary-blue">Find Your Perfect Course</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Use our AI-powered search to discover courses tailored to your interests and career goals.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-lg p-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="e.g., 'courses for business' or 'math for class 10'"
                        className="w-full bg-transparent p-4 border-none focus:outline-none text-gray-700"
                        disabled={isLoading}
                    />
                    {isLoading ? (
                        <div className="px-8 py-4 flex items-center justify-center" aria-label="Searching for courses...">
                             <svg className="animate-spin h-6 w-6 text-primary-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                    ) : (
                        <button
                            onClick={handleSearch}
                            className="bg-primary-teal text-white rounded-full px-8 py-4 font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center"
                        >
                            Search
                        </button>
                    )}
                </div>
                
                <div className="mt-12 min-h-[150px]">
                    {error && <p className="text-center text-red-500">{error}</p>}
                    
                    {searched && !isLoading && !error && results.length === 0 && (
                        <p className="text-center text-gray-500">No matching courses found for your query.</p>
                    )}

                    {results.length > 0 && (
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {results.map((course) => (
                                <div key={course.name} className="bg-white rounded-xl shadow-md p-6 text-center transform transition-all hover:scale-105 animate-fade-in-up">
                                    <div className="flex justify-center mb-4">
                                        <div className="bg-primary-blue text-white rounded-full p-3">
                                            <course.icon className="h-7 w-7" />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">{course.name}</h3>
                                    <p className="text-sm text-primary-teal font-semibold">{course.category}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <style>{`
                @keyframes fade-in-up {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
                }
                .animate-fade-in-up {
                animation: fade-in-up 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default CourseSearch;