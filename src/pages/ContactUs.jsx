import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function SignupForm() {
  const controls = useAnimation();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstname":
        if (!value.trim()) error = "First Name is required";
        else if (!/^[A-Za-z]+$/.test(value)) error = "Only alphabets allowed";
        else if (value.length < 3) error = "At least 3 characters required";
        break;
      case "lastname":
        if (!value.trim()) error = "Last Name is required";
        else if (!/^[A-Za-z]+$/.test(value)) error = "Only alphabets allowed";
        else if (value.length < 2) error = "At least 2 characters required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value))
          error = "Enter a valid email address";
        break;
      case "phone":
        if (!value.trim()) error = "Phone Number is required";
        else if (!/^\d+$/.test(value)) error = "Only numbers allowed";
        else if (value.length !== 10) error = "Must be exactly 10 digits";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: validateField(id, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      console.log("Form submitted successfully:", formData);
      setErrors({});
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={formRef}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto p-8 sm:p-10 md:p-12 rounded-lg shadow-lg bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <h2 className="font-bold text-3xl sm:text-4xl text-gray-800 text-center my-6">
        Get In Touch With Us
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <LabelInputContainer
            label="First Name"
            id="firstname"
            placeholder="John"
            type="text"
            required
            value={formData.firstname}
            onChange={handleChange}
            error={errors.firstname}
          />
          <LabelInputContainer
            label="Last Name"
            id="lastname"
            placeholder="Doe"
            type="text"
            required
            value={formData.lastname}
            onChange={handleChange}
            error={errors.lastname}
          />
        </div>

        <LabelInputContainer
          label="Email Address"
          id="email"
          placeholder="johndoe@email.com"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <LabelInputContainer
          label="Phone Number"
          id="phone"
          placeholder="Enter your 10-digit phone number"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <LabelInputContainer
          label="Message"
          id="message"
          placeholder="Write your message here..."
          type="textarea"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-white rounded-md font-medium shadow-md hover:opacity-80 transition mx-auto block"
          type="submit"
        >
          Submit
        </button>

        <div className="my-6 h-px bg-gray-300 dark:bg-gray-700 w-full" />
      </form>
    </motion.div>
  );
}

// Reusable input component with error handling
const LabelInputContainer = ({
  label,
  id,
  placeholder,
  type,
  required,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className={`w-full p-3 border rounded-md focus:ring-2 outline-none ${
            error
              ? "border-red-500 ring-red-300"
              : "border-gray-400 focus:ring-gray-500"
          }`}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          className={`w-full p-3 border rounded-md focus:ring-2 outline-none ${
            error
              ? "border-red-500 ring-red-300"
              : "border-gray-400 focus:ring-gray-500"
          }`}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default SignupForm;
