import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import Layout from "./containers/Layout";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/sign-up/sign-up";
import CabinetPage from './pages/cabinet-page/cabinet-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path='/cabinet' element={<CabinetPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
