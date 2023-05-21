import { MutationFunction } from "react-query";

const postItem: MutationFunction<ItemsNewApiResponse, ItemProps> =
  async function (params) {
    const { title, link } = params;

    const apiRes = await fetch(`${import.meta.env.VITE_API_LINK}/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        link,
      }),
    });

    if (!apiRes.ok) {
      throw new Error("Request failed");
    }

    return apiRes.json();
  };

export default postItem;
