import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import { ROUTE_NAMES } from "./routeNames";
export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<HomePage/>} />
      <Route path={ROUTE_NAMES.CATHEGORY_PAGE} element={<CategoryPage/>} />
    </Routes>
  );
};
