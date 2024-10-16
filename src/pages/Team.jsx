import React from 'react';

// Example team data
const teamMembers = [
  {
    name: 'Име инструктора',
    area: 'Подручје инструктора',
    bio: 'Биографија инструктора',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Име инструктора',
    area: 'Подручје инструктора',
    bio: 'Биографија инструктора',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Име инструктора',
    area: 'Подручје инструктора',
    bio: 'Биографија инструктора',
    image: 'https://via.placeholder.com/150',
  },
  
  // Add more team members as needed
];

function Instructors() {
  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Инструктори</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-lg shadow-md p-6 text-left">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p>{member.area}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instructors;
