"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';

const JoinAlterYouthRevolution = () => {
    const [scholarshipNumber, setScholarshipNumber] = useState(1);
    const [scholarshipValue, setScholarshipValue] = useState(1650);
    const [showAlert, setShowAlert] = useState(false); // State for alert visibility

    const handleIncrease = () => {
        if (scholarshipNumber < 3) {
            const newNumber = scholarshipNumber + 1;
            setScholarshipNumber(newNumber);
            setScholarshipValue(newNumber * 1650);
        } else {
            setShowAlert(true); // Show alert if over 3
            setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
        }
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePhoneChange = (phone) => {
        setFormData((prevData) => ({
            ...prevData,
            phone: phone, // This includes the country code
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    return (
        <div className="w-[350px] bg-white p-4 shadow-lg rounded-lg">
            <form className="bg-white" onSubmit={handleSubmit}>
                <h6 className="mb-3 text-[1.3rem]">
                    <strong>Join the</strong>
                    <strong className="text-[#1dc468]"> #alteryouthrevolution</strong>
                </h6>
                <div className="mb-4" style={{ gap: "12px" }}>
                    <input
                        name="name"
                        className="mb-4 h-[50px] border border-gray-300 focus:border-[#1dc468] focus:outline-none px-[1rem] w-full rounded-[12px]"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        name="email"
                        className="mb-4 h-[50px] border border-gray-300 focus:border-[#1dc468] focus:outline-none px-[1rem] w-full rounded-[12px]"
                        placeholder="Your email"
                        autoCapitalize="none"
                        autoComplete="none"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <PhoneInput
                        country={'bd'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputStyle={{
                            width: '100%',
                            height: '50px',
                            borderRadius: '12px',
                            paddingLeft: '3rem',
                        }}
                        buttonStyle={
                            {
                                height: '50px',
                                borderTopLeftRadius: '12px',
                                borderBottomLeftRadius: '12px',
                                borderRight: 'none',
                                background: '#ffff',
                                paddingLeft: '10px'
                            }
                        }
                        containerClass="phone-input-container"
                        inputClass="phone-input"
                        buttonClass="phone-button"
                        placeholder="Your Number"
                        disableDropdown={false}
                    />
                </div>
                <div>
                    <p className="mb-2">
                        <strong>Number of Scholarships</strong>
                    </p>
                    <div className="mb-4 flex justify-between">
                        <div className="bg-gray-100 rounded-lg flex items-center justify-center">
                            <span
                                className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer"
                                style={{ backgroundColor: "rgb(181, 181, 181)" }}
                                onClick={() => {
                                    const newNumber = Math.max(1, scholarshipNumber - 1);
                                    setScholarshipNumber(newNumber);
                                    setScholarshipValue(newNumber * 1650);
                                }}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    height="15"
                                    width="15"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="#ffffff"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </span>
                            <input
                                className="w-10 h-10 bg-transparent border-none outline-none text-center font-semibold text-sm"
                                type="text"
                                readOnly
                                value={scholarshipNumber}
                            />
                            <span
                                className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer"
                                style={{ backgroundColor: "rgb(29, 196, 104)" }}
                                onClick={handleIncrease}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    height="15"
                                    width="15"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="#ffffff"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </span>
                        </div>
                        <div className="flex items-end">
                            <span className="text-xl leading-none font-bold select-none">
                                BDT {scholarshipNumber * 1650}
                                <span className="text-[14px] leading-none select-none">/month</span>
                            </span>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="select-none mt-3 w-full bg-green-500 text-white py-4 rounded-lg font-bold"
                >
                    START NOW
                </button>
            </form>

            {showAlert && (
                <div className="warning-alert select-none rounded-md max-w-80 font-semibold flex items-center">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-orange-500">
                            <path d="M12 2L1 21h22L12 2zm0 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-8a1 1 0 01-1-1V7a1 1 0 112 0v3a1 1 0 01-1 1z" fill="orange" />
                            {/* Exclamation mark part */}
                            <circle cx="12" cy="15" r="1.5" fill="black" />
                            <rect x="11.5" y="6" width="1" height="6" fill="black" />
                        </svg>
                        <p> Scholarship limit reached for current scholarship session</p>
                </div>
            )}
        </div>
    );
};

export default JoinAlterYouthRevolution;