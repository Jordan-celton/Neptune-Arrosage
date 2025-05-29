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
    <div
      className="job-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div>
        <h2>{title}</h2>
        <div className="location">
          <FaMapMarkerAlt className="icon" />
          <span>{location}</span>
        </div>
        <div className="contract">
          <FaRegFileAlt className="icon" />
          <span>{contractType}</span>
        </div>
      </div>
      <IoArrowForwardSharp className="arrow-icon" />
    </div>
  );
};

export default JobCard;
