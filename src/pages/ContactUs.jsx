import React from "react";


function SignupForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-6xl w-full mx-auto rounded-lg p-6 shadow-lg bg-white">
      <h2 className="font-bold text-xl text-gray-800">
        Welcome to Ecovision
      </h2>
      <p className="text-gray-600 text-sm mt-2 ">
        Register now to access exclusive features.
      </p>

      <form className="my-6" onSubmit={handleSubmit} >
        
          <LabelInputContainer label="First Name" id="firstname" placeholder="John" type="text" />
          <LabelInputContainer label="Last Name" id="lastname" placeholder="Doe" type="text" />
      

        <LabelInputContainer label="Email Address" id="email" placeholder="johndoe@email.com" type="email" className="mb-4" />
        <LabelInputContainer label="Password" id="password" placeholder="••••••••" type="password" className="mb-4" />
        <LabelInputContainer label="Confirm Password" id="confirmpassword" placeholder="••••••••" type="password" className="mb-6" />

        <button
          className=" w-[10vw] bg-gradient-to-br from-gray-800 to-gray-600 text-white rounded-md h-10 font-medium shadow-md hover:opacity-80 transition relative left-[17vw] py-6"
          type="submit"
        >
          Submit
        </button>

        <div className="my-6 h-px bg-gray-300 dark:bg-gray-700 w-full" />

        {/* <div className="flex flex-col gap-3">
          <SocialButton icon={<FaGithub />} text="Sign up with GitHub" />
          <SocialButton icon={<FaGoogle />} text="Sign up with Google" />
          <SocialButton icon={<FaUser />} text="Sign up as Guest" />
        </div> */}
      </form>
    </div>
  );
}

const LabelInputContainer = ({ label, id, placeholder, type, className }) => {
  return (
    <div className={`flex flex-col space-y-1 w-full ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold   text-gray-700">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        className="w-full p-2 border border-black rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
        required
      />
    </div>
  );
};

const SocialButton = ({ icon, text }) => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 w-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
      {icon}
      <span className="text-sm">{text}</span>
    </button>
  );
};

export default SignupForm;
