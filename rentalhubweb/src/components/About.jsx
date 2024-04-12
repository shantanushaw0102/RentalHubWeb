import React from "react";
import img3 from "../assets/img3.jpg";
import TeamCards from "./TeamCard";
import TeamDetails from "../database/TeamDetails"
import "../styles/about.css";

function createTeam(data) {
  return (
    <TeamCards
      key={data.id}
      img={data.imgUrl}
      name={data.name}
      role={data.role}
      about={data.about}
      email={data.email}
      linkedin={data.linkedin}
      github={data.gitHub}
      
    />
  );
}

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="grid grid-two-column">
          <div className="about-image">
            <figure>
              <img src={img3} alt="about-image" className="img-style" />
            </figure>
          </div>

          <div className="company-about">
            <h2>About Us</h2>

            <p>
              Welcome to RentEase, where convenience meets affordability! We are
              a passionate team of college students dedicated to revolutionizing
              the way people access the items they need. Our journey began in
              the halls of academia, where we identified a common challenge: the
              hassle of obtaining seldom-used items without breaking the bank.
            </p>
            <p>
              At RentEase, we believe in the power of sharing resources to make
              life more accessible and sustainable. Our platform connects
              individuals seeking temporary solutions with those willing to lend
              a helping hand, fostering a sense of community and collaboration.
              Whether you're a student on a budget, a professional with
              occasional needs, or someone with extra items to spare, RentEase
              is here to simplify your life.{" "}
            </p>
          </div>
        </div>

        <div className="company-profile">
          <div className="grid grid-three-column">
            <div className="history">
              <h2>History</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                voluptatibus totam quos qui vero quisquam cum at repudiandae
                similique laudantium omnis, porro dolores, debitis praesentium
                dicta. Consectetur veritatis inventore odio.
              </p>
            </div>
            <div className="mission">
              <h2>Mission</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                error fugit tenetur et molestias laboriosam, adipisci animi
                beatae reiciendis quod!
              </p>
            </div>
            <div className="services">
              <h2>Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, veniam!
              </p>
              <ul>
                <li>Wide Range of Products</li>
                <li>Free Shipment</li>
                <li>Easy Cancelation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="team-container">
      <h1 className="team-heading">
        <span>Our Awesome Team</span>
      </h1>
      <dl className="dictionary">
      {TeamDetails.map(createTeam)}
      </dl>
    </div>

    </>
  );
};

export default About;
