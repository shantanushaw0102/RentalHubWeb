import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function TeamCards(props) {
  return (
    <div className="term">
      <dt>
        <img className="team-img circle" src={props.img} alt="" />
        <div className="name-role">
          <ul>
            <li>{props.name}</li>
            <li>{props.role}</li>
          </ul>
        </div>
      </dt>
      <p>{props.about}</p>
      <div className="team-icon">
        <ul>
          <li>
            <a href={`mailto:${props.email}`}>
              <MdEmail className="email" />
            </a>
          </li>
          <li>
            <a href={props.linkedin}>
              <FaLinkedin className="linkedin" />
            </a>
          </li>
          <li>
            <a href={props.github}>
              <FaGithub className="github"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCards;
