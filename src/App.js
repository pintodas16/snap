import "./assets/style/style.css";
import Search from "./components/Search";
import ImageList from "./components/ImageList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Search />
      <Routes>
        <Route path="" element={<Navigate to="/bird" />} />
        <Route path="/:term" element={<ImageList />} />
        <Route path="/search/:searchTerm" element={<ImageList />} />
      </Routes>
    </Router>
  );
}

export default App;
