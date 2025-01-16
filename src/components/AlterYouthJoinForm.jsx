"use client";

import { useState } from "react";

const JoinAlterYouthRevolution = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "BD", // Default country (Bangladesh)
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        // Add submission logic here
    };

    return (
        <div className="ay-rounded w-[350px] bg-white p-3 shadow-lg">
            <form className="bg-white" onSubmit={handleSubmit}>
                <h6 className="mb-3 text-[1.3rem]">
                    <strong>Join the</strong>
                    <strong className="text-green"> #alteryouthrevolution</strong>
                </h6>
                <div className="mb-3 d-grid mb-xl-4" style={{ gap: "12px" }}>
                    <input
                        name="name"
                        className="ay-input mb-1 h-[50px] border border-gray px-[1rem] w-full rounded-[12px]"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        name="email"
                        className="ay-input mb-1 h-[50px] border border-gray px-[1rem] w-full rounded-[12px]"
                        placeholder="Your email"
                        autoCapitalize="none"
                        autoComplete="none"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <div className="flex border px-[1rem] transition-colors duration-300 rounded-[12px] border-gray">
                        <select
                            name="country"
                            className="PhoneInputCountrySelect"
                            value={formData.country}
                            onChange={handleInputChange}
                        >
                            <option value="BD">Bangladesh +880</option>
                            <option value="US">United States +1</option>
                            <option value="IN">India +91</option>
                            <option value="UK">United Kingdom +44</option>
                            {/* Add other countries as needed */}
                        </select>
                        <input
                            name="phone"
                            className="w-full border-none outline-none"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div>
                    <p className="mb-2">
                        <strong>Number of Scholarships</strong>
                    </p>
                    <div className="mb-4 flex justify-between">
                        <div className="flex bg-gray-100 rounded-lg">
                            <span className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgb(181, 181, 181)' }}>
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
                                className="min-h-full min-w-[43px]"
                                type="number"
                                readOnly
                                value="1"
                            />
                            <span className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgb(29, 196, 104)' }}>
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
                            <span className="w-fit text-[clamp(14px,_5vw,_22px)] leading-none font-bold">
                                BDT 1,650
                                <span className="text-[14px] leading-none">/month</span>
                            </span>
                        </div>
                    </div>
                </div>
                <button type="submit" className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default JoinAlterYouthRevolution;