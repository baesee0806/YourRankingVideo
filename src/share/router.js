import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detailpage } from "../pages/DetailPage/DetailPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { Mypage } from "../pages/MyPage/Mypage";
import Layout from "./Layout/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<Detailpage />} />
          <Route path="/my" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
