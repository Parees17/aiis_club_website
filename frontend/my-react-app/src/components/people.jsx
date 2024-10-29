import React from 'react';
import './people.css';
import { Navigation } from "./navigation";

const membersData = [

  {
    id: 1,
    name: "Parees Pradhan",
    email: "pradh086@umn.edu",
    memberType: "Member",
    major: "Computer Science",
    schoolYear: "Sophomore",
    linkedin: "https://linkedin.com/in/lowellmonis"
  },
  {
    id: 2,
    name: "Darsh Garg",
    email: "garg088@umn.edu",
    memberType: "Member",
    major: "Computer Science",
    schoolYear: "Sophmore",
    linkedin: "https://www.linkedin.com/in/darshgarg13579/"
  },
  {
    id: 3,
    name: "Danny Kaddoura",
    email: "kaddo005@umn.edu",
    memberType: "Member",
    major: "Electrical Engineering",
    schoolYear: "Sophmore",
    linkedin: "https://www.linkedin.com/in/danny-kaddoura/"
  },
  {
    id: 4,
    name: "Sash Anand",
    email: "anand179@umn.edu",
    memberType: "Member",
    major: "Finance",
    schoolYear: "Sophmore",
    linkedin: "https://www.linkedin.com/in/sash-anand/"
  },
  {
    id: 5,
    name: "Srithan Seetnesamy",
    email: "seeta011@umn.edu",
    memberType: "Member",
    major: "Computer Science",
    schoolYear: "Sophmore",
    linkedin: "https://www.linkedin.com/in/srithan-seetamsetty/"
  },
  {
    id: 6,
    name: "Sara Noordin",
    email: "noord015@umn.edu",
    memberType: "Member",
    major: "Computer Science",
    schoolYear: "Sophmore",
    linkedin: "https://linkedin.com/in/apurva0510"
  },
  {
    id: 7,
    name: "Sungmin Baik",
    email: "baik0025@umn.edu",
    memberType: "Member",
    major: "Computer Science",
    schoolYear: "Sophmore",
    linkedin: "https://linkedin.com/in/apurva0510"
  },
  {
    id: 8,
    name: "John-Kotaro Ichiki Welches",
    email: "welch528@umn.edu",
    memberType: "Member",
    major: "Computer Science",
    schoolYear: "Sophmore",
    linkedin: "https://www.linkedin.com/in/john-welches-10b6a1274/"
  },
  {
    id: 9,
    name: "Aarav Paul",
    email: "paul1473@umn.edu",
    memberType: "Member",
    major: "Computer Science",
    schoolYear: "Sophmore",
    linkedin: "https://www.linkedin.com/in/aarav-paul-b04482215/"
  },
  // Add more member data here...
];

export const People = () => {
  return (
    <div className="members-container">
      <Navigation />
      
      <div className="table-wrapper">

      <table className="members-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mem. Type</th>
            <th>Major</th>
            <th>School Year</th>
            <th>LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          {membersData.map(member => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.memberType}</td>
              <td>{member.major}</td>
              <td>{member.schoolYear}</td>
              <td>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="prev-button">Previous</button>
        <span>Page 1 of 1</span>
        <button className="next-button">Next</button>
      </div>
      </div>

    </div>
  );
};

