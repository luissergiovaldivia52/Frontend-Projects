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
        </div>
        {/*Work Experience */}
        <div className="col2-row2">
          {" "}
          <h3 className="h3-titulo">Work Experience</h3>
          <h4 className="h4-titulo">roadmap.sh</h4>
          <p>Solve all the frontend project </p>{" "}
          <p className="visit">Visit my Profile</p>
          <hr />
          {/* Open Source Work */}{" "}
          <h3 className="h3-titulo">OpenSource Work</h3>
          <p>
            Contributed to 50 Opensource <br />
            project. Made my own project with <br />
            200 GitHub stars
          </p>
          <p className="visit">Visit my GitHub Profile</p>
        </div>
        {/* Education */}
        <div className="col2-row3">
          <h3 className="h3-titulo">Education</h3>
          <p>
            Graduate with 3.l76 out of 4 <br />
            CGPA. Won Acme Hackaton. <br />
            Organized 30 sessions
          </p>

          <p className="visit">Curses I took: </p>
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
        <h3 className="h3-titulo">Reviews from my Teachers</h3>
        <div className="cuadro1">
          <p className="p-text">
            John dae was a brillant
            <br />
            student; always stood out <br />
            with his assigments.
          </p>
          <p className="p-john">
            John Doe <br /> Assistant Profesor
          </p>
        </div>
        <div className="cuadro2">
          <p className="p-text">
            John Doe was a brillant <br /> student; always stood out <br /> with
            his assigments.{" "}
          </p>
          <p className="p-john">
            John Doe <br /> Assistant Profesor
          </p>
        </div>
        <div className="cuadro3">
          <p className="p-text">
            John Doe was a brillant <br /> student; always stood out <br /> with
            his assigments.{" "}
          </p>
          <p className="p-john">
            John Doe <br /> Assistant Profesor
          </p>
        </div>
      </div>
    </div>
  );
}
