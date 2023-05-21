import { MutationFunction } from "react-query";
import apiLink from "../../utils/apiLink";

const postDeleteItem: MutationFunction<ItemsNewApiResponse, string> = async function (
  params
) {

  const  title  = params;

  const apiRes = await fetch(`${apiLink}/delete`, {
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
