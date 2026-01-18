import { useState } from "react";
import "./App.css";
import RandomPage from "./random";
import Launch from "./Launch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FruitList from "./map";
import { MyProvider } from "./map";
import FilmPage from "./FilmPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Film" element={<FilmPage />} />
            <Route path="/" element={<RandomPage />} />
            <Route path="Launch" element={<Launch />} />
            <Route path="Fruits" element={<FruitList />} />
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default App;
