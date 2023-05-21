import { MutationFunction } from "react-query";

const postDeleteItem: MutationFunction<ItemsNewApiResponse, string> = async function (
  params
) {

  const  title  = params;

  const apiRes = await fetch(`${import.meta.env.VITE_API_LINK}/delete`, {
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

export default postDeleteItem;
