import { MutationFunction } from "react-query";

const postSearch: MutationFunction<ItemsNewApiResponse[], string> = async function (
  title
) {

  const apiRes = await fetch(`${import.meta.env.VITE_API_LINK}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  });

  if (!apiRes.ok) {
    throw new Error("Request failed");
  }

  return apiRes.json();
};

export default postSearch;
