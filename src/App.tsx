import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import NewItem from "./components/NewItem/NewItem";
import './assets/style/style.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/new" element={<NewItem/>}/>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
