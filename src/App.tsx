import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home/Home";
import Error from "./page/Error/Error";
import SingleRoom from "./page/SingleRoom/SingleRoom";
import Rooms from "./page/Rooms/Rooms";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
