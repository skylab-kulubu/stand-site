import React from 'react';
import { teams } from '../../utils/data';
import './teamComp.css';
import { Link } from 'react-router-dom';

const TeamComp = () => {
  return (
    <div className="team-comp-container">
      {teams.map((team) => (
        <div key={team.id} className={`team-comp ${team.id % 2 === 0 ? 'left' : 'right'}`}>
          <div className="team-comp-left">
            <Link to={`/${team.id}`}>
              <img src={team.logo} alt="team logo" className="team-logo" />
            </Link>
            
            <Link to={`/${team.id}`}>
              <div className="team-name">{team.name}</div>
            </Link>
            
            <Link to={`/${team.id}`}>
              <div className='team-description'>{team.descshort} </div>
            </Link>
          </div>
          <div className="team-comp-right">
            {/*<div className="team-projects">
              {team.projects.map((project, idx) => (
                <div key={idx} className="team-project">
                  {project}
                </div>
              ))
            </div>*/}
            <div className='team-button'> 
              <Link to={`/${team.id}`}> Detayları Gör </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamComp;
