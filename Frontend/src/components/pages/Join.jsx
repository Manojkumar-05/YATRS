import React, { useState, useEffect } from "react";

const Join = () => {
  const [formType, setFormType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000); // Fade out after 10 seconds

      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phone);
  };

  const validateForm = () => {
    const { name, email, phone, resume, coverLetter } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      (formType === "jobs" && !resume) ||
      (formType === "internships" && !coverLetter)
    ) {
      setErrorMessage("All fields are required.");
      return false;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (!validatePhone(phone)) {
      setErrorMessage("Please enter a valid phone number.");
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("formType", formType);
    if (formType === "jobs" && formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }
    if (formType === "internships") {
      formDataToSend.append("coverLetter", formData.coverLetter);
    }

    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccessMessage("Application submitted successfully!");
        setErrorMessage("");
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: null,
          coverLetter: "",
        });
      } else {
        setErrorMessage("Failed to submit the application. Please try again.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        {formType === "" && (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Join Us</h1>
            <p className="text-gray-600 mb-8">
              Explore exciting opportunities to work and grow with us. Choose
              one of the options below to get started.
            </p>
          </div>
        )}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <button
            onClick={() => setFormType("jobs")}
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-[#460073] transition duration-300"
          >
            Apply for Jobs
          </button>
          <button
            onClick={() => setFormType("internships")}
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-[#460073] transition duration-300"
          >
            Apply for Internships
          </button>
        </div>

        {formType && (
          <form onSubmit={handleFormSubmit} className="text-left">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            {formType === "jobs" && (
              <div className="mb-4">
                <label className="block text-gray-700">Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
            )}
            {formType === "internships" && (
              <div className="mb-4">
                <label className="block text-gray-700">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                ></textarea>
              </div>
            )}
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded hover:bg-[#460073] transition duration-300"
            >
              Submit Application
            </button>
          </form>
        )}
        {successMessage && (
          <p className="text-green-600 mt-4">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Join;
