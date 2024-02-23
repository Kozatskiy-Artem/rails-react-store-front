import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import Layout from "./containers/Layout";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/sign-up/sign-up";
import CabinetPage from './pages/cabinet-page/cabinet-page';
import ItemPage from "./pages/item-page/item-page";

function App() {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {!accessToken && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </>
          )}
          {accessToken && (
            <Route path='/cabinet' element={<CabinetPage />} />
          )}
          <Route path="/item/:itemId" element={<ItemPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
