import { MutationFunction } from "react-query";
import apiLink from "../../utils/apiLink";

const postSearch: MutationFunction<ItemsNewApiResponse[], string> = async function (
  title
) {

  const apiRes = await fetch(`${apiLink}/search`, {
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
