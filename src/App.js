import "./index.css";

// components
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

// Data
import { fetchData } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  // fetching data
  useEffect(() => {
    // fake server response delay
    setTimeout(() => {
      const res = fetchData();
      setData(res);
    }, 2000);
  }, [data]);

  if (!data || data.length < 0) return <h1>fetching data</h1>;
  return (
    <div className="main-container">
      <div className="App md:container md:mx-auto flex flex-col justify-between items-center bg-baseColor	h-auto ">
        <Header />
        <Content data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
