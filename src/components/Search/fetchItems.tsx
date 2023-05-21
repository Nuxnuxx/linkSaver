import { QueryFunction } from "react-query";

const fetchItems: QueryFunction<
  ItemsNewApiResponse[],
  ["items", string]
> = async ({ queryKey }) => {
  const title = queryKey[1];

  let apiRes;
  if (title) {
    apiRes = await fetch(`${import.meta.env.VITE_API_LINK}/search?text="${title}"`);
  } else {
    apiRes = await fetch(`${import.meta.env.VITE_API_LINK}/items`);
  }

  if (!apiRes.ok) {
    throw new Error("Request failed");
  }

  return apiRes.json();
};

export default fetchItems;
