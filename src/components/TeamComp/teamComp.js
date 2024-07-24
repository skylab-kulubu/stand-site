// teamComp.js
import React from 'react';
import { teams } from '../../data';
import './teamComp.css';

const TeamComp = () => {
  return (
    <div className="team-comp-container">
      {teams.map((team, index) => (
        <div key={index} className={`team-comp ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="team-comp-left">
            <img src={team.logo} alt="team logo" className="team-logo" />
            <div className="team-name">{team.name}</div>
            <div className="team-description">{team.description}</div>
          </div>
          <div className="team-comp-right">
            <div className="team-projects">
              {team.projects.map((project, idx) => (
                <div key={idx} className="team-project">
                  {project}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamComp;
