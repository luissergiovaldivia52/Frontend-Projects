import React from "react";

export default function PageContent() {
  return (
    <div className="cv-container">
      <div className="cv-content">
        {" "}
        <div>
          <hr />
          <h1>Luis Sergio Valdivia</h1> {/*your name */}
        </div>
        <div>
          <h2>Junior Frontend Developer</h2>
          <p>Dirk Kloosteman 1355 B Smata</p> {/* 123 Your Street */}
          <p>Cordoba, Cordoba 5016</p> {/* You City, ST 12345 */}
          <p>+549 351 3110502</p> {/* (123)456-7890 */}
          <p>luis_servio_valdivia@hotmail.com</p> {/* no_reply@example.com */}
        </div>
        <div>
          <h2 className="section-title">Skills</h2>
          <p>
            HTML, CSS, Javascript, Accessibility, Figma to Disign, Responsive
            Web Design,
          </p>
          <p>Technical Writing, Presentation</p>
        </div>
        <div>
          <h2 className="section-title">Education</h2>
          <p className="education">School Name, Location - Degree</p>
          <p>Month 20xx to Month 20xx</p>
          <p>List of exciting thing you did at univerisity</p>
        </div>
        <div>
          <h2 className="section-title">Experience</h2>
          <p className="education">Company Name, Location - Job Title</p>
          <p>Month 20xx to Month 20xx</p>
          <ul>
            <li>List of achievements</li>
            <li>List of achievements</li>
            <li>List of achievements</li>
          </ul>

          <p>Skills: List of skills used or gained at this comapany</p>
        </div>
        <div>
          <h2 className="section-title">Across the internet</h2>
          <p>Add your Linkedln, GitHub profile links</p>
        </div>
      </div>
    </div>
  );
}
