import InputForm from "./InputForm";
import Navbar from "./Navbar";

function Search() {
  return (
    <>
      <h1 className="title">Image Search</h1>

      <div className="search-container">
        <div className="container">
          <InputForm />
          <Navbar />
        </div>
      </div>
    </>
  );
}
export default Search;
