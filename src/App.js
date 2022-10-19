import Header from "./components/Header";
import Images from "./components/Images";
import RightNav from "./components/RightNav";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="app">
        <Header />
        <Images />
        <div className="right-nav-app">
          <RightNav />
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .app {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 900px;
        }

        @media only screen and (max-width: 700px) {
          .app {
            flex-wrap: wrap;
          }

          .right-nav-app {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
