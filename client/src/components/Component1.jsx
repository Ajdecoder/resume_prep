// src/JobTable.jsx

import React from "react";

const sampleData = [
  {
    job_id: "user123rwerwerwerrwewe",
    username: "john_doe",
    resume_id: "style1",
    name: "John Doe",
    skills: { 0: "Python", 1: "JavaScript" },
    company: "TechCorp",
    date: "2024-06-27T00:00:00.000Z",
    experience: "5 years",
  },
  {
    job_id: "user456",
    username: "jane_smith",
    resume_id: "style2",
    name: "Jane Smith",
    skills: { 0: "Java", 1: "C++" },
    company: "Innovatech",
    date: "2024-05-15T00:00:00.000Z",
    experience: "3 years",
  },
];

const JobTable = () => {
  return (
    <div className="table-container p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4 font-semibold text-gray-700">Job ID</th>
            <th className="py-2 px-4 font-semibold text-gray-700">Username</th>
            <th className="py-2 px-4 font-semibold text-gray-700">Resume ID</th>
            <th className="py-2 px-4 font-semibold text-gray-700">Name</th>
            <th className="py-2 px-4 font-semibold text-gray-700">Skills</th>
            <th className="py-2 px-4 font-semibold text-gray-700">Company</th>
            <th className="py-2 px-4 font-semibold text-gray-700">Date</th>
            <th className="py-2 px-4 font-semibold text-gray-700">
              Experience
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((job, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="py-2 px-4">{job.job_id}</td>
              <td className="py-2 px-4">{job.username}</td>
              <td className="py-2 px-4">{job.resume_id}</td>
              <td className="py-2 px-4">{job.name}</td>
              <td className="py-2 px-4">
                {Object.values(job.skills).join(", ")}
              </td>
              <td className="py-2 px-4">{job.company}</td>
              <td className="py-2 px-4">
                {new Date(job.date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4">{job.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
