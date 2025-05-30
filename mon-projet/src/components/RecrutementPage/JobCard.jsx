import React from "react";
import { FaMapMarkerAlt, FaRegFileAlt } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../../styles/RecrutementPage/JobCard.css"; // Assurez-vous que le chemin est correct

const JobCard = ({ title, location, contractType, jobId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recrutement/${jobId}`);
  };

  return (
    <div className="job-card" onClick={handleClick}>
      <div className="job-details">
        <div className="info-section">
          <h2>{title}</h2>
          <div className="job-info">
            <div className="location-contract">
              <FaMapMarkerAlt className="icon" />
              <span>{location}</span>
            </div>
            <div className="contract">
              <FaRegFileAlt className="icon" />
              <span>{contractType}</span>
            </div>
          </div>
        </div>
        <IoArrowForwardSharp className="arrow-icon" />
      </div>
    </div>
  );
};

export default JobCard;
