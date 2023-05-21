import { QueryFunction } from "react-query";
import apiLink from "../../utils/apiLink";

const fetchItems: QueryFunction<
  ItemsNewApiResponse[],
  ["items", string]
> = async ({ queryKey }) => {
  const title = queryKey[1];

  let apiRes;
  if (title) {
    apiRes = await fetch(`${apiLink}/search?text="${title}"`);
  } else {
    apiRes = await fetch(`${apiLink}/items`);
  }

  if (!apiRes.ok) {
    throw new Error("Request failed");
  }

  return apiRes.json();
};

export default fetchItems;
