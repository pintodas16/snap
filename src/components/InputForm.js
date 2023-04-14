import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageContext from "../context/imageContext";

import { useContext } from "react";
function InputForm() {
  const { fetchImages } = useContext(imageContext);

  const navigate = useNavigate();
  const [userSearch, setUserSearch] = useState("");
  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userSearch.trim()) {
      navigate(`/search/${userSearch}`);
      fetchImages(userSearch);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="search-input">
        <input
          className="input"
          type="text"
          placeholder="Enter a name.."
          value={userSearch}
          onChange={handleChange}
        />
      </div>
      <div className="search-btn">
        <input className="btn submit-btn" type="submit" value="Search" />
      </div>
    </form>
  );
}
export default InputForm;
