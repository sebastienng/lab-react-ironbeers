import "./App.css";
import { Header } from "./component/Header";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePageMenu } from "./component/HomePageMenu";
import { Beers } from "./component/Beers";
import { SingleBeer } from "./component/SingleBeer";
import { AddNewBeerForm } from "./component/AddNewBeerForm";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePageMenu />}></Route>
          <Route path="/" element={<Header />}>
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:id" element={<SingleBeer />} />
            <Route path="/random-beer" element={<HomePageMenu />} />
            <Route path="/new-beer" element={<AddNewBeerForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
