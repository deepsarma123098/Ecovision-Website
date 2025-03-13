import React, {useState} from 'react'

const ProfileCard = ({ name, title, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{title}</p>
        {expanded && <p className="text-gray-700 mt-4">Detailed bio information...</p>}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard
