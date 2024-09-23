import React from 'react';

// Example team data
const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    bio: 'Alice has over 10 years of experience in education and management.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bob Smith',
    role: 'Lead Instructor',
    bio: 'Bob specializes in computer science and interactive teaching methods.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Carol Lee',
    role: 'Curriculum Developer',
    bio: 'Carol designs comprehensive curricula tailored to diverse learning needs.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more team members as needed
];

function Team() {
  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-lg shadow-md p-6 text-left">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
