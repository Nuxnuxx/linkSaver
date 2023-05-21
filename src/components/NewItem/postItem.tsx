import { MutationFunction } from "react-query";

const postItem: MutationFunction<ItemsNewApiResponse, ItemProps> =
  async function (params) {
    const { title, link } = params;
    const apiLink = "https://linklist-api.onrender.com";

    const apiRes = await fetch(`${apiLink}/new`, {
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
