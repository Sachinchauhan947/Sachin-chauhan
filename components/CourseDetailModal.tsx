import React, { useEffect } from 'react';
import { Course } from '../types';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
  onEnrollRequest: (course: Course) => void;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, onEnrollRequest }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleEnrollClick = () => {
    onEnrollRequest(course);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-2xl m-4 transform transition-all animate-fade-in-up max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
             <div className="bg-primary-blue text-white rounded-full p-3 flex-shrink-0">
                <course.icon className="h-8 w-8" />
             </div>
             <div>
                <h2 className="text-3xl font-bold text-primary-blue">{course.name}</h2>
                <p className="text-gray-500 font-medium">{course.teacher ? `by ${course.teacher}` : course.category}</p>
             </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">About this Course</h3>
                <p className="text-gray-600">{course.detailedDescription}</p>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What You'll Learn</h3>
                <ul className="space-y-2">
                    {course.learningOutcomes.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            <span className="text-gray-600">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Prerequisites</h3>
                <ul className="space-y-2">
                    {course.prerequisites.map((item, index) => (
                        <li key={index} className="flex items-start">
                           <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            <span className="text-gray-600">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Footer with Price and Enroll Button */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            {course.price && (
                <div className="text-center sm:text-left">
                     <p className="text-3xl font-bold text-primary-teal">
                        ₹{course.price}
                        <span className="text-lg font-medium text-gray-600">
                            {course.category === 'Career Tech' ? ' Full Course' : ' / month'}
                        </span>
                    </p>
                </div>
            )}
            <button
                onClick={handleEnrollClick}
                className="w-full sm:w-auto bg-primary-teal text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all transform hover:scale-105 text-lg"
            >
                Enroll Now
            </button>
        </div>

      </div>
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CourseDetailModal;