import { createContext, useState } from "react";
import fetchImage from "../utils/api";
const imageContext = createContext();

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const handleTerm = (userSearchTerm) => {
    setTerm(userSearchTerm);
    console.log(term, "inside context");
  };
  const fetchImages = async (term) => {
    try {
      const response = await fetchImage(term);
      // console.log(response);
      setImages(response);
    } catch (e) {
      console.log(e);
    }
  };
  // useEffect(() => {
  //   console.log(term);
  //   fetchImages(term);
  // }, [term]);
  const value = {
    images,
    fetchImages,
    handleTerm,
  };
  return (
    <imageContext.Provider value={value}>{children}</imageContext.Provider>
  );
};

export { ImageProvider };
export default imageContext;
