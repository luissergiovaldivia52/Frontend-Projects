//import "./style.css";

//import NavBar from "./componets/Header/NavBar";
import "../FlexboxChallenge-01/challenge-start/style.css";
//import MainContent from "./componets/Main/MainContent";
//import Footer from "./componets/Footer/footer";
// import Flexbox01 from "../FlexboxChallenge#1/challenge start/flexbox01.js";
//import { flexboxPrueba } from "../FlexboxChallenge-01/challenge-start/flexboxPrueba.js";
import { flexbox01 } from "../FlexboxChallenge-01/challenge-start/flexbox01.js";

// document.querySelector("#app").innerHTML = `
//   <div class="grid-container">

//     <header>

//     ${NavBar()}
//     </header>
//     <main>
//     ${MainContent()}
//     </main>
//     <footer>
//     ${Footer()}
//     </footer>

//   </div>
// `;

document.querySelector("#app").innerHTML = `
<div>
${flexbox01()}
</div>

 
`;
