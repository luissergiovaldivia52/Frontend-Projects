import React from "react";

export default function NavBar() {
  return (
    <div>
      {/*Menu */}
      <nav className="navbar">
        <div className="div1">
          <a className="logo" href="#">
            you name
          </a>
        </div>
        <div className="div2">
          <a href="#">Home</a>
          <a href="">/</a>
          <a href="#">Project</a>
          <a href="">/</a>
          <a href="#">Article</a>
          <a href="">/</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      {/*Titulo */}
      <div class="titulo">
        {" "}
        <h1>Frontend Developer</h1>
        <p>html only with proper layout, no styling</p>
      </div>
    </div>
  );
}
