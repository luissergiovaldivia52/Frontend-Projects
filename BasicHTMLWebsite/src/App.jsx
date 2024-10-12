import "./App.css";
import Footer from "./componts/Footer/footer";
import MainContent from "./componts/Main/MainContent";

function App() {
  return (
    <>
      <div className="grid-container">
        <header></header>
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
