import imageContext from "../context/imageContext";
import { useContext } from "react";
import Image from "./Image";
function ImageList() {
  const { images } = useContext(imageContext);
  let content = images.map((image) => (
    <Image key={image.id} url={image.urls.small} />
  ));
  // const param = useParams();
  // console.log(param);

  return (
    <div className="containers">
      <div className="image-container">
        <div className="images">{content}</div>
      </div>
    </div>
  );
}
export default ImageList;
