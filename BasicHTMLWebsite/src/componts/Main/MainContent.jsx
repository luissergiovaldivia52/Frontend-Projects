import React from "react";

export default function MainContent() {
  return (
    <div className="container ">
      {/*Frondend Developer */}

      <div className="column2">
        {" "}
        <div className="col2-row1">
          {" "}
          {/* <div className="project"> */}
          {/*Project */}
          <h3 className="h3-titulo">Project</h3>
          <p> HTML Only Portafolio </p>
          <hr />
          <p>Calculator </p>
          <hr />
          <p>Quiz App</p>
          <hr />
          <p>CountDown Time</p>
          <hr />
          <p className="prueba">Product Upcoming Page</p>
          {/*
      </div> */}
          {/* <div className="product">
        {" "}
        <span>Product Upcoming Page</span>
      </div> */}
        </div>
        {/*Work Experience */}
        <div className="col2-row2">
          <div className="work-experience">
            <div className="col2-row2-col1-row1">
              {" "}
              <h3>Work Experience</h3>
            </div>
            <div className="col2-row2-col1-row2">
              <h4>roadmap.sh</h4>
            </div>
            <div className="col2-row2-col1-row3">
              <p>Solve all the frontend project </p>
            </div>
            <div className="col2-row2-col1-row4">
              {" "}
              <span className="visit">Visit my Profile</span>
            </div>
          </div>
          {/* Open Source Work */}
          <div className="open-source">
            {" "}
            <h3>OpenSource Work</h3>
            <p>
              Contributed to 50 Opensource <br />
              project. Made my own project with <br />
              200 GitHub stars
            </p>
            <span>Visit my GitHub Profile</span>
          </div>
        </div>
        {/* Education */}
        <div className="col2-row3">
          <h3>Education</h3>
          <p>
            Graduate with 3.l76 out of 4 <br />
            CGPA. Won Acme Hackaton. <br />
            Organized 30 sessions
          </p>
          <span></span>
          <span>Curses I took</span>
          <ul>
            <li>Object Oriented Programming</li>
            <li>Data Structures and Algorithms</li>
            <li>Web Engineering </li>
            <li>Artificial Intelligence</li>
            <li>Human Computer Interaction</li>
            <li>Conputer Graphics</li>
            <li>DataBase Management Systems</li>
            <li>Distributed Database Systems</li>
            <li>Discreet Mathematics</li>
          </ul>
        </div>
      </div>
      {/* Reviews from my Teachers */}
      <div className="column3">
        {" "}
        <div>
          <h1>Reviews from my Teachers</h1>
        </div>
        <div>cuadro1</div>
        <div>cuadro2</div>
        <div>cuadro3</div>
      </div>
    </div>
  );
}
