import React from "react";
import WorkCard from "../WorkCard/WorkCard";
import CardImage from "../../img/Imagew.png";
import CardImage2 from "../../img/Imagef.png";
import CardImage3 from "../../img/ImageN.png";
import "./Work.css";
import { useTheme } from "../../Contexts/ThemeContext";

const Work = () => {
  const { purpleMode, togglePurpleMode } = useTheme();

  return (
    <div id="work-id" className="work mb-3 px-3">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 text-start">
            <h2 className="headline">My work</h2>
            <p
              style={{ color: purpleMode ? "#fff" : "" }}
              data-aos="fade-right"
              // data-aos-delay="50"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="sub-headline"
            >
              Here's a glimpse of some of my recent and exciting projects. Each
              of them reflects my focus on user-centered design and my
              commitment to excellence in user experience.
            </p>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-5">
              {" "}
              <WorkCard
                title="Ecommerce"
                subTitle="2023 - Product design"
                text="Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience."
                btnText="Read case study"
                img={CardImage}
              />
            </div>
            <div className="mb-5">
              <WorkCard
                title="Tour Booking App"
                subTitle="2023 - Product design"
                text="Designed a user-friendly travel booking app that enables users to effortlessly plan and book their dream vacations. The app offers a seamless experience for browsing destinations, selecting packages, and managing reservations, making travel planning a breeze"
                btnText="Read case study"
                img={CardImage2}
              />
            </div>

            <div className="mb-5">
              <WorkCard
                title="Online Streaming App"
                subTitle="2023 - Product design"
                text="Developed an intuitive online streaming app that brings entertainment to users' fingertips. The app offers a vast library of content, smooth playback, and personalized recommendations, enhancing the user's streaming experience"
                btnText="Read case study"
                img={CardImage3}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <a className="text-center see-all-projects" href="">
            See all projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
