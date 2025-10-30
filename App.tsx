import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SuccessMetrics from './components/SuccessMetrics';
import AcademicExcellence from './components/AcademicExcellence';
import CareerTech from './components/CareerTech';
import FoundersMessage from './components/FoundersMessage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CourseSearch from './components/CourseSearch';
import Modal from './components/Modal';
import CourseDetailModal from './components/CourseDetailModal';
import EnrollmentModal from './components/EnrollmentModal';
import { Course } from './types';
import Chatbot from './components/Chatbot';

function App() {
  const [activeModal, setActiveModal] = useState<'none' | 'info' | 'details' | 'enrollment'>('none');
  const [modalInfo, setModalInfo] = useState({ title: '', message: '' });
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [courseForEnrollment, setCourseForEnrollment] = useState<Course | null>(null);

  const handleOpenInfoModal = (title: string, message: string) => {
    setModalInfo({ title, message });
    setActiveModal('info');
  };

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setActiveModal('details');
  };
  
  const handleEnrollRequest = (course?: Course) => {
    setCourseForEnrollment(course || null);
    setActiveModal('enrollment');
  };

  const closeModal = () => {
    setActiveModal('none');
    setSelectedCourse(null);
    setCourseForEnrollment(null);
  };

  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero onEnrollRequest={() => handleEnrollRequest()} />
        <SuccessMetrics />
        <AcademicExcellence onCourseClick={handleCourseClick} />
        <CareerTech onCourseClick={handleCourseClick} />
        <CourseSearch />
        <FoundersMessage />
        <Contact />
      </main>
      <Footer />
      
      {activeModal === 'info' && (
        <Modal
          title={modalInfo.title}
          message={modalInfo.message}
          onClose={closeModal}
        />
      )}

      {activeModal === 'details' && selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={closeModal}
          onEnrollRequest={handleEnrollRequest}
        />
      )}

      {activeModal === 'enrollment' && (
        <EnrollmentModal
          course={courseForEnrollment}
          onClose={closeModal}
        />
      )}
      <Chatbot />
    </div>
  );
}

export default App;