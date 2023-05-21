import { useState } from "react";
import Results from "../Results/Results";
import { useQuery } from "react-query";
import fetchItems from "./fetchItems";
import "./search.css";
import cuteLoading from "../../assets/img/cute-loading.png";

const Search: React.FC = () => {
  const [name, setName] = useState("");

  const { isLoading, data } = useQuery(["items", name], fetchItems, {
    cacheTime: 0 // disable caching dangerous
  });

  const results = data ?? [];

  return (
    <div className="search">
      <div className="search-group">
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      {isLoading ? (
        <div className="loading-pane">
          <img className="loader" src={cuteLoading} />
        </div>
      ) : (
        <Results items={results} />
      )}
    </div>
  );
};

export default Search;
