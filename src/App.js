import "./App.css";
import MyFooter from "./Components/MyFooter";
import MyBody from "./Components/MyBody";
import TvBody from "./Components/TvBody";
import MyNavBar from "./Components/MyNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // import Corpo from "./Components/prova";
import NotFound from "./Components/NotFound";
import DetailsCard from "./Components/DetailsCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/Home" element={<MyBody />} />
          <Route path="/TvSeries" element={<TvBody />} />
          <Route path="/Details/:id" element={<DetailsCard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
