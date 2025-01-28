import React from "react";

// export default function NavBar() {

//   return (
//     <div>
//       <nav className="menu">
//         <div className="navbar-brand">you name</div>

//         <ul className="navbar-nav">
//           <li>
//             <p>Home</p>
//           </li>
//           <li>
//             <p>Projects</p>
//           </li>
//           <li>
//             <p>Articles</p>
//           </li>
//           <li>
//             {" "}
//             <p>Contact</p>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
// export default function NavBar() {
//   return (
//     <div>
//       <nav className="menu">
//         {/* <div className="navbar-brand">you name</div> */}

//         <ul className="row">
//           <li className="item1">
//             <div className="logo">you name</div>
//           </li>
//           <li className="item2">
//             <p>Home</p>
//           </li>
//           <li className="item3">
//             <p>Projects</p>
//           </li>
//           <li className="item4">
//             <p>Articles</p>
//           </li>
//           <li className="item5">
//             {" "}
//             <p>Contact</p>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        {/* <div className="navbar-brand">you name</div> */}

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
      <div class="titulo">
        {" "}
        <h1>Frontend Developer</h1>
        <p>html only with proper layout, no styling</p>
      </div>
    </div>
  );
}
