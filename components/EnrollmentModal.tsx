import React, { useState, useEffect } from 'react';
import { Course } from '../types';
import { UpiIcon, PaytmIcon, GooglePayIcon } from './icons';

interface EnrollmentModalProps {
  course: Course | null;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ course, onClose }) => {
  const [step, setStep] = useState('details'); // 'details' or 'payment'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { name: '', phone: '', email: ''};

    if (!formData.name) {
      formIsValid = false;
      newErrors.name = 'Student name is required.';
    }
    if (!formData.phone) {
      formIsValid = false;
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formIsValid = false;
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.email) {
      formIsValid = false;
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formIsValid = false;
        newErrors.email = 'Please enter a valid email address.';
    }
    
    setErrors(newErrors);
    return formIsValid;
  };


  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('payment');
    }
  };
  
  const renderDetailsStep = () => (
    <form onSubmit={handleProceedToPayment} noValidate>
      <div className="space-y-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Student Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary-teal focus:border-primary-teal`} required />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary-teal focus:border-primary-teal`} required />
            {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
        </div>
         <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary-teal focus:border-primary-teal`} required />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address (Optional)</label>
            <textarea name="address" id="address" value={formData.address} onChange={handleChange} rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-teal focus:border-primary-teal"></textarea>
        </div>
      </div>
      <div className="mt-8 text-right">
        <button type="submit" className="w-full sm:w-auto bg-primary-teal text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all transform hover:scale-105 text-lg">
          Proceed to Payment
        </button>
      </div>
    </form>
  );
  
  const renderPaymentStep = () => (
    <div>
      <div className="text-center bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800">Complete Your Payment</h3>
        {course && (
             <p className="text-gray-600 mt-2">
                You are enrolling in <span className="font-semibold text-primary-blue">{course.name}</span>
            </p>
        )}
        {course?.price && (
             <p className="text-4xl font-extrabold text-primary-teal mt-4">
                ₹{course.price}
                <span className="text-lg font-medium text-gray-600">
                    {course.category === 'Career Tech' ? ' Full Course' : ' / month'}
                </span>
             </p>
        )}
      </div>

      <div className="mt-8">
        <p className="text-center text-gray-600 font-semibold mb-4">Pay using any of the following methods:</p>
        <div className="flex justify-center items-center gap-8 my-6">
            <div className="text-center">
                <UpiIcon className="h-12 w-12 mx-auto text-gray-700" />
                <p className="mt-2 text-sm font-medium">UPI</p>
            </div>
             <div className="text-center">
                <PaytmIcon className="h-12 w-12 mx-auto" />
                 <p className="mt-2 text-sm font-medium">Paytm</p>
            </div>
             <div className="text-center">
                <GooglePayIcon className="h-12 w-12 mx-auto" />
                 <p className="mt-2 text-sm font-medium">Google Pay</p>
            </div>
        </div>
        <div className="text-center mt-6 bg-gray-50 p-4 rounded-md">
            <p className="text-gray-700">Send payment to the UPI ID:</p>
            <p className="text-lg font-mono font-bold text-primary-blue tracking-wider bg-gray-200 py-2 px-4 rounded-md inline-block mt-2">
                climexacademy@upi
            </p>
             <p className="text-xs text-gray-500 mt-4">After payment, please share the screenshot via contact details provided.</p>
        </div>
      </div>

       <div className="mt-8 text-right">
          <button onClick={onClose} className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
            Close
          </button>
        </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-lg m-4 transform transition-all animate-fade-in-up max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-primary-blue">
                {step === 'details' ? 'Enrollment Form' : 'Payment Details'}
            </h2>
            <p className="text-gray-500">
                {step === 'details' ? 'Please fill in your details to proceed.' : 'Complete the final step.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {step === 'details' ? renderDetailsStep() : renderPaymentStep()}

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

export default EnrollmentModal;
