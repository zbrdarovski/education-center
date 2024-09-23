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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-blue-600">{member.role}</p>
            <p className="mt-2 text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
