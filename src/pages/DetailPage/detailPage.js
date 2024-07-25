import React from "react";
import { useParams } from "react-router-dom";
import { teams } from "../../utils/data";
import "./detailPage.css";


const DetailPage = () => {
  const { teamId } = useParams();
  const team = teams.find((t) => t.id === parseInt(teamId, 10));

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="team-detail-container">
      <div>
        <img src={team.logo} alt="team logo" className="team-logo" />
      </div>
      <div className="team-name">{team.name}</div>
      <div className="team-description">{team.description}</div>
      <div className="team-projects">
        {team.projects.map((project, index) => (
          <div key={index} className="team-project">
            {project}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
