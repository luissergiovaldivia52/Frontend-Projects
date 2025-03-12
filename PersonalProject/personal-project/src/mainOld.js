import "./style.css";
import Footer from "./componets/Footer/footer.jsx";
import NavBar from "./componets/Header/NavBar.jsx";
import DibujoPrueba from "./componets/Main/DibujoPrueba";
import MainContent from "./componets/Main/MainContent.jsx";

document.querySelector("#app").innerHTML = `
  <div>

  <header>
          <NavBar />{" "}
        </header>
        <main>
          <MainContent />
        </main>
        <footer>
          <Footer />{" "}
        </footer>
  </div>
`;
