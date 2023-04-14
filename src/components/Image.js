function Image({ url }) {
  return (
    <div className="image">
      <img className="img" src={url} alt="" />
    </div>
  );
}
export default Image;
