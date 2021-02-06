import "./index.css";

// components
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="main-container">
      <div className="App md:container md:mx-auto flex flex-col justify-between items-center bg-baseColor	h-auto ">
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
