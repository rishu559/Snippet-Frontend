import { useEffect, useState } from "react";
import Code from "./Components/Code";
import FormComponent from "./Components/PostForm";
import Search from "./Components/Navbar";
import ResultCard from "./Components/ResultCard";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import styled from "styled-components";
import Error from "./Components/Error";

const ResultCardContainer = styled.div`
  height: calc(100vh - 71px);

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

function App() {
  const [cardList, setCardList] = useState([]);
  const [value, setValue] = useState({
    flag: false,
    data: { title: "", description: "", code: [] },
  });
  const [search, setSearch] = useState("");

  // Fetch snippets from localStorage
  const getSnippets = () => {
    const data = localStorage.getItem("snippets");
    return data ? JSON.parse(data) : [];
  };

  useEffect(() => {
    const allSnippets = getSnippets();
    if (search) {
      setCardList(
        allSnippets.filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setCardList(allSnippets);
    }
  }, [search]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="App">
          <Search search={search} setSearch={setSearch} />
          <ResultCardContainer>
            {cardList.length === 0 ? (
              search !== "" && <Error />
            ) : (
              <CardGrid>
                {cardList.map((item, idx) => (
                  <ResultCard key={idx} list={item} setValue={setValue} />
                ))}
              </CardGrid>
            )}
          </ResultCardContainer>

          {value.flag && <Code props={value.data} setValue={setValue} />}
        </div>
      ),
    },
    {
      path: "/post",
      element: (
        <div className="App">
          <FormComponent />
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
