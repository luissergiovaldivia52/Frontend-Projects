import "./App.css";
import Footer from "./componts/Footer/footer";
import NavBar from "./componts/Header/NavBar";
import DibujoPrueba from "./componts/Main/DibujoPrueba";
import MainContent from "./componts/Main/MainContent";

function App() {
  return (
    <>
      <div className="grid-container">
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
    </>
  );
}

export default App;
