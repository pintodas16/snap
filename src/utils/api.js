import axios from "axios";

const fetchImage = async (term) => {
  //   const terms = "computer";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 4ZSpgYBVYndZb-PSRi1-kf11qWNIXoi7nx2EaI_ba3I",
    },
    params: {
      query: term,
      per_page: 9,
      order_by: "latest",
    },
  });
  return response.data.results;
};
export default fetchImage;
