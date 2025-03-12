import "./style.css";

import NavBar from "./componets/Header/NavBar";
import MainContent from "./componets/Main/MainContent";
import Footer from "./componets/Footer/footer";

document.querySelector("#app").innerHTML = `
  <div class="grid-container">
  
    <header>

    ${NavBar()}
    </header>
    <main>
    ${MainContent()}
    </main>
    <footer>  
    ${Footer()}
    </footer>


  </div>
`;
