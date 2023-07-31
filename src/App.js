import { useEffect, useState } from "react";
import Code from "./Components/Code";
import FormComponent from "./Components/PostForm";
import Search from "./Components/Navbar";
import ResultCard from "./Components/ResultCard";
import axios from "axios";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { styled } from "styled-components";
import Error from "./Components/Error";

const ResultCardContainer = styled.div`
  height: calc(100vh - 71px);

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  const [cardList, setCardList] = useState([]);
  const [value, setValue] = useState({
    flag: false,
    data: { title: "", description: "", code: [] },
  });

  const [search, setSearch] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://snippet-backend.vercel.app/api/snippet?search=${search}`
        );
        setCardList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [search]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="App">
          <Search search={search} setSearch={setSearch} />
          <ResultCardContainer>
            {cardList.length===0 ? <Error/> :cardList?.map((list) => (
              <ResultCard key={list.id} list={list} setValue={setValue} />
            ))}
            
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
